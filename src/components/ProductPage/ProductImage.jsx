import React, { useState } from 'react'
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'
import { LightBoxGallery } from './LightBoxGallery'

export const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightBox, setLightBox] = useState(false);

  const images = [
    { src: Product1, alt: 'Product1' },
    { src: Product2, alt: 'Product2' },
    { src: Product3, alt: 'Product3' },
    { src: Product4, alt: 'Product4' },
  ];

  const handleLightBoxOpen = () => {
    setLightBox(true)
  }
  return (
    <>
      <div className='lg:w-96 sm:w-80 sm:relative absolute sm:top-0 top-14 hidden sm:block '>
        <div className='grid'>
          <div>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className='sm:rounded-xl h-[45vh] sm:h-auto w-full object-cover cursor-pointer '
              onClick={handleLightBoxOpen}
            />
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
        </div>
      </div>
      {isLightBox && (
        <LightBoxGallery images={images} setLightBox={setLightBox} />
      )}
    </>
  )
}
