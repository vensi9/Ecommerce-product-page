//displaying the main product image.
import React, { useState } from 'react'
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'

export const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(Product1);

  const handleImageClick = (imageSrc) => {
    if (selectedImage === imageSrc) {
      setSelectedImage(null); // Deselect if already selected
    } else {
      setSelectedImage(imageSrc); // Select the clicked image
    }
    setCurrentProduct(imageSrc)
  };

  return (
    <div className='lg:w-96 sm:w-80 sm:relative absolute sm:top-0 top-14 hidden sm:block '>
      <div className='grid'>
        <div>
          <img src={currentProduct} alt="Product" className='sm:rounded-xl h-[45vh] sm:h-auto w-full object-cover' />
        </div>
        <div className=' gap-5 pt-6 hidden sm:flex justify-between items-center'>
          <div>
            <img src={Product1} alt="Product1"
              className={`rounded-xl cursor-pointer hover:opacity-50 ${selectedImage === Product1 ? 'border-2 border-orange opacity-50' : ''
                }`}
              onClick={() => handleImageClick(Product1)}
            />
          </div>
          <div>
            <img
              onClick={() => handleImageClick(Product2)}
              src={Product2} alt="Product1"
              className={`rounded-xl cursor-pointer hover:opacity-50 ${selectedImage === Product2 ? 'border-2 border-orange opacity-50' : ''
                }`}
            />
          </div>
          <div>
            <img
              onClick={() => handleImageClick(Product3)}
              src={Product3} alt="Product1"
              className={`rounded-xl cursor-pointer hover:opacity-50 ${selectedImage === Product3 ? 'border-2 border-orange opacity-50' : ''
                }`}
            />
          </div>
          <div>
            <img
              onClick={() => handleImageClick(Product4)}
              src={Product4} alt="Product1"
              className={`rounded-xl cursor-pointer hover:opacity-50 ${selectedImage === Product4 ? 'border-2 border-orange opacity-50' : ''
                }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
