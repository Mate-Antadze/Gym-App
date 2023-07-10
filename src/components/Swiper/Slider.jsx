// import React from 'react';
// import './Slider.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination, Navigation } from 'swiper';
// import 'swiper/swiper-bundle.css';
// import { SliderProducts } from '../../data/products'
// import 'swiper/swiper-bundle.css';
// // Install Swiper modules


// function Slider() {
//   return (
//     <div className="s-container">
//       <Swiper
//       modules={[Pagination, Navigation]}
//       className='mySwiper'
//       navigation={true}
//       slidesPerView={3}
//       spaceBetween={40}
//       slidesPerGroup={1}
//       loop={true}
//       >
//         {SliderProducts.map((slider, i) => (
//           <SwiperSlide>
//             <div className="left-s">
//               <div className="name">
//                 <span>{slider.name}</span>
//                 <span>{slider.detail}</span>
//               </div>

//               <span>{slider.price}$</span>
//               <div>Shop Now</div>
//             </div>
//             <img src={slider.img} alt="" className='img-p' />
//           </SwiperSlide>
//         ))}


//       </Swiper>
//     </div>
//   );
// }

// export default Slider;
import './Slider.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProducts } from '../../data/products'
import SwiperCore, { Pagination, Navigation } from 'swiper';

function Slider() {
  return (
    <div className="s-container">
      <Swiper
      breakpoints={{
        900: {
          slidesPerView:3,
          spaceBetween: 60,
          loop: false,
        },

        670:{
          slidesPerView:2
        },
        0:{
          slidesPerView: 1,
          spaceBetween: 60,
          loop: false
        }
      }}
        loop={false}
        slidesPerView={3}
        spaceBetween={50}
        slidesPerGroup={1}
        modules={[Pagination, Navigation]}
        className='mySwiper'
       navigation={true}
      >
        {SliderProducts.map((slider, i) => (
          <SwiperSlide className='swiperS'>
            <div className="left-s">
              <div className="name">
                <span>{slider.name}</span>
                <span>{slider.detail}</span>
              </div>

              <span>{slider.price}$</span>
              <div>Shop Now</div>
            </div>
            <img src={slider.img} alt="" className='img-p' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider