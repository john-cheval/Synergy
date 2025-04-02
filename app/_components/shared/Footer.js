"use client";
import React, { useEffect, useState } from "react";
import FooterContactForm from "./FooterContactForm";

const Footer = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [services, setServices] = useState([]);
  const [slpservices, setslpServices] = useState([]);
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const toggleMenu = (index) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    getServicesData();
    getSplServicesData();
  }, []);

  const getServicesData = async () => {
    const { data } = await fetch(`${APIURL}/cms/getAll/Services`, {
      cache: "no-store",
    }).then((res) => res.json());
    setServices(data);
  };
  const getSplServicesData = async () => {
    const { data } = await fetch(`${APIURL}/cms/getAll/Specialised_Services`, {
      cache: "no-store",
    }).then((res) => res.json());
    setslpServices(data);
  };
  return (
    <>
      <footer id="footer-id">
        <div className="container">
          <div className="footer-widget-top">
            <div className="row">
              <div
                className="col-lg-5 col-md-12 text-left wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
              >
                <div className="section-title mb-40 left-border">
                  <h2 className="title mb-3">
                    {" "}
                    Request a free{" "}
                    <span className="color-text"> Consultation </span>{" "}
                  </h2>
                  <p>
                    {" "}
                    Would you like to speak to one of our financial advisers
                    over the phone?{" "}
                  </p>
                  <p>
                    {" "}
                    Just submit your details and we’ll be in touch shortly.You
                    can also email us if you would prefer.{" "}
                  </p>
                </div>
              </div>

              <div
                className="col-lg-7 col-md-12 text-left wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="800ms"
              >
                <div className="footer-form">
                  <FooterContactForm />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget">
            <div className="row mt-5 pt-5">
              <div className="col-lg-4 col-md-12 col-sm-4 text-center">
                <div className="widget site-info-widget">
                  <div className="footer-logo">
                    <a href="/">
                      {" "}
                      <img src="/img/footer-logo.png" alt="images" />{" "}
                    </a>
                  </div>

                  <p style={{ fontSize: "13px" }}>
                    {" "}
                    Synergy Consulting is an advisory firm with extensive
                    industry and commercial experience in Fund Raising across
                    the Middle East, Asia Pacific and Indian sub-continent. We
                    help companies access capital from a wide variety of
                    Institutional lenders, Mezzanine Funds, Private Equity &
                    Investment firms.{" "}
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-3 text-center">
                <div
                  className={`widget site-info-widget ${
                    openMenus[1] ? "show" : ""
                  }`}
                >
                  <h5 onClick={() => toggleMenu(1)}> Our Services </h5>
                  <div className={`footer-menu-vartical `}>
                    {services && services.length > 0 && (
                      <ul>
                        {services.map((service) => {
                          return (
                            <li key={service.id}>
                              <a href={`/services/${service.slug}`}>
                                {service.title.replace(/<[^>]*>/g, "")}{" "}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-3 text-center">
                <div
                  className={`widget site-info-widget ${
                    openMenus[2] ? "show" : ""
                  }`}
                >
                  <h5 onClick={() => toggleMenu(2)}> Specialized Services</h5>
                  <div
                    className={`footer-menu-vartical ${
                      openMenus[2] ? "show" : ""
                    }`}
                  >
                    {slpservices && slpservices.length == 0 && (
                      <p>No Specialized services yet!</p>
                    )}
                    {slpservices && slpservices.length > 0 && (
                      <ul>
                        {slpservices.map((service) => {
                          return (
                            <li key={service.id}>
                              <a href={`/services/${service.slug}`}>
                                {service.title.replace(/<[^>]*>/g, "")}{" "}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {/* <ul>
							  	<li> <a href="#"> Feasibility Report </a> </li>
							  	<li> <a href="#"> Due Diligence </a> </li>
							  	<li> <a href="#"> Business Modeling </a> </li>
							  	<li> <a href="#"> Business Valuation </a> </li>
							  	<li> <a href="#"> Market Research </a> </li>
							  	<li> <a href="#"> Risk Assessment </a> </li>
                                <li> <a href="#"> Investor Deck </a> </li>
							  </ul> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-12 col-sm-2 text-center">
                <div
                  className={`widget site-info-widget ${
                    openMenus[3] ? "show" : ""
                  }`}
                >
                  <h5 onClick={() => toggleMenu(3)}> Connect With Us </h5>
                  <div
                    className={`footer-menu-vartical ${
                      openMenus[3] ? "show" : ""
                    }`}
                  >
                    <ul>
                      <li>
                        <span>T :</span>
                        <a href="tel:+97145139095"> +971 4 513 9095 </a>
                      </li>
                      <li>
                        <span>T :</span>
                        <a href="tel:+971522215052"> +971 52 221 5052 </a>
                      </li>
                      <li>
                        <span>E :</span>
                        <a href="emailto:info@consultsynergy.ae">
                          info@consultsynergy.ae
                        </a>
                      </li>
                      <li>
                        <span style={{ color: "#fff" }}>PO</span>{" "}
                        <span style={{ color: "#fff" }}>
                          {" "}
                          Box: 413174, Dubai, UAE{" "}
                        </span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row align-items-center justify-content-center mt-1 pt-2">
              <div className="col-lg-4 col-md-12 col-sm-4 text-left">
                <div className="footer-bottom-center-menu">
                  <ul>
                    <li>
                      {" "}
                      <a href="https://chevalme.com">
                        {" "}
                        Designed and Developed by Cheval{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-5 text-center">
                <div className="footer-bottom-center-menu">
                  <ul>
                    <li>
                      {" "}
                      <a href="/privacy-policy"> Privacy Policy </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/terms-conditions"> Terms & Conditions </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/contact"> Contact Us </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-3 text-right">
                <p className="copyright-text">
                  © <span className="color-text"> Synergy 2025. </span> All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
