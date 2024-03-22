function Cart({cart,removeFromCart}){

    return(
        <>
       <div className="cart">
            {cart.map((item)=>
       <div className="cart-item" key={item.id}>
        <div className="cart-item-info">
        <img src={item.img} alt="" />
        <div className="cart-item-description">
        <p><b>{item.title}</b></p>
        <i>Total: $ {item.totPrice}</i>
           
        </div>
       
        </div>
        <input type="number" value={item.quantity} min="1"/>
        <button onClick={()=>removeFromCart(cart,item.id)}>Remove</button>
       </div>

       )}
       </div>
       <button className="checkOut">Checkout</button>   
       </> 
    )
}
export default Cart