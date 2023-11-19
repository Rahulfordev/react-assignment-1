/* eslint-disable react/prop-types */
const ProductCard = ({ product: { name, price, imageURL } }) => {
  return (
    <div className="product">
      <img src={imageURL} alt="" />
      <div className="product__details">
        <h4 className="product__name">{name}</h4>
        <p className="product__price">Price: {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
