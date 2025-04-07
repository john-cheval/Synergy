import dynamic from "next/dynamic";
const Banner = dynamic(
  () => import("./_components/page_components/Banner") /* , {
  ssr: false,
} */
);
const Solution = dynamic(() =>
  import("./_components/page_components/Solution")
);
const Industries = dynamic(() =>
  import("./_components/page_components/Industries")
);
const OurTeams = dynamic(() =>
  import("./_components/page_components/OurTeams")
);
const FeaturePart = dynamic(
  () => import("./_components/page_components/FeaturePart") /* ,
  { ssr: false } */
);
const OurServices = dynamic(() =>
  import("./_components/page_components/OurServices")
);
const Testimonials = dynamic(() =>
  import("./_components/page_components/Testimonials")
);

// import FeaturePart from "./_components/page_components/FeaturePart";
// import OurServices from "./_components/page_components/OurServices";
import OurProcess from "./_components/page_components/OurProcess";
// import OurTeams from "./_components/page_components/OurTeams";
// import Testimonials from "./_components/page_components/Testimonials";

export const metadata = {
  title: "Synergy | Home",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function Home() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const data = await fetch(`${APIURL}/full_details?ID=10`, {
    cache: "no-store",
  }).then((res) => res.json());

  const services = await fetch(`${APIURL}/services`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <>
      <Banner data={data?.slider_list} />
      <FeaturePart data={data} />
      <OurServices data={services} />
      <OurProcess data={data} />
      <Solution data={data} />
      <Industries data={data} />
      <OurTeams data={data} />
      <Testimonials />
    </>
  );
}
