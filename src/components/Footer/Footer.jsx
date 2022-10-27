import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><a href="https://mail.google.com/mail/u/0/">jet.ansari.col@gmail.com</a></span>
        <div className="f-icons">
          <a href="http://instagram.com/er.micheal?utm_source=qr" target="_blank"><Insta color="white" size={"3rem"} /></a>
         <a href="https://www.facebook.com/profile.php?id=100012067606189" target="_blank"> <Facebook color="white" size={"3rem"}  /></a>
         <a href="https://github.com/ansari210/" target="_blank"> <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
