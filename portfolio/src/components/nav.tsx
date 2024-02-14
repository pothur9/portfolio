import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import "./nav.css";

function Nav() {
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          scrollBehavior: "smooth",
        }}
      >
        <Toolbar style={{ marginTop: "20px" }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Prasanna Kumar
          </Typography>
          <Button
            variant="outlined"
            style={{ borderColor: "#F0F8FF", color: "#F0F8FF" }}
            className="navb"
          >
            <Link to="contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
