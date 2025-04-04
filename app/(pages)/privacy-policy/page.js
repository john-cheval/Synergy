import Bredcumb from "@/app/_components/page_components/Bredcumb";
import Image from "next/image";

export const metadata = {
  title: "Synergy | Privacy Policy",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PagePrivacyPolicy() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { post_title, post_content, top_banner } = await fetch(
    `${APIURL}/full_details?ID=162`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return (
    <>
      <section className={`banner-section`}>
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <Image
              src="/img/inner-banner.png"
              alt="banner_image"
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
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        {" "}
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
                    <Image
                      src={top_banner}
                      alt={post_title}
                      sizes="100vw"
                      width={0}
                      height={0}
                      className="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-content-section section-gap csr_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5> {post_title}</h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="inner-content-box">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post_content,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
    </>
  );
}
