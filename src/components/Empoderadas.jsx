import "./stylesApp.css";
import { Navbar } from "./Navbar";
import { AiFillAlert, AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { Footer } from "./Footer";
import { FaHandsHelping } from "react-icons/fa";
import { BsFillPostcardFill } from "react-icons/bs";

export function Empoderadas() {
  return (
    <>
      <Navbar />

      <div className="container-App">
        <div className="text-container">
          <div className="titleApp" title="Empoderadas">
            Empoderadas
          </div>
          <div className="subTitleApp">Seguras, libres, y fuertes.</div>
          <div className="buttonApp">
            <a
              href="https://play.google.com/store/apps/details?id=com.xaler.empoderadas"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="download-button">
                <AiFillAndroid className="icon" />
                Descargar
              </button>
            </a>

            <button className="download-button">
              <AiFillApple className="icon" />
              Descargar
            </button>
          </div>

        </div>
        
        <div className="cards-container-App">
          <div className="card-P">
            <div className="icon-E">
              <AiFillAlert />
            </div>
            <div className="card-content-E">
              <h2>Alerta</h2>
              <p>
                Las usuarias pueden enviar alertas a las autoridades mediante
                mensajes de audio para solicitar ayuda o asistencia en
                situaciones de emergencia.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>

          <div className="card-P">
            <div className="icon-E">
              <BsFillPostcardFill />
            </div>
            <div className="card-content-E">
              <h2>Noticias</h2>
              <p>
                La aplicación incluye un feed de noticias y eventos relacionados
                con los derechos de las mujeres y la prevención contra los
                maltratos.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>

          <div className="card-P">
            <div className="icon-E">
              <FaHandsHelping />
            </div>
            <div className="card-content-E">
              <h2>Información</h2>
              <p>
                Proporciona información sobre cómo actuar en casos de maltrato y
                medidas de protección.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
