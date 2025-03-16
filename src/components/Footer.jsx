import "../styles/footer.css";

export function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="copyright">
          <p>Todos los derechos reservados © {year} XALER</p>
        </div>
        <div className="contact-Footer">
          <a
            href="/form"
            style={{ textDecoration: "none" }}
            title="Contacto XALER"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
