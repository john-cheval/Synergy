import InnerBanner from "@/app/_components/page_components/InnerBanner";

export const metadata = {
  title: "Synergy | Diversity & Inclusion",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageDiversityInclusion() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { post_content, top_banner } = await fetch(
    `${APIURL}/full_details?ID=153`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  const data = {
    short_description: "Diversity & Inclusion",
    top_banner: top_banner,
    small_heading: "Diversity & Inclusion",
  };
  return (
    <>
      <InnerBanner data={data} />

      <section
        className="inner-content-section section-gap wow fadeInUp divercity-page"
        data-wow-duration="1500ms"
        data-wow-delay="300ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5> Diverse Backgrounds, unique ideas </h5>
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
      {/* <Testimonials /> */}
    </>
  );
}
