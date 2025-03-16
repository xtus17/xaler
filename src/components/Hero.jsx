import { Row, Container } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Hero() {
  return (
    <Container>
      <Row>
        <div className="">
          <div className="neon-text">XALER</div>
          <div className="title">
            Especializados en diseños, innovación y experiencias digitales
            únicas.
          </div>
          <div className="subtitle">
            Soluciones que transforman ideas a realidades móviles
          </div>

          <div className="redes-sociales">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/xalertec"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="media" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@xalertec"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="media" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/xalertec/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="media" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/xalertec"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="media" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Row>
    </Container>
  );
}
