import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../assets/bkgr.webp'
import img2 from '../assets/logo.jpg'
import img3 from '../assets/player.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const config = [
    { id: 1, title: "bkgr", src: img1 },
    { id: 2, title: "logo", src: img2 },
    { id: 3, title: "player", src: img3 }
]
export default function Home() {
    return (
        <div className="max-w-[1400px] pt-[200px] mx-auto my-0">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-w-[750px]" 
            >
                {config.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="w-full max-w-[750px] h-[500px] flex justify-center">
                            <img className="w-full" src={item.src} alt={item.title} /></div></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}



