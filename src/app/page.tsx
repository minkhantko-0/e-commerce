import FiveStars from "@/components/five-stars";
import MaxWidthWrapper from "@/components/max-width-warpper";
import Phone from "@/components/phone";
import Reviews from "@/components/reviews";
import { Icons } from "@/components/ui/icons";
import { PROPERTIES } from "@/constants/home-page.properties";
import { USER_IMAGES } from "@/constants/user-images.sources";
import { USER_TESTIMONIALS } from "@/constants/user-testimonials";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img
                  src="/snake-1.png"
                  alt="snake picture"
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-2 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite moments with your phone,{""}
                <span className="font-semibold">one-of-one</span> phone case.
                Casecobra allows you to cheerish these moments, not just your
                phone.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  {...PROPERTIES.map((value) => (
                    <li
                      className="flex gap-1.5 items-center text-left"
                      key={value}
                    >
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      {value}
                    </li>
                  ))}
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row sm:items-start items-center gap-5">
                <div className="flex -space-x-4">
                  {USER_IMAGES.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={"user image" + (index + 1)}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <FiveStars />
                  </div>
                  <p>
                    <span className="font-semibold">1,250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="your image"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt="line"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone
                imgSrc="/testimonials/1.jpg"
                className="w-64"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row gap-4 items-center sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block  pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say?
            </h2>
            <img
              src="/snake-2.png"
              alt="snake image"
              className="w-24 order-0 lg:order-2"
            />
          </div>

          {/* user testimonials */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {USER_TESTIMONIALS.map(({ name, avatar, review }) => (
              <div
                className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
                key={name}
              >
                <div className="flex gap-0.5 mb-2">
                  <FiveStars />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    {review.head}{" "}
                    <span className="p-0.5 bg-slate-800 text-white">
                      {review.emphasis}
                    </span>
                    {review.tail}
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <img
                    src={avatar}
                    alt="user"
                    className="rounded-full h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{name}</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}
