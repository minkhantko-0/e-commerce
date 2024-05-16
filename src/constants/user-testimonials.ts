import { ReactNode } from "react";
import { USER_IMAGES } from "./user-images.sources";

interface UserTestimonial {
  avatar: string;
  name: string;
  review: {
    head: string;
    emphasis: string;
    tail: string;
  };
}

export const USER_TESTIMONIALS: UserTestimonial[] = [
  {
    avatar: USER_IMAGES[0],
    name: "Jonathan",
    review: {
      head: ` "The case feels durable and I even got a compliment on the
      design. Had the case for two and a half months now and`,
      tail: `, on the case I had before, the image started fading into
      yellow-ish color after a couple weeks. Love it."`,
      emphasis: ` the image is super clear`,
    },
  },
  {
    avatar: USER_IMAGES[3],
    name: "Josh",
    review: {
      head: ` "I usually keep my phone together with my keys in my pocket
        and that led to some pretty heavy scratchmarks on all of my
        last phone cases. This one, besides a barely noticeable
        scratch on the corner,`,
      emphasis: "looks brand new after about half a year",
      tail: `. I dig it."`,
    },
  },
];

export const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];
