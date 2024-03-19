function ItemCard({ product, addToCart }) {
  return (
    <>
      <div className="product-img">
        <img src={product.image} alt="product-image" />
      </div>
      <p className="product-title">{product.title}</p>

      <p className="product-price">{"$" + product.price}</p>
      <input type="number" min="0" max="20" />
      {/*al click sara da prendere il valore in input e aggiornare lo state del carrello*/}
      <button onClick={() => addToCart(product.title)}>Add to Cart</button>
    </>
  );
}
export default ItemCard;
