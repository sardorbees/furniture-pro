import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Owl() {
    return (
        <div>
            <Swiper slidesPerView={1} autoplay={{ delay: 2000 }} loop={true}>
                <SwiperSlide>
                    <div class="swiper-slide ">
                        <div class="hero__slider--items hero__slider--bg slider1">
                            <div class="container-fluid">
                                <div class="hero__slider--items__inner">
                                    <div class="row row-cols-1">
                                        <div class="col">
                                            <div class="slider__content">
                                                <p class="slider__content--desc desc1 text-white mb-15">Discover our best furniture collection from home</p>
                                                <h2 class="slider__content--maintitle text-white h1">Stylish Furniture <br />
                                                    Bring Beauti</h2>
                                                <p class="slider__content--desc text-white mb-35 d-sm-2-none">Great furniture can bring beauty at your home, So buy our popular <br />
                                                    and stylish furniture. Now you get up to 100 % discount now.</p>
                                                <a class="slider__content--btn primary__btn" href="shop.html">Start to Buying</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div class="swiper-slide ">
                        <div class="hero__slider--items hero__slider--bg slider2">
                            <div class="container-fluid">
                                <div class="hero__slider--items__inner">
                                    <div class="row">
                                        <div class="col-lg-6 offset-lg-6">
                                            <div class="slider__content text-center">
                                                <p class="slider__content--desc desc1 right text-white mb-15">Discover our best furniture collection from home</p>
                                                <h2 class="slider__content--maintitle text-white h1">Stylish Furniture <br />
                                                    Bring Beauti</h2>
                                                <p class="slider__content--desc text-white mb-35 d-sm-2-none">Great furniture can bring beauty at your home, So buy our popular <br />
                                                    and stylish furniture. Now you get up to 100 % discount now.</p>
                                                <a class="slider__content--btn primary__btn" href="shop.html">Start to Buying</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div class="swiper-slide ">
                        <div class="hero__slider--items hero__slider--bg slider3">
                            <div class="container-fluid">
                                <div class="hero__slider--items__inner">
                                    <div class="row">
                                        <div class="col-lg-6 offset-lg-6">
                                            <div class="slider__content text-center">
                                                <p class="slider__content--desc desc1 right text-white mb-15">Discover our best furniture collection from home</p>
                                                <h2 class="slider__content--maintitle text-white h1">Stylish Furniture <br />
                                                    Bring Beauti</h2>
                                                <p class="slider__content--desc text-white mb-35 d-sm-2-none">Great furniture can bring beauty at your home, So buy our popular <br />
                                                    and stylish furniture. Now you get up to 100 % discount now.</p>
                                                <a class="slider__content--btn primary__btn" href="shop.html">Start to Buying</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Owl;