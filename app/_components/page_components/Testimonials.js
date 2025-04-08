"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../shared/CustomArrows";
import Image from "next/image";
import dayjs from "dayjs";
import { FaStar, FaPaperPlane } from "react-icons/fa6";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
dayjs.extend(relativeTime);

const Testimonials = () => {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [reviews, setreviews] = useState([]);
  const [total_rev, settotal_rev] = useState(0);
  const [total_rating, settotal_rating] = useState(0);
  const [reviewsUrl, setReviewsUrl] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(`${APIURL}/google_reviews`, {
      cache: "no-store",
    }).then((res) => res.json());
    setreviews(data.reviews);
    settotal_rev(data.data[0]?.review_count);
    settotal_rating(data.data[0]?.rating);
    setReviewsUrl(data?.data[0]?.url);
  };

  const truncateText = (text, length = 200) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };

  let totalRating = 0;
  reviews.map((item) => {
    totalRating = totalRating + parseInt(item.rating);
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    //centerMode: true,
    centerPadding: "35%",
    adaptiveHeight: false,
    nextArrow: <NextArrow color="true" />,
    prevArrow: <PrevArrow color="true" />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="testimonial-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-12 col-md-12 text-left wow fadeInRight googleReviewFlex"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
              style={{ marginBottom: "20px" }}
            >
              <div className="">
                <div className="google-rating-wrap">
                  <div className="google-rating-img-col">
                    <Image
                      src="/img/google-rating.png"
                      alt="googleImage"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="image"
                      // priority={false}
                    />
                  </div>
                  <div className="google-rating-bottom">
                    <span className="reviews-rating">
                      {total_rating}
                      <span className="google-rating">Rating</span>
                    </span>

                    <ul>
                      {Array.from({
                        length: Math.round(totalRating / reviews.length),
                      }).map((_, index) => (
                        <li key={index}>
                          <FaStar />
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={
                        reviewsUrl ||
                        "https://maps.google.com/?cid=1697073100803569461"
                      }
                      target="_blank"
                      className="reviews-number"
                    >
                      {total_rev} reviews
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-12 col-md-12 p-0 text-left wow fadeInRight"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="testimonial__inner">
                <div id="testimonial" className="testimonial-slider">
                  <Slider {...settings}>
                    {reviews.length > 0 &&
                      reviews.map((item, index) => {
                        return (
                          <div key={index} className="testimonial-slide">
                            <div className="testimonial_box">
                              <div className="testimonial_box-inner">
                                <div className="testimonial-author">
                                  <div className="testimonial_top-left">
                                    <div className="testimonial_box-img">
                                      <Image
                                        width={50}
                                        height={50}
                                        src={`${item?.profile_photo_url}`}
                                        alt={item?.author_name}
                                        sizes="100vw"
                                        className="image"
                                        // priority={false}
                                      />
                                    </div>
                                    <div className="testimonial_box-name">
                                      <h4>{item?.author_name}</h4>
                                      {/* <p>{item?.review_user_email}</p> */}
                                    </div>
                                  </div>
                                  <div className="testimonial_top-right">
                                    <span className="testimonial-day">
                                      {dayjs.unix(item?.time).fromNow()}
                                    </span>
                                    <ul>
                                      {Array.from({
                                        length: parseInt(item?.rating),
                                      }).map((_, index) => (
                                        <li key={index}>
                                          <FaStar />
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                <div className="testimonial_box-top">
                                  <div className="testimonial_box-text">
                                    <p>{truncateText(item?.text, 400)}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    <div className="testimonial-slide view_all_reviews_slide">
                      <div className="testimonial_box">
                        <div className="testimonial_box-inner">
                          <div className="testimonial-author">
                            <div className="testimonial_box-name service-content">
                              <h4>
                                Explore what our clients are saying about us
                              </h4>
                              <a
                                href="https://www.google.com/maps/place/SYNERGY+CONSULTING/@25.184121,55.2572141,17z/data=!4m8!3m7!1s0x3e5f69fe2d7351ad:0x178d36fe63447735!8m2!3d25.1841162!4d55.259789!9m1!1b1!16s%2Fg%2F11h3f57m11?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                className="btn btn-primary generalLink"
                              >
                                {" "}
                                View All Reviews{" "}
                                <span className="btn-icon">
                                  {" "}
                                  <FaPaperPlane />
                                </span>{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
