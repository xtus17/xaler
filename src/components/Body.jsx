import { Row, Container } from "react-bootstrap";
import easy from "./../assets/easysos.png";
import travel from "./../assets/travelcity.png";
import empoderadas from "./../assets/empoderadas.png";
import geoalerta from "./../assets/geo alerta.png";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export function Body() {
  useEffect(() => {
    const tiltNodes = document.querySelectorAll(".cardVanillaTilt");
    tiltNodes.forEach((node) => {
      VanillaTilt.init(node, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    });

    return () => {
      tiltNodes.forEach((node) => {
        node.vanillaTilt.destroy();
      });
    };
  }, []);
  return (
    <Container>
      <Row>
        <div className="card-list">
          <div className="cardVanillaTilt">
            <div className="card-Body">
              <a href="/travel">
                <img
                  style={{ aspectRatio: "154/75" }}
                  src={travel}
                  alt="TravlCity"
                />
                <div className="card-text">
                  <span className="appTitle">App Móvil</span>
                  <h2 className="appMovil">Travel City</h2>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    TravelCity esta diseñada para turistas que deseen explorar
                    lugares turísticos en diferentes ciudades. Ofrece
                    información detallada, mapas interactivos y herramientas
                    para planificar viajes y descubrir nuevos lugares.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="cardVanillaTilt">
            <div className="card-Body">
              <a href="/empoderadas">
                <img
                  style={{ aspectRatio: "154/75" }}
                  src={empoderadas}
                  alt="Empoderadas"
                />
                <div className="card-text">
                  <span className="appTitle">App Móvil</span>
                  <h2 className="appMovil">Empoderadas</h2>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Empoderadas brinda apoyo a mujeres que sufren violencia. La
                    app permite enviar denuncias, conectando a las usuarias con
                    las autoridades. Además, ofrece información sobre recursos
                    disponibles y consejos para protegerse.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="cardVanillaTilt">
            <div className="card-Body">
              <a href="/easy">
                <img
                  style={{ aspectRatio: "154/75" }}
                  src={easy}
                  alt="EasySOS App"
                />
                <div className="card-text">
                  <span className="appTitle">App Móvil</span>
                  <h2 className="appMovil">EasySOS</h2>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    EasySOS App fue diseñada contra la inseguridad ciudadana.
                    Con funciones como alertas en tiempo real, contacto directo
                    con servicios de emergencia y seguimiento de rutas seguras,
                    EasySOS App ayuda a los usuarios a sentirse más seguros.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="cardVanillaTilt">
            <div className="card-Body">
              <a href="/geoalerta">
                <img
                  style={{ aspectRatio: "154/75" }}
                  src={geoalerta}
                  alt="GEO Alerta"
                />
                <div className="card-text">
                  <span className="appTitle">App Móvil</span>
                  <h2 className="appMovil">GEO Alerta</h2>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    GEO Alerta es una app de alerta sísmica en tiempo real, con
                    guías de prevención ante Tsunamis, Temblores, Terremotos y/o
                    cualquier desastre; junto a geolocalización para máxima
                    seguridad.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}
