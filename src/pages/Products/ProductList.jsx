import ProductCard from "../../components/product/ProductCard";
import "./product.css";
const products = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro Max",
    price: "$1399",
    imageURL:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg",
  },
  {
    id: 2,
    name: "Apple iPhone 13 Pro",
    price: "$1199",
    imageURL:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-5.jpg",
  },
  {
    id: 3,
    name: "Apple iPhone 14 Pro Max ",
    price: "$1599",
    imageURL:
      "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "iPhone 14 Pro Max ",
    price: "$1499",
    imageURL:
      "https://media.karousell.com/media/photos/products/2023/4/20/iphone_14_pro_max_1681964995_88078959_progressive.jpg",
  },
  {
    id: 5,
    name: "Xiaomi Redmi Note 12S",
    price: "$899",
    imageURL:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12s-11.jpg",
  },
  {
    id: 6,
    name: "Xiaomi Redmi Note 12 Pro",
    price: "$959",
    imageURL:
      "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-12-pro-1.jpg",
  },
];

const ProductList = () => {
  return (
    <section>
      <h1>Product Card</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
