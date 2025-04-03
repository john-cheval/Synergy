"use client";
import React, { useEffect, useRef, useState } from "react";
import { WOW } from "wowjs";
import Loading from "../shared/Loading";

const Teams = () => {
  const teamModal = useRef(null);
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [teams, setteams] = useState([]);
  const [activeteam, setactiveteam] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    new WOW().init();
  }, []);

  const getData = async () => {
    setloading(true);
    const { team_list } = await fetch(`${APIURL}/full_details?ID=150`, {
      cache: "no-store",
    }).then((res) => res.json());
    setloading(false);
    setteams(team_list);
  };
  const handleClick = (item) => {
    setactiveteam(item);
    showModal();
  };

  const showModal = () => {
    teamModal.current.classList.add("show");
  };
  const hideModal = () => {
    teamModal.current.classList.remove("show");
  };

  return (
    <>
      {/* <!-- Second Modal --> */}
      <div className="modal" id="myM2" ref={teamModal}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                onClick={hideModal}
                type="button"
                className="btn"
                data-dismiss="modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="team-modal-box">
                <div className="team-modal-left">
                  {activeteam?.image != "" && (
                    <img
                      src={activeteam?.image}
                      alt={activeteam?.member_name}
                      className="img-fluid"
                    />
                  )}
                </div>
                <div className="team-modal-right">
                  <h4>{activeteam?.member_name}</h4>
                  <h6>{activeteam?.designation}</h6>
                  <div className="team-content-right">
                    {activeteam?.facebook != "" && (
                      <a target="_blank" href={activeteam?.facebook}>
                        <i className="fab fa-facebook"></i>
                      </a>
                    )}
                    {activeteam?.linkedin != "" && (
                      <a target="_blank" href={activeteam?.linkedin}>
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {activeteam?.twitter != "" && (
                      <a target="_blank" href={activeteam?.twitter}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: activeteam?.section_content,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Second Modal end--> */}

      <section
        className="team-section section-gap wow fadeInDown"
        data-wow-duration="1500ms"
        data-wow-delay="1000ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            {loading && <Loading />}
            {teams &&
              teams.length > 0 &&
              teams.map((item, index) => {
                return (
                  <div
                    key={item?.id}
                    className="col-lg-4 col-md-6 mb-3 wow fadeInUp"
                    onClick={() => handleClick(item)}
                    data-wow-duration="1500ms"
                    data-wow-delay={`${index + 1 * 1500}ms`}
                  >
                    <div className="team-col-inner">
                      <div
                        className="team-img"
                        data-toggle="modal"
                        data-target="#myM2"
                      >
                        {item.image != "" && (
                          <img
                            src={item?.image}
                            alt={item?.member_name}
                            className="img-fluid"
                          />
                        )}
                      </div>
                      <div className="team-content">
                        <div className="team-content-left">
                          <h5>
                            <span className="color-text-2">
                              {item?.member_name}
                            </span>
                          </h5>
                          <p>{item?.designation}</p>
                        </div>
                        <div className="team-content-right">
                          {item.facebook != "" && (
                            <a target="_blank" href={item?.facebook}>
                              <i className="fab fa-facebook"></i>
                            </a>
                          )}
                          {item.linkedin != "" && (
                            <a target="_blank" href={item?.linkedin}>
                              <i className="fab fa-linkedin"></i>
                            </a>
                          )}
                          {item.twitter != "" && (
                            <a target="_blank" href={item?.twitter}>
                              <i className="fab fa-twitter"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
