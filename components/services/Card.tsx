"use client";

import Image from "next/image";
import React from "react";
import HeroImage from "../../assets/hero.png";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Card() {
  const projects = [
    {
      title: "Disinfection",
      description:
        "Providing top-tier disinfection services to ensure clean and safe environments in various settings, from offices to healthcare facilities.",
    },
    {
      title: "Cleaning",
      description:
        "Comprehensive cleaning solutions for homes and businesses, tailored to meet specific sanitation and upkeep needs.",
    },
    {
      title: "Indoor Janitorial",
      description:
        "Professional janitorial services focused on maintaining pristine indoor spaces, including offices, schools, and retail locations.",
    },
    {
      title: "Commercial Floor Cleaning",
      description:
        "Expert floor cleaning services for commercial properties, enhancing the look and lifespan of various flooring types.",
    },
    {
      title: "Outdoor Building Maintenance",
      description:
        "Outdoor maintenance services to keep building exteriors and surrounding areas clean and well-kept year-round.",
    },
    {
      title: "Event Support",
      description:
        "Full-service event support, including pre-event setup and post-event cleaning, to ensure smooth and spotless event experiences.",
    },
  ];

  return (
    <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, idx) => (
        <CardContainer key={idx} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[30rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={HeroImage}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Book now →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
