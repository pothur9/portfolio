import "./main.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import pink from "/icon1.png"
import white from "/dark_cube2.png"
import purple from "/purple_romb2.png"

function Main() {
  return (
    <div className="main-container">
      <img src="pro.png" className="pro" />
      <div className="main-text1" style={{ textAlign: "center" }}>
        <h1 className="main-tx">Hi,I'm Prasanna Kumar</h1>
        <br />
        <p className="main-p">Web Developer / MERN Stack</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={purple} className="purple"/>
        <h1 style={{ fontSize: "xxx-large" }}>Skills & Experience</h1>
        <p className="sp">
          The main area of expertise is front end development.
        </p>
        <p>
          HTML, CSS, JS, building small and medium web applications with React,
          <br></br> custom plugins, features, animations, and coding interactive
          layouts.<br></br> I also have full-stack developer experience with
          MERN stack.
        </p>
        <p className="lin">
          Visit my{" "}
          <a href="https://www.linkedin.com/in/prasanna-kumar-830b3920a/">
            Linkedin
          </a>{" "}
          for more details.
        </p>
        <div className="tech">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />
        </div>
        <div className="tech" style={{ marginTop: "-20px" }}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />
        </div>
        <div className="tech" style={{ marginTop: "-20px" }}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
            style={{ width: "60px", margin: "20px" }}
          />
        </div>
        <img src={white} className="white"/>

        <h1 className="work">My work</h1>
        <p className="work-text">
          Deployed scalable travel, event and telemedicine web and hybrid mobile
          apps using React and Express.
        </p>
        <div className="project">
          <Card sx={{ maxWidth: 385 }} className="proj">
            <CardMedia
              className="cimg1"
              image="mypickup.png"
              title="green iguana"
            />
            <CardContent className="card-con">
              <Typography gutterBottom variant="h5" component="div">
                Mypickup ( taxi booking app )
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 385, minWidth: 345 }} className="proj">
            <CardMedia
              sx={{ minWidth: 285, minHeight: 220 }}
              className="cimg1"
              image="iwhizz.png"
              title="green iguana"
            />
            <CardContent className="card-con">
              <Typography gutterBottom variant="h5" component="div">
                Iwhizz ( e-larning app )
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 385 }} className="proj">
            <CardMedia
              sx={{ minWidth: 285, minHeight: 220 }}
              className="cimg1"
              image="ai.png"
              title="green iguana"
            />
            <CardContent className="card-con">
              <Typography gutterBottom variant="h5" component="div">
                Aiempowerr ( business website )
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </div>
        
      </div>
      <img src={pink} className="pink"/>
    </div>
  );
}

export default Main;
