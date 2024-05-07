import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper"; // Corrected import statement
import CarouselLeftNavigation from "./Carousel Left Navigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./Carousel Right Navigation/CarouselRightNavigation";
import 'swiper/css/navigation';

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data, swiper]);
    return <></>;
}

export default function Carousel({ data, renderComponent }){
    return (
        <div className={styles.wrapper}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                style={{padding: "0px 20px"}}
                initialState={0}
                slidesPerView={"auto"}
                allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((ele, idx) => (
                    <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
