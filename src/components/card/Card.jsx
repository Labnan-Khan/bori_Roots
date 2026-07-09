import React from 'react'
import './card.css'
import { useDispatch, useSelector } from 'react-redux'
function Card() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  return (
    <>
     <div className='card'>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='cardItemSec'>
          {cartItems.map((item)=>(
            <div className='cardItem' key={item.id}>
              <div className='cardItemImg'></div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p>{item.size}</p>
                <p>Quntaty: {item.quantity}</p>
                <p>Per Bottle: {item.price}$</p>
                <p>Totle: {item.price * item.quantity}$</p>
              </div>
              
            </div>
          ))}
        </div>
      )}
     </div>
    </>
  )
}

export default Card