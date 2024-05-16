"use client";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./max-width-warpper";
import { useInView } from "framer-motion";
import { splitArray } from "@/shared/utility-functions/split-arrary";
import { PHONES } from "@/constants/user-testimonials";
import { cn } from "@/lib/utils";
import { POSSIBLE_ANIMATION_DELAYS } from "@/constants/animation-delays";
import Phone from "./phone";

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.5rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
};

const ReviewColumn = ({
  phones,
  className,
  phoneClassName,
  msPerPx,
}: {
  phones: string[];
  className?: string;
  phoneClassName?: (reviewIndex: number) => string;
  msPerPx?: number;
}) => {
  const colRef = useRef<HTMLDivElement | null>(null);

  const [colHeight, setColHeight] = useState(0);
  const duration = `${colHeight * (msPerPx || 1)}ms`;

  useEffect(() => {
    if (!colRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColHeight(colRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(colRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={colRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {phones.concat(phones).map((imgSrc, idx) => (
        <Review
          key={idx}
          className={phoneClassName?.(idx % phones.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};

const ReviewGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const [col1, col2, tempCol] = splitArray(PHONES, 3);
  const col3 = splitArray(tempCol, 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 h-[49rem] grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 overflow-hidden max-h-[150vh] grid-cols-1 items-start sm:mt-20"
    >
      {isInView ? (
        <>
          <ReviewColumn
            phones={[...col1, ...col3.flat(), ...col2]}
            className="hidden md:block"
            phoneClassName={(idx) => (idx >= col2.length ? "lg:hidden" : "")}
            msPerPx={10}
          />
          <ReviewColumn
            phones={[...col2, ...col3[1]]}
            phoneClassName={(idx) =>
              cn({
                "md:hidden": idx >= col1.length + col3[0].length,
                "lg:hidden": idx >= col1.length,
              })
            }
            msPerPx={15}
          />
          <ReviewColumn
            phones={col3.flat()}
            msPerPx={10}
          />
        </>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  );
};

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        src="/what-people-are-buying.png"
        alt="example"
        aria-hidden="true"
        className="absolute hidden select-none xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

export default Reviews;
