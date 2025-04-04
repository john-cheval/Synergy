import dynamic from "next/dynamic";
const InnerBanner = dynamic(
  () => import("@/app/_components/page_components/InnerBanner"),
  { ssr: false }
);

import Solution2 from "@/app/_components/page_components/Solution2";
import Image from "next/image";

export const metadata = {
  title: "Synergy | Who We Are",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageAboutUs() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const data = await fetch(`${APIURL}/full_details?ID=14`, {
    cache: "no-store",
  }).then((res) => res.json());

  // const getVideoType = (url) => {
  //   if (url.endsWith(".mp4")) return "video/mp4";
  //   if (url.endsWith(".mov")) return "video/quicktime";
  //   return "";
  // };

  return (
    <>
      <InnerBanner data={data} />

      <section
        className="inner-content-section section-gap wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="1500ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5> {data?.small_heading} </h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="inner-content-box"
                dangerouslySetInnerHTML={{
                  __html: data?.post_content,
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
                {[".mp4", ".mov"].some((ext) =>
                  data?.section_list[0]?.image.endsWith(ext)
                ) ? (
                  <video
                    autoPlay
                    playsInline
                    loop
                    className="video-mission"
                    muted
                  >
                    <source
                      src={data?.section_list[0]?.image}
                      // type={getVideoType(data?.section_list[0]?.image)}
                      // poster={data?.section_list[0]?.image}
                    />
                  </video>
                ) : (
                  <Image
                    src={data?.section_list[0]?.image}
                    alt={data?.section_list[0]?.section_title}
                    className="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    // priority={false}
                  />
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col p-2 d-flex flex-column">
              <div className="box-content mission-content h-100">
                {/* <h3>{data?.section_list[0]?.section_title}</h3> */}
                <h3>
                  Our <span class="color-text"> Mission&nbsp;</span>
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.section_list[0]?.section_content,
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
                <Image
                  src={data?.section_list[1]?.image}
                  alt={data?.section_list[1]?.section_title}
                  className="image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  // priority={false}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col p-2 d-flex flex-column">
              <div className="box-content vission-content h-100">
                {/* <h3>{data?.section_list[1]?.section_title}</h3> */}
                <h3>
                  Our <span class="color-text"> Vision&nbsp;</span>
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.section_list[1]?.section_content,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Skill Section End ======--> */}
      <div className="about-page-sec">
        <Solution2 data={data} />
      </div>
      {/* <Testimonsials data={data} />  */}
    </>
  );
}
