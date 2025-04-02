import dynamic from "next/dynamic";
// import InnerBanner from "@/app/_components/page_components/InnerBanner";
const InnerBanner = dynamic(
  () => import("@/app/_components/page_components/InnerBanner"),
  { ssr: false }
);
import Solution from "@/app/_components/page_components/Solution";
import Testimonials from "@/app/_components/page_components/Testimonials";

export const metadata = {
  title: "Synergy | Who We Are",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageAboutUs() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await fetch(`${APIURL}/cms/pages/about`, {
    cache: "no-store",
  }).then((res) => res.json());
  let [our_values] = data.sections.filter(
    (item) => item.section_name == "Our Values"
  );

  let [our_mission] = data.sections.filter(
    (item) => item.section_name == "Our Mission"
  );
  let [our_vision] = data.sections.filter(
    (item) => item.section_name == "Our  Vision"
  );

  console.log("our_vision:", our_vision);
console.log("Image URL:", `${process.env.NEXT_PUBLIC_MEDIA_URL}/${our_vision?.image}`);
  // console.log(our_vision, "data");
  return (
    <>
      <InnerBanner data={data?.meta_data} />

      <section
        className="inner-content-section section-gap wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="1500ms"
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

      {/* <!--====== Skill Section Start ======--> */}
      <section className="mission-vission-section">
        <div className="container">
          <div
            className="row justify-content-center row-eq-height wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="500ms"
          >
            <div className="col-lg-6 col-md-6 p-2 order-lg-2">
              <div className="mission-video h-100">
                {our_mission.media_type.indexOf("image") > -1 ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${our_mission?.image}`}
                    alt={our_mission?.media_type}
                  />
                ) : (
                  <video autoPlay loop className="video-mission" muted>
                    <source
                      src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${our_mission?.image}`}
                      type={our_mission?.media_type} 
                      poster={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${our_mission?.image}`}
                    />
                  </video>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col p-2 d-flex flex-column">
              <div className="box-content mission-content h-100">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: our_mission?.section_title.replace(/<\/?p>/g, ""),
                  }}
                ></h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: our_mission?.section_content,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center row-eq-height wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="1000ms"
          >
            <div className="col-lg-6 col-md-6 p-2">
              <div className="mission-video h-100">
                {/* {our_vision.media_type ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${our_vision?.image}`}
                    alt={our_vision?.media_type}
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    className="video-mission"
                    muted
                  >
                    <source
                      src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${our_vision?.image}`}
                      type={our_vision?.media_type}
                    />
                  </video>
                )} */}
                <img
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${our_vision?.image}`}
                    alt={our_vision?.media_type}
                  />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col p-2 d-flex flex-column">
              <div className="box-content vission-content h-100">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: our_vision?.section_title.replace(/<\/?p>/g, ""),
                  }}
                ></h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: our_vision?.section_content,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Skill Section End ======--> */}
      <div className="about-page-sec">
        <Solution data={data?.values} sectionsData={our_values} />
      </div>
      {/* <Testimonials data={data} />  */}
    </>
  );
}
