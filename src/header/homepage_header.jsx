import "/src/Css/homepage_header.css";
import dita_logo from "/public/ditaLogo-3d409f18.png";
import menu from "/src/assets/menu.png";
import cancel from "/src/assets/cancel-50.png";
import { Link } from "react-router-dom";
// import Links from

function header() {
  return (
    <>
      <div id="header">
        <div className="header_logo">
          <Link to="/"><img src={dita_logo} /></Link>
        </div>
        <div className="nav_links">
          <Link to="/about">About us</Link>
          <Link to="/events">Events</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/members">Members</Link>
          <Link to="/Achievements">Achievements</Link>
          <Link to="/technicalWriting">Technical Writing</Link>
        </div>
        <div className="header_menu">
          <button
            onClick={() => {
              // document.querySelector(".menu_div").style.display = "flex"

              if (
                document.querySelector(".menu_div").style.display === "none"
              ) {
                document.querySelector(".menu_div").style.display = "flex";
                document.querySelector(".menu_img").src = cancel;
              } else {
                document.querySelector(".menu_div").style.display = "none";
                document.querySelector(".menu_img").src = menu;
              }
            }}
          >
            <img src={menu}  className="menu_img"/>
          </button>
        </div>
      </div>
      <div className="menu_div">
        <Link to="/about">About us</Link>
        <Link to="/about">Events</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/members">Members</Link>
        <Link to="/Achievements">Achievements</Link>
        <Link to="/technicalWriting">Technical Writing</Link>
      </div>
    </>
  );
}

export default header;