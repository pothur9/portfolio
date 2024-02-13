import { Typography } from "@mui/material";
import whatsappImg from "/whatsapp.png";
import linkedinImg from "/linkedin.png";
import instagramImg from "/instagram.png";
import gmailImg from "/gmail.png";
import "./contact.css";
import cube from "/white_cube1.png"
import bcube from "/dark_romb.png"

export default function Contact() {
  return (
    <div style={{marginTop:"60px"}}>
       
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
        <img src={whatsappImg}  className="icon"/>
        <img src={linkedinImg}  className="icon"/>
        <img src={instagramImg}  className="icon"/>
        <img src={gmailImg}  className="icon"/>
      </div>
      <img src={cube} alt="" className="cube"/>
      <img src={bcube} className="bcube"/>
    </div>
  );
}
