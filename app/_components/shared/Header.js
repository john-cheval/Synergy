"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const menuRef = useRef(null);
  const [menuOpened, setmenuOpened] = useState(false);
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [services, setServices] = useState([]);
  const [slpservices, setslpServices] = useState([]);
  const [openMenus, setOpenMenus] = useState({});
  const [isloading, setisloading] = useState(true);

  const [menu1, setmenu1] = useState(false);
  const [menu2, setmenu2] = useState(false);
  const [menu3, setmenu3] = useState(false);
  useEffect(() => {
    getData();
    // getSplServicesData();
  }, []);

  const toggleMenu = (index) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [1]: false,
    }));
    setOpenMenus((prevState) => ({
      ...prevState,
      [2]: false,
    }));
    setOpenMenus((prevState) => ({
      ...prevState,
      [3]: false,
    }));

    if (window?.innerWidth < 991) {
      setOpenMenus((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    }
  };

  const getData = async () => {
    const data = await fetch(`${APIURL}/menu/primary`, {
      cache: "no-store",
    }).then((res) => res.json());
    setServices(data["119"]);
  };

  // const getSplServicesData = async () => {
  //   const { data } = await fetch(`${APIURL}/cms/getAll/Specialised_Services`, {
  //     cache: "no-store",
  //   }).then((res) => res.json());
  //   setslpServices(data);
  // };

  useEffect(() => {
    setisloading(false);
    //new WOW().init();
    window.addEventListener("load", function () {});
    const navContainer = document.querySelector(".nav-container");
    // const pushedWrap = document.querySelector(".nav-pushed-item");
    // const pushItem = document.querySelector(".nav-push-item");
    // const pushedHtml = pushItem.innerHTML;

    window.addEventListener("resize", () => {
      breakpointCheck();
    });

    window.addEventListener("scroll", () => {
      stickyHeader();
    });

    const stickyHeader = () => {
      const sticky = document.querySelector("header.sticky-header");
      const scrollFromTop = window.scrollY;
      const scrollLimit = document.querySelector("header").offsetHeight + 700;

      if (scrollFromTop < scrollLimit) {
        sticky.classList.remove("sticky-on");
      } else {
        sticky.classList.add("sticky-on");
      }
    };

    const breakpointCheck = () => {
      var windoWidth = window.innerWidth;
      if (windoWidth <= 991) {
        navContainer.classList.add("breakpoint-on");
      } else {
        navContainer.classList.remove("breakpoint-on");
      }

      // if (windoWidth <= 767) {
      //   pushedWrap.innerHTML = pushedHtml;
      //   pushItem.style.display = "none";
      // } else {
      //   pushedWrap.innerHTML = "";
      //   pushItem.style.display = "block";
      // }
    };

    breakpointCheck();
  }, []);

  const handleMenuToggle = () => {
    menuRef.current.classList.toggle("menu-on");
    setmenuOpened(!menuOpened);
  };
  const handleCloseMenu = () => {
    menuRef.current.classList.remove("menu-on");
    setmenuOpened(false);
  };

  return (
    <>
      {isloading && (
        <div className="mainLoader">
          {" "}
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="image"
          />{" "}
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <header
        className={`sticky-header ${pathname === "/" ? "header-homepage" : ""}`}
      >
        <div className="header-nav">
          <div className="container">
            <div className="nav-container">
              <div className="site-logo">
                <a href="/">
                  <Image
                    src="/img/logo.png"
                    alt="Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="image"
                    // priority={false}
                  />
                </a>
              </div>

              <div
                className="nav-menu d-lg-flex align-items-right"
                ref={menuRef}
              >
                <div className="mobile_nav_header">
                  <a href="/">
                    <Image
                      src="/img/logo.png"
                      alt="Logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="image"
                      // priority={false}
                    />
                  </a>
                  <div className="navbar-close" onClick={handleCloseMenu}>
                    <div className="cross-wrap">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                <div className="menu-items">
                  <ul>
                    <li className={pathname == "/" ? "active" : ""}>
                      <a href="/">Home</a>
                    </li>
                    <li
                      className={
                        pathname == "/about-us" ||
                        pathname == "/our-team" ||
                        pathname == "/diversity-inclusion"
                          ? `${
                              menu1
                                ? "active show has-submemu"
                                : "active has-submemu"
                            }`
                          : `${menu1 ? "show has-submemu" : "has-submemu"}`
                      }
                    >
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          setmenu1(!menu1);
                          setmenu2(false);
                          setmenu3(false);
                        }}
                        href="/"
                      >
                        About
                      </a>
                      <button className="dropArrow">
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul>
                        <li className={pathname == "/about-us" ? "active" : ""}>
                          <a href="/about-us">Who we are </a>
                        </li>
                        <li className={pathname == "/our-team" ? "active" : ""}>
                          <a href="/our-team">Our team </a>
                        </li>
                        <li
                          className={
                            pathname == "/diversity-inclusion" ? "active" : ""
                          }
                        >
                          <a href="/diversity-inclusion">
                            Diversity & Inclusion
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        pathname == "/services"
                          ? `${
                              menu2
                                ? "active show has-submemu"
                                : "active has-submemu"
                            }`
                          : `${menu2 ? "show has-submemu" : "has-submemu"}`
                      }
                    >
                      <Link
                        href="#"
                        className="no_link"
                        onClick={(e) => {
                          e.preventDefault();
                          setmenu1(false);
                          setmenu2(!menu2);
                          setmenu3(false);
                        }}
                      >
                        Services
                      </Link>
                      <button className="dropArrow">
                        <i className="fa fa-angle-down"></i>
                      </button>
                      {services && services.length > 0 && (
                        <ul>
                          {services.map((service) => {
                            return (
                              <li
                                key={service.id}
                                className={
                                  pathname == `${service.url}` ? "active" : ""
                                }
                              >
                                <a
                                  href={`${service.url}`}
                                  dangerouslySetInnerHTML={{
                                    __html: service.title,
                                  }}
                                />
                                {/* {service.title.replace(/<[^>]*>/g, "")}{" "} */}
                                {/* </a> */}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>

                    {/* <li
                      className={
                        pathname == "/services"
                          ? `${
                              menu3
                                ? "active show has-submemu"
                                : "active has-submemu"
                            }`
                          : `${menu3 ? "show has-submemu" : "has-submemu"}`
                      }
                    >
                      <Link
                        href="#"
                        className="no_link"
                        onClick={(e) => {
                          e.preventDefault();
                          setmenu1(false);
                          setmenu2(false);
                          setmenu3(!menu3);
                        }}
                      >
                        Specialized
                      </Link>
                      <button className="dropArrow">
                        <i className="fa fa-angle-down"></i>
                      </button>
                      {slpservices && slpservices.length > 0 && (
                        <ul>
                          {slpservices.map((service) => {
                            return (
                              <li
                                key={service.id}
                                className={
                                  pathname == `/services/${service.slug}`
                                    ? "active"
                                    : ""
                                }
                              >
                                <a href={`/services/${service.slug}`}>
                                  {service.title.replace(/<[^>]*>/g, "")}{" "}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li> */}
                    <li className={pathname == "/transactions" ? "active" : ""}>
                      <a onClick={handleCloseMenu} href="/transactions">
                        Transactions{" "}
                      </a>
                    </li>
                    <li className={pathname == "/careers" ? "active" : ""}>
                      <a onClick={handleCloseMenu} href="/career">
                        Careers{" "}
                      </a>
                    </li>
                    <li className={pathname == "/blogs" ? "active" : ""}>
                      <a onClick={handleCloseMenu} href="/blogs">
                        {" "}
                        Blogs{" "}
                      </a>
                    </li>
                    <li className={pathname == "/csr" ? "active" : ""}>
                      <a onClick={handleCloseMenu} href="/csr">
                        {" "}
                        CSR{" "}
                      </a>
                    </li>
                    <li className={pathname == "/contact" ? "active" : ""}>
                      <a onClick={handleCloseMenu} href="/contact">
                        {" "}
                        Contact Us{" "}
                      </a>
                    </li>
                  </ul>
                  <div className="navbar-btn nav-push-item">
                    <a
                      onClick={handleCloseMenu}
                      className="main-btn-3"
                      href="#footer-id"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>

                <div className="nav-pushed-item">
                  <ul>
                    <li>
                      {" "}
                      <a href="/privacy-policy"> Privacy Policy </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/terms-conditions">
                        {" "}
                        Terms &amp; Conditions{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="/contact"> Contact Us </a>{" "}
                    </li>
                  </ul>
                  <p style={{ fontSize: "14px" }} className="copyright-text">
                    © <span> Synergy 2024. </span> All Rights Reserved.
                  </p>
                </div>
              </div>

              <div className="navbar-extra d-lg-block d-flex align-items-center">
                <a className="main-btn-3 mobile_get_in_touch" href="#footer-id">
                  Get in Touch
                </a>
                <div
                  className={`navbar-toggler ${menuOpened ? "active" : ""}`}
                  onClick={handleMenuToggle}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
