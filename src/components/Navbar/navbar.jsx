import React, { useState } from 'react';
import Logo from "../../images/icons/logo.svg"
import Image from "../../images/image-avatar.png"
import Menu from "../../images/icons/icon-menu.svg"
import CloseIcon from "../../images/icons/icon-close.svg"
import Cart from "../../images/icons/icon-cart.svg"
import ImageSlider from '../ProductPage/ResponsiveImage';
import { Carts } from '../Cart/cart';
import { ProductPage } from '../ProductPage/ProductPage';
import { ProductImage } from '../ProductPage/ProductImage';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const users = [
    { links: "Collection" },
    { links: "Men" },
    { links: "Women" },
    { links: "About" },
    { links: "Contact" },
  ];

  return (
    <>
      <header>
        <div className="container mx-auto px-6 md:px-10 lg:px-24 flex justify-between items-center">
          {/* Left side */}
          <div className='container sm:border-b-[1px] py-4 lg:py-8 sm:border-grayish-blue flex justify-between'>
            <div className="flex items-center">
              {/* Hamburger menu for mobile */}
              <div className="sm:hidden">
                <button
                  onClick={toggleMenu}
                >
                  <img src={Menu} alt='menu' className='mr-5 w-3' />
                </button>
              </div>
              <div className="flex items-center ">
                <img src={Logo} alt="Logo" className='sm:w-auto w-24 mr-3 xl:mr-6' />
              </div>
              {users.map((user) => {
                return <ul className="hidden sm:flex text-14 lg:text-16 font-400 text-dark-grayish-blue">
                  <li className='ml-5 md:ml-8 lg:ml-10 '>
                    <a href="#" className="hover:text-very-dark-blue hover:border-orange hover:border-b-[3px] sm:hover:pb-[25px] lg:hover:pb-[43px]">{user.links}</a>
                  </li>
                </ul>
              })}

              {isMenuOpen && (
                <div className="fixed inset-0 bg-grayish-blue bg-opacity-75 z-50 transition ease-in delay-300">
                  <div className="absolute top-0 left-0 h-full bg-white w-52 shadow-lg transition ease-in delay-150">
                    <div className="flex justify-between items-center px-4 py-4">
                      <button onClick={toggleMenu}>
                        <img src={CloseIcon} alt="close" className="w-3" />
                      </button>
                    </div>
                    <div className="ease-in-out duration-300">
                      {users.map((user) => {
                        return <ul className="flex  sm:hidden flex-col pt-6 ml-4 text-14 font-700 gap-5 text-black">
                          <li className='ml-5 md:ml-8 lg:ml-10 '>
                            <a href="#" className="hover:text-very-dark-blue hover:border-orange hover:border-b-[3px] sm:hover:pb-[25px] lg:hover:pb-[43px]">{user.links}</a>
                          </li>
                        </ul>
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right side */}
            <div className="flex items-center font-larger">
              <button onClick={toggleCart} className="sm:mr-6 mr-6 sm:w-auto w-4 ">
                <img src={Cart} alt='menu' />
              </button>
              <button className=' transition duration-500 ease-in' >
                <img
                  src={Image}
                  alt="Profile"
                  className='w-5 h-5 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-cover cursor-pointer hover:border-orange hover:border-2' />
              </button>
            </div>
          </div>
        </div>
      </header>


      {isCartOpen && <Carts cartItems={cartItems} setCartItems={setCartItems} />}
      {/* Render ProductPage and pass setCartItems function as a prop */}
      <div className='hidden sm:flex items-center justify-center md:py-20 sm:py-12 gap-8 lg:gap-20 xl:gap-40 sm:mx-4 md:mx-8'>
        <ProductImage />
        <ProductPage setCartItems={setCartItems} />
      </div>
      <div className='block sm:hidden'>
        <ImageSlider />
        <ProductPage setCartItems={setCartItems} />
      </div>

    </>
  );
};

export default Navbar;
