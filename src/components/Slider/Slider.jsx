import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = ({ cards }) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      clickable: true,
    },
    navigation: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    modules: [Pagination, Navigation],
  };

  return (
    <div className="container mx-auto py-10">
      {Array.isArray(cards) && cards.length > 0 ? (
        <>
        <Swiper {...params} className="min-h-[600px]">
          {cards.map((card, index) => (
            <SwiperSlide 
              key={index} 
              className="flex justify-center items-center" >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 h-full">
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                  alt={card.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 h-48">
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">{card.overview}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
      `}</style>
        </>
        
      ) : (
        <p className="text-center text-gray-600">No hay tarjetas disponibles</p>
      )}
    </div>
  );
};

export default Slider;
