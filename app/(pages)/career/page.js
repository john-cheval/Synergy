import Link from "next/link";
import JobItem from "@/app/_components/page_components/JobItem";
import Bredcumb from "@/app/_components/page_components/Bredcumb";

export const metadata = {
  title: "Synergy | Career",
  description: "Your Strategic Partner for Business Excellence",
};
export const dynamic = "force-dynamic";
export default async function PageCareer({ params }) {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { post_title, top_banner, small_heading, short_description } =
    await fetch(`${APIURL}/full_details?ID=20`, {
      cache: "no-store",
    }).then((res) => res.json());

  const job = await fetch(`${APIURL}/careers_list`, {
    cache: "no-store",
  }).then((res) => res.json());

  const jobs = Object.values(job);

  return (
    <>
      <section className="banner-section wow fadeInUp">
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <img src="/img/inner-banner.png" />
          </div>
          <div className="single-banner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="inner-banner-content">
                    <div className="h_w">
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        {post_title}
                      </h1>
                    </div>
                    <Bredcumb title={post_title} />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="inner-banner-img">
                    <img src={top_banner} alt={post_title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="inner-content-section section-gap wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="500ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5>{small_heading} </h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="inner-content-box"
                dangerouslySetInnerHTML={{
                  __html: short_description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="careers-section">
        <div className="container">
          {jobs.length == 0 && <h4>No jobs available at this moment!</h4>}
          {jobs.length > 0 &&
            jobs.map((item) => {
              return <JobItem key={item.ID} data={item} />;
            })}
        </div>
      </section>
    </>
  );
}
