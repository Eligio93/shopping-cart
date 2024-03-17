function ItemCard({ product }) {
  return (
    <>
      <div className="product-img">
        <img src={product.image} alt="product-image" />
      </div>
      <p className="product-title">{product.title}</p>

      <p className="product-price">{"$" + product.price}</p>
    </>
  );
}
export default ItemCard;
