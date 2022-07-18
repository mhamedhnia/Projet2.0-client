import './Gallerie.css';
const Gallerie = ({ product }) => (
  <div className="portfolio-wrapper ">
    <div className="content ">
      <div className="content-overlay" />
      <img className="content-image" src={product.imageURL} alt={product.title} />
      <div className="content-details fadeIn-bottom">
        <h5 className="p-title">{product.title}</h5>
        <p className="p-desc">{product.description}</p>
      </div>
    </div>
  </div>
);

export default Gallerie;
