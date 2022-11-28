import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footerlinks">
        <div className="footerlinkwrapper">
        <div className="footerlinkitems">
            <Link to="/contactus" style={{ textDecoration: "none" }}>Contact</Link>
            <Link to="/partnerships" style={{ textDecoration: "none" }}>Partnerships</Link>
            <Link to="/faqs" style={{ textDecoration: "none" }}>FAQs</Link>
            <Link to="/privacy" style={{ textDecoration: "none" }}>Privacy</Link>
            <Link to="/tac" style={{ textDecoration: "none" }}>Terms & Conditions</Link>
        </div>
        </div>
      </div>
    <small className="copyright">FlipSetter © 2023</small>
      </div>
  );
}

export default Footer;
