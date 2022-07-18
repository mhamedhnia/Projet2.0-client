import './Footer.css';
const Footer = () => (
  <div>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <h2 className="logo">Bwdigital</h2>
          <p className="footer-description">
            We are always open to discuss your project and improve your online presence.
          </p>
        </div>
        <div className="footer-container-right">
          <h2 className="footer-title">Let&apos;s talk</h2>
          <p className="footer-description2">
            We are always open to discuss your project, improve your online presence and help with your UX/UI design
            challenges.
          </p>
        </div>
      </div>

      <div className="footer-link">
        <div className="footer-container">
          <div>
            <p className="footer-copyright">&copy;Copyright</p>
          </div>
          <ul className="footer-link-items">
            <li>Home</li>
            <li>About us</li>
            <li>Work</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
