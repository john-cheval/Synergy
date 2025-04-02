import Bredcumb from "@/app/_components/page_components/Bredcumb";
import ContactMap from "@/app/_components/page_components/ContactMap";
import InnerBanner from "@/app/_components/page_components/InnerBanner";
import Solution from "@/app/_components/page_components/Solution";
import Testimonials from "@/app/_components/page_components/Testimonials";

export default function PageContactUs() {
  return (
    <>
      <section
        className="banner-section contact_page_Banner wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="1000ms"
      >
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <img src="/img/inner-banner.png" />
          </div>
          <div className="single-banner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="inner-banner-content">
                    {/* <!-- <span className="promo-text" data-animation="fadeInDown" data-delay="0.8s">
									Stop Being a Fantasy Player
								</span> --> */}
                    <div className="h_w contact_page_desc">
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        Get in touch
                      </h1>
                      <p>
                        You can get in touch with us regarding an account, a
                        general enquiry or just to give some customer <br />
                        feedback. We’ll be happy to help you.
                      </p>
                    </div>
                    <Bredcumb title="Contact" />
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-3 text-right">
                  <div className="bredcumb">
                    <ul>
                      <li>
                        
                        <a href="/"> Home </a>
                      </li>
                      <li> - </li>
                      <li> Contact </li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="row justify-content-center text-white row-eq-height mt-5">
                <div className="col-lg-7 pr-0">
                  <ContactMap />
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
                      <p>
                        We are open from Monday to Saturday 8:30 am to 5:00 pm
                      </p>
                    </div>
                    <div className="contact-whatsapp">
                      <p>
                        <strong> Whatsapp </strong>
                      </p>

                      <a href="https://wa.me/971522215052">+971 52 221 5052</a>
                    </div>
                    <div className="contact-emailus">
                      <p>
                        <strong> Email us </strong>
                      </p>
                      <a href="mailto:info@consultsynergy.ae">
                        {" "}
                        info@consultsynergy.ae{" "}
                      </a>
                      <p>
                        Response to email sent over the weekend will take up 2
                        working days
                      </p>
                    </div>
                    <div className="contact-other">
                      <p>
                        <strong> Marketing, PR & Other Enquiries </strong>
                      </p>
                      <a href="mailto:info@consultsynergy.ae">
                        info@consultsynergy.ae
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
      <section className="blog-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="1000ms"
            >
              <div className="contact-box">
                <h5> UAE Office: Dubai </h5>
                <p>
                  {" "}
                  ETA Al Manara Tower, Business Bay <br /> PO Box: 413174 Dubai
                  UAE{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 p-0 wow fadeInLeft middleOne"
              data-wow-duration="1500ms"
              data-wow-delay="1500ms"
            >
              <div className="contact-box">
                <h5> UAE Office: Sharjah </h5>
                <p>
                  {" "}
                  Office: 307, Mohd Abdullah Abdullatif Al <br /> Mulla
                  Building, Al Areej Business Center, <br /> Al Nahda - Sharjah
                  PO Box: 69700, Sharjah,UAE{" "}
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="2000ms"
            >
              <div className="contact-box">
                <h5> UK Office </h5>
                <p>
                  {" "}
                  40-42, Homedale road bromley,BR2 9LD <br /> United Kingdom{" "}
                  <br /> Call: 0044 7740 646777{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Feature Part end ======--> */}
    </>
  );
}
