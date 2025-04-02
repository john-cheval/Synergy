import Testimonials from "@/app/_components/page_components/Testimonials";
import Bredcumb from "@/app/_components/page_components/Bredcumb";
import ServiceDetailsSection from "@/app/_components/page_components/ServiceDetailsSection";
export const metadata = {
  title: "Synergy | Services",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageCsr({ params }) {
  let top = 80;
  let left = 0;
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await fetch(
    `${APIURL}/cms/getBySlug/${params.serviceslug}`,
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
    return `+${countryCode} ${areaCode} ${part1} ${part2}`;
  };

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
                        Services
                      </h1>
                    </div>
                    <Bredcumb
                      title={data.meta_data?.title.replace(/<[^>]*>/g, "")}
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center text-white row-eq-height mt-5">
                <div className="col-lg-7 p-lg-0">
                  <div className="blog-banner h-100">
                    {data?.meta_data?.image.indexOf(".mp4") < 0 ? (
                      <img
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${data?.meta_data?.image}`}
                        type={data?.media_type}
                      />
                    ) : (
                      // <img
                      //   src="/img/blog-banner.png"
                      // />
                      <video autoPlay loop className="video-solution" muted>
                        <source
                          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${data?.meta_data?.image}`}
                          type={data?.meta_data?.media_type}
                        />
                      </video>
                    )}
                  </div>
                </div>
                <div className="col-lg-5 d-flex flex-column">
                  <div className="service-content-title service-content-page h-100">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: data?.meta_data?.title,
                      }}
                    ></h3>
                    <p>{data.meta_data.detail_short_description}</p>
                    <div className="service-content-top-btn">
                      <a href="/contact" className="contact">
                        Contact us
                      </a>
                      <a
                        href={`tel:${data?.meta_data?.call_number}`}
                        className="contact-number"
                      >
                        Call Now:{" "}
                        {formatPhoneNumber(data?.meta_data?.call_number)}
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
          data?.sections?.length > 0 ? "has_padding" : ""
        }`}
        data-wow-duration="1500ms"
        data-wow-delay="500ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5> {data.meta_data?.title.replace(/<[^>]*>/g, "")} </h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="inner-content-box">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.meta_data?.description,
                  }}
                ></div>
                {/* <p> {data.meta_data?.description.replace(/<[^>]*>/g, "")}</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Feature Part end ======-->    */}

      <ServiceDetailsSection data={data} />

      {/* {data?.sections?.length > 0 &&
        data?.sections.map( (item,index) => {
          let pindex = index + 1;
          top = index > 0 ? top + 20 : top;
          left = index > 0 ? left + 50 : left;
          return (
            <section
              className="service-section section-gap stickyWrapper service_sticky detailssspage  wow fadeInUp"
              style={{ "--top": `${top}px` }}
              key={item.id}
              data-wow-duration="1500ms" data-wow-delay={`${index+1 * 500}ms`}
            >
              <div className="container">
                <div className={`row row-eq-height service-content-row-${item?.bg_type}`} style={{ "transform": `translateX(${left}px)` }}>
                  <div className="col-lg-5 col-md-5 d-flex flex-column p-lg-0">
                    <div className={`service-content service-box-content h-100 service-content-${item?.bg_type}`}  dangerouslySetInnerHTML={{ __html: item?.description }}></div>
                  </div>
                  <div className="col-lg-5 p-lg-0">
                    <div className="blog-banner h-100">
                      <img src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item?.image}`} alt={data?.meta_data?.title?.replace(/<[^>]*>/g, '')} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })} */}
      {/* <div className="testwrap"><Testimonials /></div> */}
    </>
  );
}
