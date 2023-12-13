import React from 'react'
import Image from "../../images/image-product-1-thumbnail.jpg"
import Delete from "../../images/icons/icon-delete.svg"

export const Carts = ({ cartItems = [], setCartItems }) => {

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className='w-[95vw] sm:w-96 rounded-lg left-1/2 sm:left-[70%] xl:left-[80%] 2xl:left-[75%] transform -translate-x-1/2 z-20 container mt-2  sm:mt-0  absolute top-18 lg:top-28  bg-white shadow-lg  shadow-grayish-blue'>
      <div className='mx-2 sm:mx-auto '>
        <div className='flex items-center h-16 border-b-2 '>
          <h1 className='pl-8 text-black font-700'>Cart</h1>
        </div>

        {cartItems.length > 0 ? (
          <div className='justify-center flex items-center h-56'>
            <div className='flex flex-col gap-6'>
              {cartItems.map((item, index) => (
                <div key={index} className='flex items-center'>
                  <img src={Image}
                    className=' w-12 rounded-md'
                    alt="Shoes"
                  />
                  <div className='text-18 ml-4 font-400 text-dark-grayish-blue'>
                    <h1>
                    {item.name}
                    </h1>
                    <h1>
                      <span>${item.price.toFixed(2)}</span> x
                      <span> {item.quantity}</span>
                      <b className='text-very-dark-blue'> ${(item.totalPrice).toFixed(2)}</b>
                    </h1>
                  </div>
                  <div>
                    <img
                      className='ml-4 cursor-pointer'
                      src={Delete}
                      alt="Delete-Icon"
                      onClick={() => handleRemove()}
                    />
                  </div>
                </div>
              ))}
              <button className=' font-700 text-white px-28 py-4 bg-orange hover:opacity-50 rounded-xl' type='submit'>Checkout</button>
            </div>
          </div>
        ) : (
          //  Empty Cart 
          <div div className='justify-center flex items-center h-56'>
            <h1 className=' font-700 text-dark-grayish-blue'>Your cart is empty.</h1>
          </div>
        )}
      </div>
    </div >
  )
}
