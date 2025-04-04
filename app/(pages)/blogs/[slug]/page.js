import Bredcumb from "@/app/_components/page_components/Bredcumb";
import Image from "next/image";

export const metadata = {
  title: "Synergy | Services",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageBlogDetails({ params }) {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const {
    post_title,
    image,
    post_content,
    email_address,
    whatsapp_number,
    phone_number,
  } = await fetch(`${APIURL}/full_details?slug=${params.slug}&meta_type=post`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <>
      <title>{post_title}</title>
      {/* <!--====== Banner part start ======--> */}
      <section
        className="banner-section wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="500ms"
      >
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
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        {post_title}
                      </h1>
                    </div>
                    <Bredcumb title="Blog" />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="inner-banner-img">
                    <Image
                      src={image}
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
      {/* <!--====== Banner part end ======--> */}
      {/* <!--====== Feature Part start ======--> */}
      <section className="blog-section section-gap ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="blog-details-content">
                <div
                  className="blog-content wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="1500ms"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post_content,
                    }}
                  ></div>
                  <div
                    className="wow fadeInUp mt-4"
                    data-wow-duration="1500ms"
                    data-wow-delay="1000ms"
                  >
                    <h3> Contact Us </h3>

                    <div className="blog-contact-col">
                      <ul>
                        <li className="actives">
                          <a href={`tel:${phone_number}`}>
                            <span className="gradient-text ">Call:</span>{" "}
                            {phone_number}{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href={`https://wa.me/${whatsapp_number.replace(
                              /\s+/g,
                              ""
                            )}?text=hello`}
                          >
                            {" "}
                            <span className="gradient-text "> Whatsapp: </span>
                            {whatsapp_number}{" "}
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href={`mailto:${email_address}`}>
                            {" "}
                            <span className="gradient-text ">Email: </span>
                            {email_address}{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Feature Part end ======--> */}
    </>
  );
}
