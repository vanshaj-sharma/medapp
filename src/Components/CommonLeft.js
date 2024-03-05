import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";

const CommonLeft = ({ header, line1, line2, line3, pic }) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 header-img">
                  <img src={pic} className="img-fluid" alt="photo" />
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                  <h3 style={{ color: "#043caa" }}>{header}</h3>
                  <div className="mt-3">
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      style={{ color: "#043caa", marginRight: "5px" }}
                    />
                    {line1}
                  </div>
                  <div className="mt-3">
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      style={{ color: "#043caa", marginRight: "5px" }}
                    />
                    {line2}
                  </div>
                  <div className="mt-3">
                    <FontAwesomeIcon
                      icon={faCircleDot}
                      style={{ color: "#043caa", marginRight: "5px" }}
                    />
                    {line3}
                  </div>
                  <div className="mt-3">
                    <button
                      className="btn btn-lg btn-outline-success"
                      style={{ borderRadius: "25px" }}
                    >
                      Get Prescription <FontAwesomeIcon icon={faAnglesRight} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonLeft;
