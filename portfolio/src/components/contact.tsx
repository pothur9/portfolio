import { Typography } from "@mui/material";
import linkedinImg from "/linkedin.png";
import instagramImg from "/instagram.png";
import gmailImg from "/gmail.png";
import "./contact.css";
import cube from "/white_cube1.png";
import bcube from "/dark_romb.png";

export default function Contact() {
  return (
    <div style={{ marginTop: "60px" }} id="contact">
      <Typography variant="h2" className="con">
        Contact
      </Typography>

      <br />
      <br />
      <Typography variant="h6" textAlign={"center"}>
        What would you do if you had a software expert available at your
        fingertips?
      </Typography>
      <Typography variant="h6" textAlign={"center"}>
        What to start new project? Or just say hey. You can also follow me on
        Instagram.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       
        <a href="https://www.linkedin.com/in/prasanna-kumar-830b3920a/">
          <img src={linkedinImg} className="icon" />
        </a>
        <a href="https://www.instagram.com/prasanna_kumar_909?igsh=MWVwOHByNnMyZmg0eQ%3D%3D&utm_source=qr">
          <img src={instagramImg} className="icon" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <img src={gmailImg} className="icon" />
        </a>
      </div>
      <img src={cube} alt="" className="cube" />
      <img src={bcube} className="bcube" />
    </div>
  );
}
