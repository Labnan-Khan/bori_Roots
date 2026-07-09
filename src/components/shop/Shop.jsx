import React from 'react'
import './shop.css'
import BRBtn from '../brButton/BRBtn'
import video1 from '../../assets/HeroSecBgBottleVideo.mp4'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

function Shop() {
      const products = [
    {
      id: 1,
      name: "Classic Olive Oil",
      desc: "Best olive oil of all time",
      price: 35,
      size: "500ml",
    },
    {
      id: 2,
      name: "Infused Olive Oil",
      desc: "Rich garlic flavor",
      price: 40,
      size: "500ml",
    },
  ];
    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }
  return (
    <>
    <div className='shop'>

        <div className='shopHeadingDiv'>
            <div className='shopVideo'>
                <video src={video1} autoPlay muted loop playsInline></video>

            </div>
            
            
            <div className='shopHeadRight'>
                <h1 className='startingH1tag'>Grab Upto 10% off </h1>
                <h1 className='startingH1tag'>On Selected Oil</h1>
            </div>
            {/* <div className='shopHeadLeft'></div> */}
        </div>

        <div className='shopCategory'>
            <div>
                <button>All Products</button>
                <button>Classic Oils</button>
                <button>Infused Oils</button>
                <button>Gift Sets</button>
            </div>

        </div>

        <div className='shopItemSec'>

            {products.map((item, key)=> (
                
                <div className='shopItem' key={item.id}>
                    <div className='itemImg'></div>
                    <h3>{item.name}</h3>
                    <p>{item.desc} </p>
                    <div className='priceSec'>
                        <h5>{item.price}$</h5>
                        <p>{item.size}</p>
                    </div>
                    <div className='shopAddToCardBtn' onClick={()=>{handleAddToCart(products[key])}}>
                        Add to card
                    </div>
                </div>

            ))}
        </div>
    </div>

    </>
  )
}

export default Shop