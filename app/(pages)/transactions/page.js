import Bredcumb from "@/app/_components/page_components/Bredcumb";
import Image from "next/image";

export const metadata = {
  title: "Synergy | Transactions",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageTransactions() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const data = await fetch(`${APIURL}/full_details?ID=239`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <>
      <section className={`banner-section`}>
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <Image
              src="/img/inner-banner.png"
              alt="banner"
              sizes="100vw"
              width={0}
              height={0}
              className="image"
            />
          </div>
          <div className="single-banner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="inner-banner-content">
                    <div className="h_w">
                      <h1
                        className="wow fadeInUp"
                        data-animation="fadeInUp"
                        data-delay="300ms"
                        dangerouslySetInnerHTML={{
                          __html: data?.post_title?.replace(/<\/?p>/g, ""),
                        }}
                      ></h1>
                    </div>
                    <Bredcumb title={data?.post_title} />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="inner-banner-img wow fadeInDown">
                    {data?.image != "" && (
                      <Image
                        src={data?.top_banner}
                        alt={data?.post_title}
                        sizes="100vw"
                        width={0}
                        height={0}
                        className="image"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="inner-content-section section-gap csr_page wow fadeInUp"
        data-wow-duration="1000ms"
        data-wow-delay="300ms"
      >
        <div className="container transactions-section">
          <div className="wrapper">
            {data?.section_list.map((item, index) => (
              <div
                className="card-item wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
                key={index + 1}
              >
                <div className="card-img">
                  <Image
                    src={item.image}
                    alt={item?.section_title}
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="image"
                  />
                </div>
                <div className="card-content">
                  <div>
                    <div className="title">{item.section_title}</div>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: item.section_content,
                      }}
                    ></div>
                  </div>
                  <a target="_blank" className="button" href={"/contact"}>
                    Contact now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Testimonials />  */}
    </>
  );
}
