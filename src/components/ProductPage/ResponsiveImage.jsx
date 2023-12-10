import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Product1 from "../../images/image-product-1.jpg"
import Product2 from "../../images/image-product-2.jpg"
import Product3 from "../../images/image-product-3.jpg"
import Product4 from "../../images/image-product-4.jpg"
import ArrowLeftIcon from '../../images/icons/icon-previous.svg';  
import ArrowRightIcon from '../../images/icons/icon-next.svg'; 

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div>
            <img
                src={ArrowLeftIcon}
                onClick={onClick}
                alt="left"
                className="absolute z-10 transform translate-x-[-10px] translate-y-[-150px] left-7 py-[6px] px-[9px] rounded-full bg-white"
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
                className="absolute z-10 transform translate-x-10 translate-y-[105px] right-14 py-[6px] px-[9px] rounded-full bg-white"
            />
        </div>
    );
}

const ImageSlider = () => {
    const images = [{
        id: 1,
        src: `${Product1}`,
        alt: "Image 1"
    },
    {
        id: 2,
        src: `${Product2}`,
        alt: "Image 2 "
    },
    {
        id: 3,
        src: `${Product3}`,
        alt: "Image 3"
    },
    {
        id: 4,
        src: `${Product4}`,
        alt: "Image 3"
    }
    ];

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };
    return (
        <>
            <div className="block sm:hidden h-auto">
                <Slider {...settings} >
                    {images.map((item) => (
                        <div key={item.id} className="w-full">
                            <img className='h-[45vh]  w-full object-cover' src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default ImageSlider;
