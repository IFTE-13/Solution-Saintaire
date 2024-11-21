"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Reviews() {
  return (
    <div className="h-[12rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
    {
        description:
          "The team was incredibly thorough and left every corner of my office spotless. I couldn’t be happier with the service!",
        name: "Sarah T.",
      },
      {
        description:
          "I've never seen my floors look this clean. The crew was prompt, professional, and efficient. Highly recommended!",
        name: "Mark R.",
      },
      {
        description:
          "Their attention to detail is impressive. They made my home feel fresh and inviting. I’m definitely booking them again.",
        name: "Emily W.",
      },
      {
        description:
          "Outstanding service! The team arrived on time and did a fantastic job cleaning up after our event. Very satisfied!",
        name: "David L.",
      },
      {
        description:
          "They went above and beyond, even handling areas I hadn’t thought of. My building has never looked better!",
        name: "Linda P.",
      },
];
