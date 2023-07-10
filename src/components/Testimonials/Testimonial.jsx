import React from 'react'
import './Testimonial.css'
import Hero from '../../assets/hero.png'
import { TestimonialsData } from '../../data/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'

function Testimonial() {
    return (
        <div className='testimonials'>
            <div className="t-wrapper">
                <div className="t-container">
                    <span>Top Rated</span>
                    <span> SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED. </span>
                </div>


                <img src={Hero} alt="" />

                <div className="t-container">
                    <span>100K</span>
                    <span>Happy Costumers with us</span>
                </div>
            </div>

            <div className="rewiew">Review</div>

            <div className="carousel">
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className='t-carousel'
                    breakpoints={{
                        769:{
                            slidesPerView:3
                        },
                        620:{
                            slidesPerView:2
                        },
                        0:{
                            slidesPerView:1
                        }
                    }}
                >
                    {
                        TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide>
                                <div className="testimonial">
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Testimonial