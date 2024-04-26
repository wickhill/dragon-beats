import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//Reference: https://swiperjs.com/demos#autoplay
import img1 from '../assets/dragonbeats.jpg'
import img2 from '../assets/study.webp'
import img3 from '../assets/bkgr.webp'

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
        <div className="bg-gray-900 min-h-screen text-white">
        <div className="text-center pt-24 pb-8 px-4">
          <h1 className="text-4xl font-bold mb-4">Dragon Beats App</h1>
          <p className="text-lg max-w-2xl mx-auto">
            dragonBeats is a music web app built using the Spotify Web API. It is designed to cater to
            students who want background music that helps enhance their concentration while studying
            with no distractions. The app features genres like Classical, Jazz, Ambience with curated
            playlists containing various tracks that facilitate focused study sessions.
          </p>
        </div>
  
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
          className="mySwiper"
        >
          {config.map(item => (
            <SwiperSlide key={item.id}>
              <img className="w-full h-auto" src={item.src} alt={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}



