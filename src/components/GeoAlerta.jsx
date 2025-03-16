import "./stylesApp.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SiHuawei } from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { WiEarthquake } from "react-icons/wi";
import { RiMapPin2Fill } from "react-icons/ri";
import { AiOutlineAlert } from "react-icons/ai";
export function GeoAlerta() {
  return (
    <>
      <Navbar />

      <div className="container-App">
        <div className="text-container">
          <div className="titleApp" title="GEO Alerta">
            GEO Alerta
          </div>
          <div className="subTitleApp">Orientando tu seguridad</div>

          <div className="buttonApp">
            <a
              href="https://play.google.com/store/apps/details?id=com.xaler.earth"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="download-button">
                <AiFillAndroid className="icon" />
                Descargar
              </button>
            </a>

            <a
              href="https://appgallery.huawei.com/#/app/C112061767"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="download-button">
                <SiHuawei className="icon" />
                Descargar
              </button>
            </a>
          </div>
        </div>
        <div className="cards-container-App">
          <div className="card-G">
            <div className="icon-E">
              <WiEarthquake />
            </div>
            <div className="card-content-E">
              <h2>Alerta Sísmica</h2>
              <p>
                Notificaciones instantáneas sobre sismos y terremotos, con
                cálculo de intensidad y afectación regional.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>

          <div className="card-G">
            <div className="icon-E">
              <RiMapPin2Fill />
            </div>
            <div className="card-content-E">
              <h2>Mapa Interactivo</h2>
              <p>
                Visualización dinámica de los últimos eventos sísmicos con datos
                geoespaciales en tiempo real.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>

          <div className="card-G">
            <div className="icon-E">
              <AiOutlineAlert />
            </div>
            <div className="card-content-E">
              <h2>Noticias</h2>
              <p>
                Información actualizada sobre emergencias y prevención ante
                cualquier eventualidad.
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
