import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footerStyle">
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-4 columnStyle">
            <h5>Sign up for our Newsletter</h5>
            <p>
              Your favourite online pharmacy store. We are offer onsite delivery
              and your health is our priority
            </p>
          </div>
          <div className="col-md-4">
            <div className="pb-2">Your Email</div>
            <div className="rounded-pill overflow-hidden">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="example@email.com"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-success rounded-0"
                    style={{
                      width: "110px",
                      height: "40px",
                    }}
                    type="button"
                  >
                    Subscribe <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 columnStyle">
            <h5>D-Express</h5>
            <div style={{ paddingRight: "150px" }}>
              <p>
                Your favourite online pharmacy store. We are offer onsite
                delivery and your health is our priority
              </p>
            </div>
          </div>
          <div className="col-md-2 columnStyle">
            <h6>Quick Links</h6>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
          </div>
          <div className="col-md-2 columnStyle">
            <h6>Services</h6>
            <p>Delivery</p>
            <p>Purchase</p>
            <p>Consult Specialist</p>
          </div>
          <div className="col-md-2 columnStyle">
            <h6>Social Media</h6>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
