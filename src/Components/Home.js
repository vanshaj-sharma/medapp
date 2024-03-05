import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AppNavbar from "./AppNavbar";
import pic from "./assets/2.png";

const Home = () => {
  return (
    <div className="homeStyle">
      <div className="fadingDiv">
        <AppNavbar />
        <section className="d-flex align-items-center">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto mb-0">
                <div className="row">
                  <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>We can get your Drug Prescriptions to You</h1>
                    <div className="mt-3 me-2 pe-6">
                      We have all the drugs your doctoe prescribed for your
                      health and whats's more, we can get it to you
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                      className="mt-3"
                    >
                      <div className="col-md-3">
                        <button
                          className="btn btn-outline-light"
                          style={{
                            borderRadius: "25px",
                            height: "40px",
                            width: "100px",
                          }}
                        >
                          Ikeja
                        </button>
                      </div>
                      <div className="col-md-3">
                        <button
                          className="btn btn-outline-light"
                          style={{
                            borderRadius: "25px",
                            height: "40px",
                            width: "100px",
                          }}
                        >
                          VI
                        </button>
                      </div>
                      <div className="col-md-3">
                        <button
                          className="btn btn-outline-light"
                          style={{
                            borderRadius: "25px",
                            height: "40px",
                            width: "100px",
                          }}
                        >
                          Lekki{" "}
                        </button>
                      </div>
                      <div className="col-md-3">
                        <button
                          className="btn btn-outline-light"
                          style={{
                            borderRadius: "25px",
                            height: "40px",
                            width: "100px",
                          }}
                        >
                          Ajah
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 me-2" style={{ paddingRight: "15px" }}>
                      <div className="rounded-pill overflow-hidden">
                        <div className="input-group">
                          <span className="input-group-text bg-white">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </span>
                          <input
                            type="text"
                            className="form-control rounded-0 border-0"
                            placeholder=" Search for drugs in our store"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-success rounded-0"
                              style={{ width: "110px", height: "40px" }}
                              type="button"
                            >
                              Find Drug
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginBottom: "0",
                      paddingTop: "3px",
                    }}
                    className="col-lg-7 ms-6 order-5"
                  >
                    <img src={pic} className="img-fluid" alt="photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
