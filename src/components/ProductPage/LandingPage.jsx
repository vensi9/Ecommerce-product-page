import React from 'react'
import { ProductImage } from './ProductImage'
import { ProductPage } from './ProductPage'
import ImageSlider from './ResponsiveImage'

export const LandingPage = () => {
  return (
    <>
      <div className='hidden sm:flex items-center justify-center md:py-20 sm:py-12 gap-8 lg:gap-20 xl:gap-40 sm:mx-4 md:mx-8'>
        <ProductImage />
        <ProductPage />
      </div>
      <div className='block sm:hidden'>
        <ImageSlider />
        <ProductPage />
      </div>
    </>
  )
}
