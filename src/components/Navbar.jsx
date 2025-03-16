import { Container } from "react-bootstrap";
import { useScrollYPosition } from "react-use-scroll-position";
import "../styles/navbar.css";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;

  const links = [];

  return (
    <Container>
      <div
        className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
          menuOpen ? " nav-open" : ""
        }`}
      >
        <div className="nav-content">
          <h3 className="logo">
            <a href="/">XALER</a>
          </h3>

          {/*
          <nav className="nav-links__container">
            {links &&
              links.map((link, i) => (
                <a className="nav-link" href={link.href} key={i}>
                  <div className="nav-link__text">{link.title}</div>
                  <div className="nav-link__background" />
                </a>
              ))}
          </nav>

          <div
            className="nav-menu__icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              style={{ fontSize: "10px" }}
              className={open ? "fas fa-times" : "fas fa-bars"}
            ></i>
            <div />
            <div />
          </div>
*/}
        </div>
      </div>
    </Container>
  );
}
