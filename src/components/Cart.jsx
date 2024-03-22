function Cart({cart,removeFromCart}){

    return(
        <>
       <div className="cart">
            {cart.map((item)=>
       <div className="cart-item" key={item.id}>
        <div className="cart-item-description">
        <img src={item.img} alt="" />
        <p>{item.title}</p>
        </div>
        <input type="number" value={item.quantity} min="1" onChange={()=>console.log("ciao")} />
        <button onClick={()=>removeFromCart(cart,item.id)}>Remove</button>
       </div>

       )}
       </div>
       <button className="checkOut">Checkout</button>   
       </> 
    )
}
export default Cart