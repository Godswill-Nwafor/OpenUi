import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PopularComponents } from "@/components/sections/PopularComponents";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { ContributeSection } from "@/components/sections/ContributeSection";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { FAQSection } from "@/components/sections/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenUI Hub — Build Beautiful Interfaces Together",
  description:
    "A production-quality open-source UI component library. Browse 60+ React components, preview live, copy code, and contribute your own.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PopularComponents />
      <CategoriesSection />
      <ContributeSection />
      <OpenSourceSection />
      <FAQSection />
    </>
  );
}
