import Hero from "@/components/home/Hero";
import BrandLogos from "@/components/home/BrandLogos";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Solutions from "@/components/home/Solutions";
import WhatSetsUsApart from "@/components/home/WhatSetsUsApart";
import CalloutStrip from "@/components/home/CalloutStrip";
import AgileProcess from "@/components/home/AgileProcess";
import Testimonials from "@/components/home/Testimonials";
import Portfolio from "@/components/home/Portfolio";
import MeetingCta from "@/components/home/MeetingCta";
import Technologies from "@/components/home/Technologies";
import Blogs from "@/components/home/Blogs";
import ScheduleCall from "@/components/home/ScheduleCall";
import EngagementModels from "@/components/home/EngagementModels";
import Locations from "@/components/home/Locations";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandLogos />
      <About />
      <Services />
      <Solutions />
      <WhatSetsUsApart />
      <CalloutStrip />
      <AgileProcess />
      <Testimonials />
      <Portfolio />
      <MeetingCta />
      <Technologies />
      <Blogs />
      <ScheduleCall />
      <EngagementModels />
      <Locations />
    </>
  );
}
