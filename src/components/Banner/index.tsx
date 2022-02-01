import Image from 'next/image';
import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
        <div className='relative mb-20'>
            <Carousel autoPlay infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} interval={3000} className="">
                <div className="">
                    <Image src="https://www.maxpixel.net/static/photo/1x/Tag-Business-Offer-Retail-Shopping-Sale-Discount-6099829.png" height={300} width={1000} alt="Shopping Image" loading="lazy" />
                </div>
                <div className="">
                    <Image src="https://www.maxpixel.net/static/photo/1x/Offer-Price-Promotion-Sale-Discount-Deal-Banner-706845.jpg" height={300} width={1000} alt="Shopping Image" loading="lazy" />
                </div>
                <div className="">
                    <Image src="https://www.maxpixel.net/static/photo/1x/Cyber-Monday-Shopping-Sticker-Banner-Label-Sale-5767249.jpg" height={300} width={1000} alt="Shopping Image" loading="lazy" />
                </div>
            </Carousel>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-dark to-transparent bottom-15'></div>
        </div>
    );
};

export default Banner;
