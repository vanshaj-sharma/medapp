import React from "react";

const CommonLast = ({ pic }) => {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 order-2 order-lg-1">
                  <img src={pic} className="img-fluid" alt="photo" />
                </div>
                <div className="col-md-6 pt-5 ps-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                  <h1>What our Clients say</h1>
                  <div className="mt-3" style={{ paddingRight: "250px" }}>
                    "The ease of delivery is one of that I depended on when I
                    was bedridden and couldn't even walk. Their services is
                    awesome"
                  </div>
                  <div className="mt-3">
                    <h5 style={{ color: "#043caa" }}>- Gerald Maldiliene</h5>
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

export default CommonLast;
