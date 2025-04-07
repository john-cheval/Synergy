"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = ({ addressList }) => {
  const pathname = usePathname();
  const menuRef = useRef(null);
  const [menuOpened, setmenuOpened] = useState(false);
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [services, setServices] = useState([]);
  const [openMenus, setOpenMenus] = useState({});
  const [isloading, setisloading] = useState(true);

  const [menu1, setmenu1] = useState(false);
  const [menu2, setmenu2] = useState(false);
  const [menu3, setmenu3] = useState(false);
  useEffect(() => {
    getData();
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

  useEffect(() => {
    setisloading(false);

    window.addEventListener("load", function () {});
    const navContainer = document.querySelector(".nav-container");

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

  const handleClick = (title) => {
    handleCloseMenu();

    const address = addressList.find((item) => item?.title === title);

    if (address) {
      const parser = document.createElement("div");
      parser.innerHTML = address.google_map;
      const iframe = parser.querySelector("iframe");
      const mapSrc = iframe?.getAttribute("src");

      if (mapSrc) {
        window.open(mapSrc, "_blank");
      }
    }
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
        className={`sticky-header relative ${
          pathname === "/" ? "header-homepage" : ""
        }`}
      >
        <div className="header-nav">
          <div className="container">
            <div className="nav-container">
              <div className="site-logo">
                <Link href="/" onClick={handleCloseMenu}>
                  <Image
                    src="/img/logo.png"
                    alt="Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="image"
                    priority
                    // priority={false}
                  />
                </Link>
              </div>

              <div
                className="nav-menu d-lg-flex align-items-right"
                ref={menuRef}
              >
                <div className="mobile_nav_header">
                  <Link href="/" prefetch onClick={handleCloseMenu}>
                    <Image
                      src="/img/logo.png"
                      alt="Logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="image"
                      priority
                    />
                  </Link>
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
                      <Link href="/" onClick={handleCloseMenu}>
                        Home
                      </Link>
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
                      <Link
                        onClick={(e) => {
                          e.preventDefault();
                          setmenu1(!menu1);
                          setmenu2(false);
                          setmenu3(false);
                        }}
                        href="/"
                      >
                        About
                      </Link>
                      <button
                        className="dropArrow"
                        onClick={(e) => {
                          e.preventDefault();
                          setmenu1(!menu1);
                          setmenu2(false);
                          setmenu3(false);
                        }}
                      >
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul>
                        <li className={pathname == "/about-us" ? "active" : ""}>
                          <Link
                            prefetch
                            href="/about-us"
                            onClick={handleCloseMenu}
                          >
                            Who we are{" "}
                          </Link>
                        </li>
                        <li className={pathname == "/our-team" ? "active" : ""}>
                          <Link
                            prefetch
                            href="/our-team"
                            onClick={handleCloseMenu}
                          >
                            Our team{" "}
                          </Link>
                        </li>
                        <li
                          className={
                            pathname == "/diversity-inclusion" ? "active" : ""
                          }
                        >
                          <Link
                            prefetch
                            href="/diversity-inclusion"
                            onClick={handleCloseMenu}
                          >
                            Diversity & Inclusion
                          </Link>
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
                      <button
                        className="dropArrow"
                        onClick={(e) => {
                          e.preventDefault();
                          setmenu1(false);
                          setmenu2(!menu2);
                          setmenu3(false);
                        }}
                      >
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
                                <Link
                                  onClick={handleCloseMenu}
                                  prefetch
                                  href={`${service.url}`}
                                  dangerouslySetInnerHTML={{
                                    __html: service.title,
                                  }}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>

                    <li className={pathname == "/transactions" ? "active" : ""}>
                      <Link
                        prefetch
                        onClick={handleCloseMenu}
                        href="/transactions"
                      >
                        Transactions{" "}
                      </Link>
                    </li>
                    <li className={pathname == "/careers" ? "active" : ""}>
                      <Link prefetch onClick={handleCloseMenu} href="/career">
                        Careers{" "}
                      </Link>
                    </li>
                    <li className={pathname == "/blogs" ? "active" : ""}>
                      <Link prefetch onClick={handleCloseMenu} href="/blogs">
                        {" "}
                        Blogs{" "}
                      </Link>
                    </li>
                    <li className={pathname == "/csr" ? "active" : ""}>
                      <Link prefetch onClick={handleCloseMenu} href="/csr">
                        {" "}
                        CSR{" "}
                      </Link>
                    </li>
                    <li className={pathname == "/contact" ? "active" : ""}>
                      <Link prefetch onClick={handleCloseMenu} href="/contact">
                        {" "}
                        Contact Us{" "}
                      </Link>
                    </li>
                  </ul>
                  <div className="navbar-btn nav-push-item">
                    <Link
                      prefetch
                      onClick={handleCloseMenu}
                      className="main-btn-3"
                      href="#footer-id"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>

                <Link
                  onClick={handleCloseMenu}
                  href={"contact"}
                  prefetch
                  className="touch-btn"
                >
                  Get In Touch
                </Link>
                <div className="nav-pushed-item">
                  <ul>
                    <li>
                      {" "}
                      <Link href="/privacy-policy"> Privacy Policy </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="/terms-conditions">
                        {" "}
                        Terms &amp; Conditions{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="/contact"> Contact Us </Link>{" "}
                    </li>
                  </ul>
                  <p style={{ fontSize: "14px" }} className="copyright-text">
                    © <span> Synergy 2024. </span> All Rights Reserved.
                  </p>

                  <span className="sperator"></span>

                  <ul>
                    {addressList.map((item) => (
                      <li key={item.title}>
                        <Link href="#" onClick={() => handleClick(item.title)}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
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

        {pathname === "/" && <div className="header-grad" />}
      </header>
    </>
  );
};

export default Header;
