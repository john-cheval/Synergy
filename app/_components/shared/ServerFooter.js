import React from "react";
import Footer from "./Footer";

let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function getServicesData() {
  const data = await fetch(`${APIURL}/menu/footer`, {
    cache: "no-store",
  }).then((res) => res.json());

  return {
    services: data["350"] || [],
    slpservices: data["351"] || [],
  };
}

async function getFooterContent() {
  const data = await fetch(`${APIURL}/full_details?ID=23`, {
    cache: "no-store",
  }).then((res) => res.json());

  return data;
}

const ServerFooter = async () => {
  const { services, slpservices } = await getServicesData();
  const footerContent = await getFooterContent();

  return (
    <Footer
      services={services}
      slpservices={slpservices}
      footerContent={footerContent}
    />
  );
};

export default ServerFooter;
