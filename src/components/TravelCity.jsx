import "./stylesApp.css";
import { MdDynamicFeed } from "react-icons/md";
import { GoAlertFill } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { Navbar } from "./Navbar";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { Footer } from "./Footer";

export function TravelCity() {
  return (
    <>
      <Navbar />

      <div className="container-App">
        <div className="text-container">
          <div className="titleApp" title="Travel City">
            Travel City
          </div>
          <div className="subTitleApp">Viaja más, vive más</div>
          <div className="buttonApp">
            <a
              href="https://play.google.com/store/apps/details?id=com.city.travel"
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
          <div className="card-E">
            <div className="icon-E">
              <IoMdContact />
            </div>
            <div className="card-content-E">
              <h2>Reseñas</h2>
              <p>
                Consulta opiniones de otros viajeros y comparte tus propios
                comentarios y experiencias.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>

          <div className="card-E">
            <div className="icon-E">
              <GoAlertFill />
            </div>
            <div className="card-content-E">
              <h2>Mapas Interactivos</h2>
              <p>
                Explora mapas detallados con información sobre los principales
                puntos turísticos, rutas, y servicios cercanos.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>

          <div className="card-E">
            <div className="icon-E">
              <MdDynamicFeed />
            </div>
            <div className="card-content-E">
              <h2>Rutas</h2>
              <p>
                Encuentra la mejor ruta hacia tus destinos con indicaciones
                precisas y actualizaciones en tiempo real.
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
