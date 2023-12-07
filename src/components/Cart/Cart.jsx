// for displaying the cart.
import React from 'react'
import Image from "../../images/image-product-1-thumbnail.jpg"
import Delete from "../../images/icons/icon-delete.svg"

export const Carts = () => {
  return (
    <div className='container pt-2 sm:pt-0 mx-auto sm:absolute right-12 sm:top-18 lg:top-28 sm:w-96 bg-white shadow-lg  shadow-grayish-blue'>
      <div className='flex items-center h-16 border-b-2 border-grayis-blue '>
        <h1 className='pl-8 text-black font-700'>Cart</h1>
      </div>
      {/* For Empty Cart */}
      {/* <div className= 'justify-center flex items-center h-56'>
        <h1 className=' font-700 text-dark-grayish-blue'>Your cart is empty.</h1>
      </div> */}

      {/* for Cart */}
      <div className='justify-center flex items-center h-56'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center'>
            <img src={Image}
              className=' w-12 rounded-md'
              alt="Shoes"
            />
            <div className='text-18 ml-4 font-400 text-dark-grayish-blue'>
              <h1>
                Fall Limited Edition Sneakers
              </h1>
              <h1>
                <span>$125.00</span> x
                <span> 3 </span>
                <b className='text-very-dark-blue'>$375.00</b>
              </h1>
            </div>
            <div>
              <img
              className='ml-4 cursor-pointer'
                src={Delete}
                alt="Delete-Icon"
              />
            </div>
          </div>
          <button className=' font-700 text-white px-28 py-4 bg-orange rounded-xl' type='submit'>Checkout</button>
        </div>
      </div>
    </div>
  )
}
