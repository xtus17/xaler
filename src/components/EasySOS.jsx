import "./stylesApp.css";
import { GoAlertFill } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { Navbar } from "./Navbar";
import { AiFillAndroid } from "react-icons/ai";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { Footer } from "./Footer";
import { SiHuawei } from "react-icons/si";

export function EasySOS() {
  return (
    <>
      <Navbar />

      <div className="container-App">
        <div className="text-container">
          <div className="titleApp" title="Easy SOS">
            Easy SOS
          </div>
          <div className="subTitleApp">Tu aliado en Seguridad Ciudadana</div>

          <div className="buttonApp">
            <a
              href="https://play.google.com/store/apps/details?id=com.easy.easysos"
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
          <div className="card-Ea">
            <div className="icon-E">
              <MdOutlineDynamicFeed />
            </div>
            <div className="card-content-E">
              <h2>Feed Noticias</h2>
              <p>
                Feed de las últimas denuncias realizadas por la comunidad,
                manteniendo alerta a la ciudadania.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>

          <div className="card-Ea">
            <div className="icon-E">
              <GoAlertFill />
            </div>
            <div className="card-content-E">
              <h2>Alertas</h2>
              <p>
                Proporciona una plataforma que permite a los usuarios informar
                de manera rápida y sencilla sobre incidentes solicitando
                asistencia urgente.
              </p>
              <div className="divider-E"></div>
            </div>
          </div>

          <div className="card-Ea">
            <div className="icon-E">
              <IoMdContact />
            </div>
            <div className="card-content-E">
              <h2>Contacto</h2>
              <p>
                Permite a los usuarios acceder rápidamente a los números de
                contactos de emergencia, asegurando una comunicación rápida para
                sus emergencias.
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
