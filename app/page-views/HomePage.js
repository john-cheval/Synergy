"use client";
import React from "react";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("../_components/page_components/Banner"), {
  ssr: false,
});

const Solution = dynamic(
  () => import("../_components/page_components/Solution"),
  { ssr: false }
);

const Industries = dynamic(() =>
  import("../_components/page_components/Industries")
);

const OurTeams = dynamic(
  () => import("../_components/page_components/OurTeams"),
  { ssr: false }
);
const FeaturePart = dynamic(() =>
  import("../_components/page_components/FeaturePart")
);
const OurServices = dynamic(() =>
  import("../_components/page_components/OurServices")
);
const Testimonials = dynamic(() =>
  import("../_components/page_components/Testimonials")
);

import OurProcess from "../_components/page_components/OurProcess";
// import Banner from "../_components/page_components/Banner";
const HomePage = ({ data, services }) => {
  return (
    <>
      <Banner data={data?.slider_list} />
      <FeaturePart data={data} />
      <OurServices service={services} />
      <OurProcess data={data} />
      <Solution data={data} />
      <Industries data={data} />
      <OurTeams data={data} />
      <Testimonials />
    </>
  );
};

export default HomePage;
