const GetProduct = ({ product }) => (
  <div className="main-container">
    <div className="cards">
      <div className="card card-1">
        <p className="card__text">{product.title}</p>

        <img src={product.imageURL} alt={product.title} />
        <h3 className="card__title">{product.description}</h3>
      </div>
    </div>
  </div>
);

export default GetProduct;
