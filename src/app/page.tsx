import MaxWidthWrapper from "@/components/max-width-warpper";
import Phone from "@/components/phone";
import { PROPERTIES } from "@/constants/home-page.properties";
import { USER_IMAGES } from "@/constants/user-images.sources";
import { Check, Star } from "lucide-react";

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
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
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
    </div>
  );
}
