import "./estilos.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { Navbar } from "./Navbar";
import emailjs from "@emailjs/browser";

export function Form() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [textError, setTextError] = useState("");
  const [spiner, setSpiner] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    options: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpiner(true);
    setTextError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = formData.email;

    if (!emailRegex.test(email)) {
      // Si el formato del correo no es válido, muestra un mensaje de error
      setTextError("No es valido el correo ingresado");
      setShowErrorModal(true);
      return;
    }

    try {
      await emailjs.sendForm(
        "service_60529hs",
        "template_9mzgafv",
        e.target,
        "_RihrMwdqY8D2iHbx" //acount publickey
      );
      setShowSuccessModal(true);

      setFormData({
        name: "",
        email: "",
        message: "",
        options: "",
      });
    } catch (error) {
      setShowErrorModal(true);
    }
    setSpiner(false);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="container-Form">
        <div className="contact">
          <div className="text-Contact">
            Si tienes sugerencias o dudas dejanos tus comentarios en breve te
            responderemos.
          </div>

          <div className="icon-container-Contact">
            <div className="date-Contact">
              <MdEmail className="icon-Contact" /> xaler1717@gmail.com
            </div>
            <div>
              <FaMapMarkerAlt className="icon-Contact" /> Perú, Lima, Huacho
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="contenedor">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="options">Elige:</label>
                <select
                  id="options"
                  name="options"
                  value={formData.options}
                  onChange={handleChange}
                >
                  <option value="Easy">Easy SOS</option>
                  <option value="Travel">Travel City</option>
                  <option value="Empo">Empoderadas</option>
                </select>
              </div>

              <button type="submit">Enviar</button>
            </form>
          </div>
          {spiner ? <p>Cargando ...</p> : <p></p>}
        </div>
      </div>

      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>XALER</h3>
            </div>
            <div className="modal-body">
              <p>El mensaje ha sido enviado correctamente.</p>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de error */}
      {showErrorModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>XALER</h3>
            </div>
            <div className="modal-body">
              <p>
                {textError ||
                  "Ha ocurrido un error. Por favor, inténtalo más tarde."}
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
