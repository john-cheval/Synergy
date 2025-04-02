import InnerBanner from "@/app/_components/page_components/InnerBanner";
import Solution from "@/app/_components/page_components/Solution";
import Testimonials from "@/app/_components/page_components/Testimonials";

export const metadata = {
  title: "Synergy | CSR",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageCsr() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await fetch(`${APIURL}/cms/pages/csr`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <>
      <InnerBanner data={data?.meta_data} />

      <section
        className="inner-content-section section-gap csr_page wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="1000ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5> {data?.meta_data?.title} </h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="inner-content-box"
                dangerouslySetInnerHTML={{
                  __html: data?.meta_data?.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials />  */}
    </>
  );
}
