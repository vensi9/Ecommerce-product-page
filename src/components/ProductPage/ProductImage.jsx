//displaying the main product image.
import React, { useState } from 'react'
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [open, setOpen] = useState(false);

  const images = [
    { src: Product1, alt: 'Product1' },
    { src: Product2, alt: 'Product2' },
    { src: Product3, alt: 'Product3' },
    { src: Product4, alt: 'Product4' },
  ];
  const customStyles = {
    slide: {
      maxWidth: '400px',
      maxHeight: '500px',
      objectFit: 'contain',
      margin: '0 3rem',
      borderRadius: '10px',
    },
  };

  return (
    <div className='lg:w-96 sm:w-80 sm:relative absolute sm:top-0 top-14 hidden sm:block '>
      <div className='grid'>
        <div>
          <img src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            onClick={() => setOpen(true)}
            className='sm:rounded-xl h-[45vh] sm:h-auto w-full object-cover cursor-pointer' />
        </div>
        <div className=' gap-5 pt-6 hidden sm:flex justify-between items-center'>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className={
                  `rounded-xl cursor-pointer hover:opacity-50 
                  ${selectedImage === index ? 'border-2 border-orange opacity-50' : ''}`
                }
                onClick={() => setSelectedImage(index)}
              />
            </div>
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          styles={customStyles}
          currentSlide={selectedImage}
          plugins={[Thumbnails]}
        />
      </div>
    </div>
  )
}
