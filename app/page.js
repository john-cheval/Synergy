import HomePage from "./page-views/HomePage";

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
      <HomePage data={data} services={services} />
    </>
  );
}
