import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Make sure to import FontAwesomeIcon if needed
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons"; // Import necessary FontAwesome icons

function Footer() {
  return (
    <div>
      <footer>
        <div className="main-content">
          <div className="left box">
            <h2>About us</h2>
            <div className="content">
              <p>
                CodinNepal is a YouTube channel where you can learn web
                designing, web development, ui/ux designing, html css tutorial,
                hover animation and effects, javascript and jquery tutorial and
                related so on.
              </p>
              <div className="social">
                <a href="https://facebook.com/coding.np">
                  {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com/coding.np">
                  {/* <FontAwesomeIcon icon={faInstagram} /> */}
                </a>
                <a href="https://youtube.com/c/codingnepal">
                  {/* <FontAwesomeIcon icon={faYoutube} /> */}
                </a>
              </div>
            </div>
          </div>
          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="text">Birendranagar, Surkhet</span>
              </div>
              <div className="phone">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className="text">+089-765432100</span>
              </div>
              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="text">abc@example.com</span>
              </div>
            </div>
          </div>
          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
              <form action="#">
                <div className="email">
                  <div className="text">Email *</div>
                  <input type="email" required />
                </div>
                <div className="msg">
                  <div className="text">Message *</div>
                  <textarea rows="2" cols="25" required></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom" style={{ textAlign: "center" }}>
          <span className="credit">
            Created By <a href="https://www.codingnepalweb.com">CodingNepal</a>{" "}
            |{" "}
          </span>
          <FontAwesomeIcon icon={faCopyright} />
          <span> 2020 All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
