import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'
import product from '../assets/product/1/one.webp'
import product1 from '../assets/product/1/two.webp'
import product2 from '../assets/product/1/three.webp'
import product3 from '../assets/product/1/four.webp'
import product4 from '../assets/product/1/five.webp'

function Type() {
    return (
        <div>
            <section class="banner__section section--padding">
                <div class="container-fluid">
                    <div class="row mb--n28">
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-28">
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="/shop"><img class="banner__items--thumbnail__img" src={product} alt="banner-img"/>
                                    <div class="banner__items--content one">
                                        <h2 class="banner__items--content__title">Белый минималист <br/>
                                            Комбинированный диван </h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-28">
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="/shop"><img class="banner__items--thumbnail__img" src={product1} alt="banner-img"/>
                                    <div class="banner__items--content two">
                                        <h2 class="banner__items--content__title">Modern Stylish <br/>
                                            Одноместный диван</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-28">
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="/shop"><img class="banner__items--thumbnail__img" src={product2} alt="banner-img"/>
                                    <div class="banner__items--content three">
                                        <h2 class="banner__items--content__title">Больше Минимальный <br/>
                                            Деревянный стул </h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 mb-28">
                            <div class="banner__items mb-25">
                                <a class="banner__items--thumbnail position__relative" href="/shop"><img class="banner__items--thumbnail__img" src={product3} alt="banner-img"/>
                                    <div class="banner__items--content four">
                                        <h2 class="banner__items--content__title four">Семейный пакет <br/>
                                            Комплект диванов</h2>
                                    </div>
                                </a>
                            </div>
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="/shop"><img class="banner__items--thumbnail__img" src={product4} alt="banner-img"/>
                                    <div class="banner__items--content five">
                                        <h2 class="banner__items--content__title">Белый минималист <br/>
                                            Комбинированный диван</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Type;