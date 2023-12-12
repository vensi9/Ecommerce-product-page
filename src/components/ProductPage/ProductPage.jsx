//  Main component for the product page.
import React, { useState } from 'react'
import CartIcon from '../../images/icons/icon-cart.svg'
import Plus from '../../images/icons/icon-plus.svg'
import Minus from '../../images/icons/icon-minus.svg'

export const ProductPage = ({ setCartItems }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    if (quantity > 0) {
      const newItem = {
        price: 125.00,
        quantity: quantity,
      };
      setCartItems((prevItems) => [...prevItems, newItem]);
      setQuantity(0);
    }
  };

  return (
    <div className=' mx-5 sm:mx-0 sm:w-[42vw] md:w-[50vw] lg:w-[40vw] xl:w-[34vw] mt-3 sm:mt-0 '>
      <h3 className='text-orange text-10 sm:text-12 lg:text-14 font-700 tracking-[1.2px]'>SNEAKERS COMPANY</h3>
      <h1 className=' font-700 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:mt-4 mt-2'>Fall Limited Edition Sneakers</h1>
      <p className='text-dark-grayish-blue font-400 sm:text-14 lg:text-16 text-12 md:mt-6 mt-3'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <div className='flex md:block items-center justify-between mt-5 md:mt-0'>
        <div className='flex font-700 md:mt-5 '>
          <h2 className='text-20 md:text-2xl'>$125.00</h2>
          <span className=' flex items-center ml-4 md:px-3 px-2 rounded-md text-orange bg-pale-orange text-14 md:text-16'>50%</span>
        </div>
        <div className='md:mt-2 text-grayish-blue font-700 text-14 md:text-16'>
          <s >$250.00</s>
        </div>
      </div>
      <div className='grid md:flex items-center mt-6 md:pt-10 mb-16 sm:mb-0'>
        <button type='button' className='filter-drop-shadow-white justify-around px-4 py-3 md:py-4 rounded-lg bg-light-grayish-blue flex items-center font-700'>
          <img src={Plus} alt="plus" onClick={handleIncrement} className='hover:opacity-50 ' />
          <span className=' sm:mx-10'>{quantity}</span>
          <img src={Minus} alt="minus" onClick={handleDecrement} className='hover:opacity-50 ' />
        </button>
        <button 
        type="submit" 
        onClick={handleAddToCart} 
        className='hover:opacity-50 filter-drop-shadow-orange md:text-14 lg:text-16  text-14 md:ml-4 mt-4 md:mt-0 flex justify-center items-center bg-orange font-700 text-white px-16 md:px-12 lg:px-16 py-3 md:py-4 rounded-lg'
        >
          <img src={CartIcon} alt="cart" className='w-[1.5rem] sm:w:auto mr-2 filter brightness-0 invert' />
          Add to Cart</button>
      </div>    
    </div>
  )
}
