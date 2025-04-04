import InnerBanner from "@/app/_components/page_components/InnerBanner";

export const metadata = {
  title: "Synergy | CSR",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageCsr() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { post_title, top_banner, post_content } = await fetch(
    `${APIURL}/full_details?ID=342`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  const data = {
    small_heading: post_title,
    top_banner,
    short_description: post_title,
  };

  return (
    <>
      <InnerBanner data={data} />

      <section
        className="inner-content-section section-gap csr_page wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="1000ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5>{post_title} </h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="inner-content-box"
                dangerouslySetInnerHTML={{
                  __html: post_content,
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
