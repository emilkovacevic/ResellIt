'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import React, { ReactNode } from 'react'

interface SwipperProps {
  // eslint-disable-next-line react/require-default-props
  title?: string
  children: ReactNode
}

const LeftArrow = () => <div className="swiper-custom-button-left">←</div>

const RightArrow = () => <div className="swiper-custom-button-right">→</div>

export default function Swipper({ children, title = '' }: SwipperProps) {
  return (
    <div>
      {title ? (
        <h2 className="p-8 my-2 text-4xl font-bold text-center border-b border-border">
          {title}
        </h2>
      ) : null}

      <Swiper
        navigation={{
          nextEl: '.swiper-custom-button-right',
          prevEl: '.swiper-custom-button-left'
        }}
        keyboard
        pagination={{
          type: 'fraction'
        }}
        loop
        autoplay={{
          delay: 4500
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <LeftArrow />
        <RightArrow />
        {React.Children.map(children, (child: ReactNode) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}