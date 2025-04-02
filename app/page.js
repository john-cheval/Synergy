import dynamic from "next/dynamic";
const Banner = dynamic(() => import("./_components/page_components/Banner"), {
  ssr: false,
});
import FeaturePart from "./_components/page_components/FeaturePart";
import OurServices from "./_components/page_components/OurServices";
import OurProcess from "./_components/page_components/OurProcess";
import Solution from "./_components/page_components/Solution";
import Industries from "./_components/page_components/Industries";
import OurTeams from "./_components/page_components/OurTeams";
import Testimonials from "./_components/page_components/Testimonials";

export const metadata = {
  title: "Synergy | Home",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function Home() {
  let APIURL = process.env.API_BASE_URL;
  const { data } = await fetch(
    `https://chevaldemo.xyz/demo/synergy/wp-json/custom/v1/full_details?ID=10`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  console.log(data, "this is the data");

  let [section_data_5] = data.sections.filter(
    (item) => item.section_name == "Section 5"
  );

  return (
    <>
      <Banner data={data?.meta_data} />
      <FeaturePart data={data} />
      <OurServices data={data} />
      <OurProcess data={data} />
      <Solution data={data?.solutions} sectionsData={section_data_5} />
      <Industries data={data} />
      <OurTeams data={data} />
      <Testimonials />
    </>
  );
}
