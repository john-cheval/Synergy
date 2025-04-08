import Bredcumb from "@/app/_components/page_components/Bredcumb";
import ServiceDetailsSection from "@/app/_components/page_components/ServiceDetailsSection";
import Image from "next/image";
export const metadata = {
  title: "Synergy | Services",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageCsr({ params }) {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const data = await fetch(
    `${APIURL}/full_details?slug=${params.serviceslug}&meta_type=service`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const formatPhoneNumber = (number) => {
    // Convert the number to a string if it's not already
    const numberStr = number.toString();

    // Extract the parts of the number
    const countryCode = numberStr.slice(0, 3); // "+971"
    const areaCode = numberStr.slice(3, 4); // "4"
    const part1 = numberStr.slice(4, 7); // "513"
    const part2 = numberStr.slice(7); // "9095"

    // Format the number
    return `${countryCode} ${areaCode} ${part1} ${part2}`;
  };

  const getVideoType = (url) => {
    if (url?.endsWith(".mp4")) return "video/mp4";
    if (url?.endsWith(".mov")) return "video/quicktime";
    return "";
  };

  return (
    <>
      <section className="banner-section wow fadeInUp">
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <Image
              src="/img/inner-banner.png"
              alt="banner"
              className="image"
              width={0}
              height={0}
              sizes="100vw"
              // priority={false}
            />
          </div>
          <div className="single-banner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="inner-banner-content">
                    <div className="h_w">
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        Services
                      </h1>
                    </div>
                    <Bredcumb title={data?.post_title} />
                  </div>
                </div>
              </div>

              <div className="banner_image row justify-content-center text-white row-eq-height mt-5 ">
                <div className="col-lg-7 p-lg-0--">
                  <div className="blog-banner h-100">
                    {[".mp4", ".mov"].some((ext) =>
                      data?.image.endsWith(ext)
                    ) ? (
                      <video autoPlay loop className="video-solution" muted>
                        <source
                          src={data?.image}
                          type={getVideoType(data?.image)}
                        />
                      </video>
                    ) : (
                      <Image
                        src={data?.image}
                        alt={data?.post_title}
                        className="image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        // priority={false}
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-5 d-flex flex-column p-lg-0">
                  <div className="service-content-title  service-content-page h-100">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: data?.post_title,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data?.home_description,
                      }}
                    >
                      {/* {data?.short_description} */}
                    </p>
                    <div className="service-content-top-btn">
                      <a href="/contact" className="contact">
                        Contact us
                      </a>
                      <a
                        href={`tel:${data?.phone_number}`}
                        className="contact-number"
                      >
                        Call Now: {formatPhoneNumber(data?.phone_number)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== Feature Part start ======--> */}
      <section
        className={`inner-content-section section-gap  wow fadeInUp ${
          data?.section_list?.length > 0 ? "has_padding" : ""
        }`}
        data-wow-duration="1500ms"
        data-wow-delay="500ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5 dangerouslySetInnerHTML={{ __html: data?.post_title }} />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="inner-content-box">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.short_description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailsSection data={data} />
    </>
  );
}
