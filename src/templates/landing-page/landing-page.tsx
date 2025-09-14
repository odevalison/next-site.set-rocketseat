import {
  CallToActionSection,
  CustomerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-14 md:gap-24">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  );
};
