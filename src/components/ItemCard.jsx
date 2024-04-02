import { useState } from "react";



function ItemCard({ product, addToCart }) {
  //preset the default value of the item on card to 1
  const [quantity, setQuantity] = useState(1);
  const changeQuantity = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  return (
    <>
      <div className="product-img">
        <img src={product.image} alt="product-image" />
      </div>
      <p className="product-title">{product.title}</p>

      <p className="product-price">{"$" + product.price}</p>
      <input
        type="number"
        min="1"
        max="20"
        value={quantity}
        onChange={changeQuantity}
      />
      {/*when the button get clicked the item get added to the cart*/}
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </>
  );
}
export default ItemCard;
