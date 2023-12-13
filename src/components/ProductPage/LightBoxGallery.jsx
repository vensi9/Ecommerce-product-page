import React, { useState } from 'react'
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'
import Close from '../../images/icons/icon-close.svg'
import Slider from "react-slick";
import ArrowLeftIcon from '../../images/icons/icon-previous.svg';
import ArrowRightIcon from '../../images/icons/icon-next.svg';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div>
      <img
        src={ArrowLeftIcon}
        onClick={onClick}
        alt="left"
        className=" absolute z-10 cursor-pointer transform translate-x-[-43px] lg:translate-y-[-206px] sm:translate-y-[-180px] left-6 py-[10px] px-[13px] rounded-full bg-white"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div>
      <img
        src={ArrowRightIcon}
        onClick={onClick}
        alt="left"
        className="absolute z-10 cursor-pointer transform  translate-x-[68px] sm:translate-y-[147px]   lg:translate-y-[180px] right-12 py-[10px] px-[13px] rounded-full bg-white"
      />
    </div>
  );
}

export const LightBoxGallery = ({ setLightBox }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
 
  const images = [
    { src: Product1, alt: 'Product1' },
    { src: Product2, alt: 'Product2' },
    { src: Product3, alt: 'Product3' },
    { src: Product4, alt: 'Product4' },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    initialSlide: selectedImageIndex,
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setLightBox(false)
  }

  return (
    <>
      <article className=' overflow-hidden hidden sm:flex flex-col justify-center z-50 bg-opacity-75 bg-black fixed top-0 left-0 bottom-0 right-0'>
        <div className='container mx-auto lg:w-96 sm:w-80'>
          <div className='top-0'>
            <button className="transition duration-300 ease-in-out transform hover:text-orange-500 hover:scale-110 hover:brightness-75  left-[19rem] lg:left-[23rem] filter brightness-0 invert  bottom-1 relative" onClick={handleClose}>
              <img src={Close} alt="close"  />
            </button>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='h-auto object-cover'
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Thumbnail */}
        <div className='container mx-auto lg:w-96 sm:w-80 pt-4 gap-5   hidden sm:flex justify-between items-center'>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className={
                  `rounded-xl cursor-pointer ${selectedImageIndex === index ? 'border-2 border-orange' : ''
                  }`}
                onClick={() => setSelectedImageIndex(index)}
              />
            </div>
          ))}
        </div>
      </article>
    </>
  )
}
