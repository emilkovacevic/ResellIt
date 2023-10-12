'use client'
// Import Swiper React components
import { SwiperRef, Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import React, { ReactNode, useRef } from 'react'

interface SwipperProps {
  // eslint-disable-next-line react/require-default-props
  title?: string
  children: ReactNode
  slidesPerView?: number
}

const LeftArrow = () => <div className="swiper-custom-button-left">←</div>

const RightArrow = () => <div className="swiper-custom-button-right">→</div>

export default function Swipper({
  children,
  title = '',
  slidesPerView = 1,
}: SwipperProps) {
  const swiperRef = useRef<SwiperRef | null>(null)

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop()
      swiperRef.current.swiper.params.loop = false
      swiperRef.current.swiper.update()
    }
  }

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.loop = true
      swiperRef.current.swiper.update()
      swiperRef.current.swiper.autoplay.start()
    }
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {title ? (
        <>
          <div className=" mt-4 border-b border-border" />
          <h2 className=" py-4 text-xl font-bold text-left">{title}</h2>
        </>
      ) : null}

      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: '.swiper-custom-button-right',
          prevEl: '.swiper-custom-button-left',
        }}
        keyboard
        pagination={{
          type: 'fraction',
        }}
        loop
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
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
