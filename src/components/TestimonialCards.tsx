"use client";

import React from "react";
import { Boxes } from "./ui/background-boxes";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "This platform has completely transformed the way I learn music. The interactive lessons and real-time feedback helped me improve faster than I ever thought possible.",
    name: "Emma Johnson",
    title: "Aspiring Pianist",
  },
  {
    quote:
      "As a music teacher, I love how the app makes it easy to connect with my students. The virtual classes and practice tools are a game changer for online learning.",
    name: "David Smith",
    title: "Professional Music Instructor",
  },
  {
    quote:
      "The library of sheet music and play-along tracks is incredible. I’ve been able to explore new genres and really expand my repertoire. Highly recommend!",
    name: "Sophia Martinez",
    title: "Guitar Enthusiast",
  },
  {
    quote:
      "What I love most is the collaboration feature. Being able to compose and jam with other students from around the world has been an amazing experience.",
    name: "Liam Brown",
    title: "Music Composition Student",
  },
  {
    quote:
      "Whether you're a beginner or an experienced musician, this app has something for everyone. The personalized learning path has been perfect for my busy schedule.",
    name: "Olivia Taylor",
    title: "Busy Professional & Hobbyist",
  },
];

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center rounded-md overflow-hidden antialiased bg-white dark:bg-black relative">
      {/* Only apply the Boxes background here */}
      <div className="absolute inset-0 z-0">
        <Boxes />
      </div>

      {/* Testimonial content */}
      <div className="z-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default TestimonialCards;
