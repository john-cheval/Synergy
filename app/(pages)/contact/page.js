import Bredcumb from "@/app/_components/page_components/Bredcumb";
import ContactMap from "@/app/_components/page_components/ContactMap";
import Image from "next/image";

export default async function PageContactUs() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const {
    small_heading,
    short_description,
    office_hours,
    whatsapp_number,
    email_address,
    address_list,
  } = await fetch(`${APIURL}/full_details?ID=23`, {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <>
      <section
        className="banner-section contact_page_Banner wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="1000ms"
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
                    <div className="h_w contact_page_desc">
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        {small_heading}
                      </h1>
                      <p
                        dangerouslySetInnerHTML={{ __html: short_description }}
                      ></p>
                    </div>
                    <Bredcumb title="Contact" />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center text-white row-eq-height mt-5">
                <div className="col-lg-7 pr-0">
                  <ContactMap list={address_list} />
                </div>
                <div className="col-lg-5 d-flex flex-column">
                  <div className="contact-col h-100">
                    <div className="contact-callus">
                      <h3> Call Us </h3>
                      <ul>
                        <li>
                          <a href="tel:+97145139095"> +971 4 5139095 </a>
                        </li>
                        <li>
                          <a href="tel:+97165448700"> +971 6 5448700 </a>
                        </li>
                      </ul>
                      <p>{office_hours}</p>
                    </div>
                    <div className="contact-whatsapp">
                      <p>
                        <strong> Whatsapp </strong>
                      </p>

                      <a
                        href={`https://wa.me/${whatsapp_number.replace(
                          /\s+/g,
                          ""
                        )}?text=hello`}
                      >
                        {whatsapp_number}
                      </a>
                    </div>
                    <div className="contact-emailus">
                      <p>
                        <strong> Email us </strong>
                      </p>
                      <a href={`mailto:${email_address}`}> {email_address}</a>
                      <p>
                        Response to email sent over the weekend will take up 2
                        working days
                      </p>
                    </div>
                    <div className="contact-other">
                      <p>
                        <strong> Marketing, PR & Other Enquiries </strong>
                      </p>
                      <a href={`mailto:${email_address}`}>{email_address}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== Feature Part start ======--> */}
      <section className="blog-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            {address_list?.map((address, index) => (
              <div
                key={index + 1}
                className="col-lg-4 wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="2000ms"
              >
                <div className="contact-box">
                  <h5> {address?.main_heading} </h5>
                  <p dangerouslySetInnerHTML={{ __html: address?.address }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--====== Feature Part end ======--> */}
    </>
  );
}
