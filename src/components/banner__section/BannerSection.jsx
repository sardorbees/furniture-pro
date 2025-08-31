import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'
import product from '../assets/product/1/six.webp'
import product1 from '../assets/product/1/seven.webp'
import product2 from '../assets/product/1/eight.webp'

function BannerSection() {
    return (
        <div>
            <section class="banner__section section--padding pt-0">
                <div class="container-fluid">
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
                        <div class="col mb-28">
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="/shop"><img class="banner__items--thumbnail__img" src={product} alt="banner-img"/>
                                    <div class="banner__items--content__style2 right">
                                        <h2 class="banner__items--content__style2--title">Одиночный стильный <br/>
                                            Мини-стул </h2>
                                        <span class="banner__items--content__link primary__btn style2">Заказать сейчас</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col mb-28">
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="/shop"><img class="banner__items--thumbnail__img" src={product1} alt="banner-img"/>
                                    <div class="banner__items--content__style2 right">
                                        <h2 class="banner__items--content__style2--title">New Furniture <br/>
                                            Планета деревьев </h2>
                                        <span class="banner__items--content__link primary__btn style2">Заказать сейчас</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col mb-28">
                            <div class="banner__items">
                                <a class="banner__items--thumbnail position__relative" href="/shop"><img class="banner__items--thumbnail__img" src={product2} alt="banner-img"/>
                                    <div class="banner__items--content__style2">
                                        <h2 class="banner__items--content__style2--title">Одиночный стильный <br/>
                                            Мини-стул </h2>
                                        <span class="banner__items--content__link primary__btn style2">Заказать сейчас</span>
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
export default BannerSection;