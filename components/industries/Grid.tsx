import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Logo from "@/assets/hero.png"
import Image from "next/image";
import { Factory, Fence, GraduationCap, HeartPulse, Hotel, SquareActivity } from "lucide-react";

export function BentoGridSection() {
  return (
    <BentoGrid className="container mx-auto md:auto-rows-[30rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Commercial",
    description: "Commercial cleaning is essential for maintaining a professional, welcoming environment. Whether it’s an office or retail space, a clean workplace boosts employee productivity and creates a positive impression on clients. Our team offers flexible cleaning schedules tailored to your business, ensuring your space remains spotless and sanitary at all times.",
    header: <Image src={Logo} alt="hero"/>,
    className: "md:col-span-1",
    icon: <Hotel className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Education",
    description: "Cleanliness in educational spaces is vital for student and staff health. We provide thorough cleaning services for schools and universities, focusing on hygiene to prevent illness. Our team ensures classrooms, restrooms, and common areas are sanitized and maintained, supporting a safe and productive learning environment.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <GraduationCap className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Industrial",
    description: "Industrial cleaning requires specialized tools and expertise to maintain safety and cleanliness in warehouses, factories, and plants. Our team handles everything from cleaning heavy machinery to deep-cleaning floors, ensuring a safe, hygienic space that supports both productivity and safety in your operations.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Factory className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Hospitality",
    description:
      "In the hospitality industry, cleanliness directly affects guest experience. We offer professional cleaning services for hotels and resorts, ensuring rooms and common areas are spotless and sanitized. Our team works around your schedule to provide a comfortable, inviting space for guests, enhancing their overall stay.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <SquareActivity className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Healthcare",
    description:
      "In healthcare facilities, hygiene is essential to prevent infection and promote patient safety. We use hospital-grade disinfectants to clean patient rooms, waiting areas, and medical equipment, ensuring a sterile environment. Our team follows the highest standards to maintain a safe, sanitized space for both patients and staff.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <HeartPulse className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Institutional",
    description:
      "Institutional cleaning ensures public spaces like government buildings, libraries, and museums remain clean and safe. Our team provides thorough, reliable cleaning, maintaining high standards in these high-traffic environments. We focus on every detail to create a welcoming and hygienic space for visitors and employees alike.",
    header: <Skeleton />,
    className: "md:col-span-3",
    icon: <Fence className="h-8 w-8 text-red-500" />,
  },
];
