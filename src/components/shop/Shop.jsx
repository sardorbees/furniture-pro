import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Ошибка загрузки данных");
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data.products); // API возвращает объект с ключом "products"
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <div className="main__content_wrapper">
                <section class="breadcrumb__section breadcrumb__bg">
                    <div class="container-fluid">
                        <div class="row row-cols-1">
                            <div class="col">
                                <div class="breadcrumb__content">
                                    <h1 class="breadcrumb__content--title text-white mb-10">Нашы товары</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="shop__section section--padding">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4">
                                <div class="shop__sidebar--widget widget__area d-md-none">
                                    <div class="single__widget widget__bg">
                                        <h2 class="widget__title position__relative h3">Поиск</h2>
                                        <form class="widget__search--form" action="#">
                                            <label>
                                                <input class="widget__search--form__input border-0" placeholder="Поиск по"
                                                    type="text" />
                                            </label>
                                            <button class="widget__search--form__btn" type="submit">
                                                Поиск
                                            </button>
                                        </form>
                                    </div>
                                    <div class="single__widget widget__bg">
                                        <h2 class="widget__title position__relative h3">Категории</h2>
                                        <ul class="widget__categories--menu">
                                            <li class="widget__categories--menu__list">
                                                <label class="widget__categories--menu__label d-flex align-items-center">
                                                    <span class="widget__categories--menu__text">Джинсовая куртка</span>
                                                    <svg class="widget__categories--menu__arrowdown--icon"
                                                        xmlns="http://www.w3.org/2000/svg" width="12.355" height="8.394">
                                                        <path
                                                            d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                                            transform="translate(-6 -8.59)" fill="currentColor"></path>
                                                    </svg>
                                                </label>
                                                <ul class="widget__categories--sub__menu">
                                                    <li class="widget__categories--sub__menu--list">
                                                        <a class="widget__categories--sub__menu--link d-flex align-items-center">
                                                            <span class="widget__categories--sub__menu--text">Jacket,
                                                                Женщины</span>
                                                        </a>
                                                    </li>
                                                    <li class="widget__categories--sub__menu--list">
                                                        <a class="widget__categories--sub__menu--link d-flex align-items-center"
                                                            href="shop.html">
                                                            <span class="widget__categories--sub__menu--text">Woolend
                                                                Jacket</span>
                                                        </a>
                                                    </li>
                                                    <li class="widget__categories--sub__menu--list">
                                                        <a class="widget__categories--sub__menu--link d-flex align-items-center"
                                                            href="shop.html">
                                                            <span class="widget__categories--sub__menu--text">Western
                                                                denim</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="single__widget price__filter widget__bg">
                                        <h2 class="widget__title position__relative h3">Фильтр по цене</h2>
                                        <form class="price__filter--form" action="#">
                                            <div class="price__filter--form__inner mb-15 d-flex align-items-center">
                                                <div class="price__filter--group">
                                                    <label class="price__filter--label" for="Filter-Price-GTE1">От</label>
                                                    <div class="price__filter--input border-radius-5 d-flex align-items-center">
                                                        <span class="price__filter--currency">sum</span>
                                                        <input class="price__filter--input__field border-0"
                                                            id="Filter-Price-GTE1" name="filter.v.price.gte" type="number"
                                                            placeholder="0" min="0" max="250.00" />
                                                    </div>
                                                </div>
                                                <div class="price__divider">
                                                    <span>-</span>
                                                </div>
                                                <div class="price__filter--group">
                                                    <label class="price__filter--label" for="Filter-Price-LTE1">К</label>
                                                    <div class="price__filter--input border-radius-5 d-flex align-items-center">
                                                        <span class="price__filter--currency">sum</span>
                                                        <input class="price__filter--input__field border-0"
                                                            id="Filter-Price-LTE1" name="filter.v.price.lte" type="number"
                                                            min="0" placeholder="250.00" max="250.00" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="price__filter--btn primary__btn" type="submit">Фильтр</button>
                                        </form>
                                    </div>
                                    <div class="single__widget widget__bg">
                                        <h2 class="widget__title position__relative h3">Диетические потребности</h2>
                                        <ul class="widget__form--check">
                                            <li class="widget__form--check__list">
                                                <label class="widget__form--check__label" for="check1">Джинсовая рубашка</label>
                                                <input class="widget__form--check__input" id="check1" type="checkbox" />
                                                <span class="widget__form--checkmark"></span>
                                            </li>
                                            <li class="widget__form--check__list">
                                                <label class="widget__form--check__label" for="check2">Нужна зима</label>
                                                <input class="widget__form--check__input" id="check2" type="checkbox" />
                                                <span class="widget__form--checkmark"></span>
                                            </li>
                                            <li class="widget__form--check__list">
                                                <label class="widget__form--check__label" for="check3">Модные тенденции</label>
                                                <input class="widget__form--check__input" id="check3" type="checkbox" />
                                                <span class="widget__form--checkmark"></span>
                                            </li>
                                            <li class="widget__form--check__list">
                                                <label class="widget__form--check__label" for="check4">Хлопок большого размера</label>
                                                <input class="widget__form--check__input" id="check4" type="checkbox" />
                                                <span class="widget__form--checkmark"></span>
                                            </li>
                                            <li class="widget__form--check__list">
                                                <label class="widget__form--check__label" for="check5">Материал для выпечки</label>
                                                <input class="widget__form--check__input" id="check5" type="checkbox" />
                                                <span class="widget__form--checkmark"></span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="single__widget widget__bg">
                                        <h2 class="widget__title position__relative h3">Бренды</h2>
                                        <ul class="widget__tagcloud">
                                            <li class="widget__tagcloud--list"><a class="widget__tagcloud--link"
                                                href="shop.html">Деревянный</a></li>
                                            <li class="widget__tagcloud--list"><a class="widget__tagcloud--link"
                                                href="shop.html">Стул</a></li>
                                            <li class="widget__tagcloud--list"><a class="widget__tagcloud--link"
                                                href="shop.html">Современный</a></li>
                                            <li class="widget__tagcloud--list"><a class="widget__tagcloud--link"
                                                href="shop.html">Ткань </a></li>
                                            <li class="widget__tagcloud--list"><a class="widget__tagcloud--link"
                                                href="shop.html">Плечо </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-8">
                                <div
                                    class="shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30">
                                    <button class="widget__filter--btn d-none d-md-flex align-items-center">
                                        <svg class="widget__filter--btn__icon" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="28"
                                                d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80" />
                                            <circle cx="336" cy="128" r="28" fill="none" stroke="currentColor"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="28" />
                                            <circle cx="176" cy="256" r="28" fill="none" stroke="currentColor"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="28" />
                                            <circle cx="336" cy="384" r="28" fill="none" stroke="currentColor"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="28" />
                                        </svg>
                                        <span class="widget__filter--btn__text">Filter</span>
                                    </button>
                                    <div class="product__view--mode d-flex align-items-center">
                                        <div
                                            class="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                                            <label class="product__view--label">Предыдущая страница :</label>
                                            <div class="select shop__header--select">
                                                <select class="product__view--select">
                                                    <option selected value="1">10</option>
                                                    <option value="2">12</option>
                                                    <option value="3">20</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            class="product__view--mode__list product__short--by align-items-center d-none d-lg-flex">
                                            <label class="product__view--label">Сортировать по :</label>
                                            <div class="select shop__header--select">
                                                <select class="product__view--select">
                                                    <option selected value="1">Сортировать по последним</option>
                                                    <option value="2">Сортировать по популярности</option>
                                                    <option value="3">Сортировать по новизне</option>
                                                    <option value="4">Сортировать по рейтингу </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="product__showing--count">Показано 1–9 из 21 результатов</p>
                                </div>
                                <div class="shop__product--wrapper">
                                    <div class="tab_content">
                                        <div id="product_grid" class="tab_pane active show">
                                            <div class="product__section--inner product__grid--inner">
                                                <div
                                                    class="row row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30">
                                                    {products.map((product) => (
                                                        <div class="col mb-30">
                                                            <div class="product__items ">
                                                                <div class="product__items--thumbnail">
                                                                    <a class="product__items--link">
                                                                        <img class="product__items--img product__primary--img"
                                                                            src={product.thumbnail}
                                                                            alt="product-img" />
                                                                        <img class="product__items--img product__secondary--img"
                                                                            src={product.thumbnail}
                                                                            alt="product-img" />
                                                                    </a>
                                                                    <ul
                                                                        class="product__items--action d-flex justify-content-center">
                                                                    </ul>
                                                                </div>
                                                                <div class="product__items--content text-center">
                                                                    <div class="product__items--color">
                                                                        <ul
                                                                            class="product__items--color__wrapper d-flex justify-content-center">
                                                                            <li class="product__items--color__list"><a
                                                                                class="product__items--color__link one"
                                                                            ><span
                                                                                class="visually-hidden">Красный</span></a>
                                                                            </li>
                                                                            <li class="product__items--color__list"><a
                                                                                class="product__items--color__link two"
                                                                            ><span
                                                                                class="visually-hidden">Желтый</span></a>
                                                                            </li>
                                                                            <li class="product__items--color__list"><a
                                                                                class="product__items--color__link three"
                                                                            ><span
                                                                                class="visually-hidden">Зеленый</span></a>
                                                                            </li>
                                                                            <li class="product__items--color__list"><a
                                                                                class="product__items--color__link four"
                                                                            ><span
                                                                                class="visually-hidden">Синий</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <h3 class="product__items--content__title h4"><a
                                                                        href="product-details.html">{product.title}</a></h3>
                                                                    <div class="product__items--price">
                                                                        <span class="current__price">{product.description}</span>
                                                                        <br /><br />
                                                                        <span class="current__price">{product.price} sum</span>
                                                                        <br />
                                                                        <span class="old__price">sum {product.price}</span>
                                                                    </div>
                                                                    <a class="product__items--action__cart--btn primary__btn">
                                                                        <svg class="product__items--action__cart--btn__icon"
                                                                            xmlns="http://www.w3.org/2000/svg" width="13.897"
                                                                            height="14.565" viewBox="0 0 18.897 21.565">
                                                                            <path
                                                                                d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                                                                transform="translate(-2.667 -1.366)"
                                                                                fill="currentColor"></path>
                                                                        </svg>
                                                                        <span class="add__to--cart__text">Купить</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div id="product_list" class="tab_pane">
                                            <div class="product__section--inner">
                                                <div class="row row-cols-1 mb--n30">
                                                    <div class="col mb-30">
                                                        <div
                                                            class="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                            <div class="product__list--items__left d-flex align-items-center">
                                                                <div
                                                                    class="product__items--thumbnail product__list--items__thumbnail">
                                                                    <a class="product__items--link" href="product-details.html">
                                                                        <img class="product__items--img product__primary--img"
                                                                            src="assets/img/product/product11.webp"
                                                                            alt="product-img" />
                                                                        <img class="product__items--img product__secondary--img"
                                                                            src="assets/img/product/product10.webp"
                                                                            alt="product-img" />
                                                                    </a>
                                                                    <div class="product__badge">
                                                                        <span class="product__badge--items sale">Sale</span>
                                                                    </div>
                                                                </div>
                                                                <div class="product__list--items__content">
                                                                    <span
                                                                        class="product__items--content__subtitle mb-5">Wooden</span>
                                                                    <h4 class="product__list--items__content--title mb-15"><a
                                                                        href="product-details.html">Larger Minimal Wooden
                                                                        Chair</a></h4>
                                                                    <p class="product__list--items__content--desc m-0">Lorem,
                                                                        ipsum dolor sit amet consectetur adipisicing elit. Quia
                                                                        voluptas dolore doloribus architecto sequi corporis
                                                                        deleniti officia culpa dolor esse consectetur eligendi.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="product__list--items__right">
                                                                <span class="product__list--current__price">$299.00</span>
                                                                <ul class="rating product__list--rating d-flex">
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list"><span class="rating__list--text">(
                                                                        5.0)</span></li>
                                                                </ul>
                                                                <div class="product__list--action">
                                                                    <a class="product__list--action__cart--btn primary__btn"
                                                                        href="cart.html">
                                                                        <svg class="product__list--action__cart--btn__icon"
                                                                            xmlns="http://www.w3.org/2000/svg" width="16.897"
                                                                            height="17.565" viewBox="0 0 18.897 21.565">
                                                                            <path
                                                                                d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                                                                transform="translate(-2.667 -1.366)"
                                                                                fill="currentColor"></path>
                                                                        </svg>
                                                                        <span class="product__list--action__cart--text"> Add To
                                                                            Cart</span>
                                                                    </a>
                                                                    <ul
                                                                        class="product__list--action__wrapper d-flex align-items-center">
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                data-open="modal1" href="javascript:void(0)">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="30.51" height="25.443"
                                                                                    viewBox="0 0 512 512">
                                                                                    <path
                                                                                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                                                        fill="none" stroke="currentColor"
                                                                                        stroke-miterlimit="10"
                                                                                        stroke-width="32"></path>
                                                                                    <path fill="none" stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-miterlimit="10" stroke-width="32"
                                                                                        d="M338.29 338.29L448 448"></path>
                                                                                </svg>

                                                                                <span class="visually-hidden">Quick View</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="wishlist.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24.403" height="20.204"
                                                                                    viewBox="0 0 24.403 20.204">
                                                                                    <g transform="translate(0)">
                                                                                        <g data-name="Group 473"
                                                                                            transform="translate(0 0)">
                                                                                            <path data-name="Path 242"
                                                                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                                                                transform="translate(0 -35.514)"
                                                                                                fill="currentColor" />
                                                                                        </g>
                                                                                    </g>
                                                                                </svg>
                                                                                <span class="visually-hidden">Wishlist</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="compare.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="25.654" height="18.388"
                                                                                    viewBox="0 0 25.654 18.388">
                                                                                    <path data-name="Path 287"
                                                                                        d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                                                                        transform="translate(0 -72.508)"
                                                                                        fill="currentColor" />
                                                                                </svg>
                                                                                <span class="visually-hidden">Compare</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col mb-30">
                                                        <div
                                                            class="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                            <div class="product__list--items__left d-flex align-items-center">
                                                                <div
                                                                    class="product__items--thumbnail product__list--items__thumbnail">
                                                                    <a class="product__items--link" href="product-details.html">
                                                                        <img class="product__items--img product__primary--img"
                                                                            src="assets/img/product/product1.webp"
                                                                            alt="product-img" />
                                                                        <img class="product__items--img product__secondary--img"
                                                                            src="assets/img/product/product2.webp"
                                                                            alt="product-img" />
                                                                    </a>
                                                                </div>
                                                                <div class="product__list--items__content">
                                                                    <span
                                                                        class="product__items--content__subtitle mb-5">Modern</span>
                                                                    <h4 class="product__list--items__content--title mb-15"><a
                                                                        href="product-details.html">White Minimalist Combo
                                                                        Sofa</a></h4>
                                                                    <p class="product__list--items__content--desc m-0">Lorem,
                                                                        ipsum dolor sit amet consectetur adipisicing elit. Quia
                                                                        voluptas dolore doloribus architecto sequi corporis
                                                                        deleniti officia culpa dolor esse consectetur eligendi.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="product__list--items__right">
                                                                <span class="product__list--current__price">$320.00</span>
                                                                <ul class="rating product__list--rating d-flex">
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list"><span class="rating__list--text">(
                                                                        5.0)</span></li>
                                                                </ul>
                                                                <div class="product__list--action">
                                                                    <a class="product__list--action__cart--btn primary__btn"
                                                                        href="cart.html">
                                                                        <svg class="product__list--action__cart--btn__icon"
                                                                            xmlns="http://www.w3.org/2000/svg" width="16.897"
                                                                            height="17.565" viewBox="0 0 18.897 21.565">
                                                                            <path
                                                                                d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                                                                transform="translate(-2.667 -1.366)"
                                                                                fill="currentColor"></path>
                                                                        </svg>

                                                                        <span class="product__list--action__cart--text"> Add To
                                                                            Cart</span>
                                                                    </a>
                                                                    <ul
                                                                        class="product__list--action__wrapper d-flex align-items-center">
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                data-open="modal1" href="javascript:void(0)">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="30.51" height="25.443"
                                                                                    viewBox="0 0 512 512">
                                                                                    <path
                                                                                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                                                        fill="none" stroke="currentColor"
                                                                                        stroke-miterlimit="10"
                                                                                        stroke-width="32"></path>
                                                                                    <path fill="none" stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-miterlimit="10" stroke-width="32"
                                                                                        d="M338.29 338.29L448 448"></path>
                                                                                </svg>

                                                                                <span class="visually-hidden">Quick View</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="wishlist.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24.403" height="20.204"
                                                                                    viewBox="0 0 24.403 20.204">
                                                                                    <g transform="translate(0)">
                                                                                        <g data-name="Group 473"
                                                                                            transform="translate(0 0)">
                                                                                            <path data-name="Path 242"
                                                                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                                                                transform="translate(0 -35.514)"
                                                                                                fill="currentColor" />
                                                                                        </g>
                                                                                    </g>
                                                                                </svg>
                                                                                <span class="visually-hidden">Wishlist</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="compare.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="25.654" height="18.388"
                                                                                    viewBox="0 0 25.654 18.388">
                                                                                    <path data-name="Path 287"
                                                                                        d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                                                                        transform="translate(0 -72.508)"
                                                                                        fill="currentColor" />
                                                                                </svg>

                                                                                <span class="visually-hidden">Compare</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col mb-30">
                                                        <div
                                                            class="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                            <div class="product__list--items__left d-flex align-items-center">
                                                                <div
                                                                    class="product__items--thumbnail product__list--items__thumbnail">
                                                                    <a class="product__items--link" href="product-details.html">
                                                                        <img class="product__items--img product__primary--img"
                                                                            src="assets/img/product/product3.webp"
                                                                            alt="product-img" />
                                                                        <img class="product__items--img product__secondary--img"
                                                                            src="assets/img/product/product4.webp"
                                                                            alt="product-img" />
                                                                    </a>
                                                                    <div class="product__badge">
                                                                        <span class="product__badge--items sale">Sale</span>
                                                                    </div>
                                                                </div>
                                                                <div class="product__list--items__content">
                                                                    <span
                                                                        class="product__items--content__subtitle mb-5">Chair</span>
                                                                    <h4 class="product__list--items__content--title mb-15"><a
                                                                        href="product-details.html">Modern Swivel Chair</a>
                                                                    </h4>
                                                                    <p class="product__list--items__content--desc m-0">Lorem,
                                                                        ipsum dolor sit amet consectetur adipisicing elit. Quia
                                                                        voluptas dolore doloribus architecto sequi corporis
                                                                        deleniti officia culpa dolor esse consectetur eligendi.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="product__list--items__right">
                                                                <span class="product__list--current__price">$280.00</span>
                                                                <ul class="rating product__list--rating d-flex">
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list"><span class="rating__list--text">(
                                                                        5.0)</span></li>
                                                                </ul>
                                                                <div class="product__list--action">
                                                                    <a class="product__list--action__cart--btn primary__btn"
                                                                        href="cart.html">
                                                                        <svg class="product__list--action__cart--btn__icon"
                                                                            xmlns="http://www.w3.org/2000/svg" width="16.897"
                                                                            height="17.565" viewBox="0 0 18.897 21.565">
                                                                            <path
                                                                                d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                                                                transform="translate(-2.667 -1.366)"
                                                                                fill="currentColor"></path>
                                                                        </svg>

                                                                        <span class="product__list--action__cart--text"> Add To
                                                                            Cart</span>
                                                                    </a>
                                                                    <ul
                                                                        class="product__list--action__wrapper d-flex align-items-center">
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                data-open="modal1" href="javascript:void(0)">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="30.51" height="25.443"
                                                                                    viewBox="0 0 512 512">
                                                                                    <path
                                                                                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                                                        fill="none" stroke="currentColor"
                                                                                        stroke-miterlimit="10"
                                                                                        stroke-width="32"></path>
                                                                                    <path fill="none" stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-miterlimit="10" stroke-width="32"
                                                                                        d="M338.29 338.29L448 448"></path>
                                                                                </svg>

                                                                                <span class="visually-hidden">Quick View</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="wishlist.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24.403" height="20.204"
                                                                                    viewBox="0 0 24.403 20.204">
                                                                                    <g transform="translate(0)">
                                                                                        <g data-name="Group 473"
                                                                                            transform="translate(0 0)">
                                                                                            <path data-name="Path 242"
                                                                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                                                                transform="translate(0 -35.514)"
                                                                                                fill="currentColor" />
                                                                                        </g>
                                                                                    </g>
                                                                                </svg>
                                                                                <span class="visually-hidden">Wishlist</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="compare.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="25.654" height="18.388"
                                                                                    viewBox="0 0 25.654 18.388">
                                                                                    <path data-name="Path 287"
                                                                                        d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                                                                        transform="translate(0 -72.508)"
                                                                                        fill="currentColor" />
                                                                                </svg>

                                                                                <span class="visually-hidden">Compare</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col mb-30">
                                                        <div
                                                            class="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                            <div class="product__list--items__left d-flex align-items-center">
                                                                <div
                                                                    class="product__items--thumbnail product__list--items__thumbnail">
                                                                    <a class="product__items--link" href="product-details.html">
                                                                        <img class="product__items--img product__primary--img"
                                                                            src="assets/img/product/product5.webp"
                                                                            alt="product-img" />
                                                                        <img class="product__items--img product__secondary--img"
                                                                            src="assets/img/product/product6.webp"
                                                                            alt="product-img" />
                                                                    </a>
                                                                </div>
                                                                <div class="product__list--items__content">
                                                                    <span
                                                                        class="product__items--content__subtitle mb-5">Wooden</span>
                                                                    <h4 class="product__list--items__content--title mb-15"><a
                                                                        href="product-details.html">Modern Stylish Single
                                                                        Sofa</a></h4>
                                                                    <p class="product__list--items__content--desc m-0">Lorem,
                                                                        ipsum dolor sit amet consectetur adipisicing elit. Quia
                                                                        voluptas dolore doloribus architecto sequi corporis
                                                                        deleniti officia culpa dolor esse consectetur eligendi.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="product__list--items__right">
                                                                <span class="product__list--current__price">$255.00</span>
                                                                <ul class="rating product__list--rating d-flex">
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list"><span class="rating__list--text">(
                                                                        5.0)</span></li>
                                                                </ul>
                                                                <div class="product__list--action">
                                                                    <a class="product__list--action__cart--btn primary__btn"
                                                                        href="cart.html">
                                                                        <svg class="product__list--action__cart--btn__icon"
                                                                            xmlns="http://www.w3.org/2000/svg" width="16.897"
                                                                            height="17.565" viewBox="0 0 18.897 21.565">
                                                                            <path
                                                                                d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                                                                transform="translate(-2.667 -1.366)"
                                                                                fill="currentColor"></path>
                                                                        </svg>

                                                                        <span class="product__list--action__cart--text"> Add To
                                                                            Cart</span>
                                                                    </a>
                                                                    <ul
                                                                        class="product__list--action__wrapper d-flex align-items-center">
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                data-open="modal1" href="javascript:void(0)">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="30.51" height="25.443"
                                                                                    viewBox="0 0 512 512">
                                                                                    <path
                                                                                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                                                        fill="none" stroke="currentColor"
                                                                                        stroke-miterlimit="10"
                                                                                        stroke-width="32"></path>
                                                                                    <path fill="none" stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-miterlimit="10" stroke-width="32"
                                                                                        d="M338.29 338.29L448 448"></path>
                                                                                </svg>

                                                                                <span class="visually-hidden">Quick View</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="wishlist.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24.403" height="20.204"
                                                                                    viewBox="0 0 24.403 20.204">
                                                                                    <g transform="translate(0)">
                                                                                        <g data-name="Group 473"
                                                                                            transform="translate(0 0)">
                                                                                            <path data-name="Path 242"
                                                                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                                                                transform="translate(0 -35.514)"
                                                                                                fill="currentColor" />
                                                                                        </g>
                                                                                    </g>
                                                                                </svg>
                                                                                <span class="visually-hidden">Wishlist</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="compare.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="25.654" height="18.388"
                                                                                    viewBox="0 0 25.654 18.388">
                                                                                    <path data-name="Path 287"
                                                                                        d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                                                                        transform="translate(0 -72.508)"
                                                                                        fill="currentColor" />
                                                                                </svg>

                                                                                <span class="visually-hidden">Compare</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col mb-30">
                                                        <div
                                                            class="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                            <div class="product__list--items__left d-flex align-items-center">
                                                                <div
                                                                    class="product__items--thumbnail product__list--items__thumbnail">
                                                                    <a class="product__items--link" href="product-details.html">
                                                                        <img class="product__items--img product__primary--img"
                                                                            src="assets/img/product/product7.webp"
                                                                            alt="product-img" />
                                                                        <img class="product__items--img product__secondary--img"
                                                                            src="assets/img/product/product8.webp"
                                                                            alt="product-img" />
                                                                    </a>
                                                                    <div class="product__badge">
                                                                        <span class="product__badge--items sale">Sale</span>
                                                                    </div>
                                                                </div>
                                                                <div class="product__list--items__content">
                                                                    <span
                                                                        class="product__items--content__subtitle mb-5">Plastic</span>
                                                                    <h4 class="product__list--items__content--title mb-15"><a
                                                                        href="product-details.html">New Furniture Tree
                                                                        Planet</a></h4>
                                                                    <p class="product__list--items__content--desc m-0">Lorem,
                                                                        ipsum dolor sit amet consectetur adipisicing elit. Quia
                                                                        voluptas dolore doloribus architecto sequi corporis
                                                                        deleniti officia culpa dolor esse consectetur eligendi.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="product__list--items__right">
                                                                <span class="product__list--current__price">$275.00</span>
                                                                <ul class="rating product__list--rating d-flex">
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list"><span class="rating__list--text">(
                                                                        5.0)</span></li>
                                                                </ul>
                                                                <div class="product__list--action">
                                                                    <a class="product__list--action__cart--btn primary__btn"
                                                                        href="cart.html">
                                                                        <svg class="product__list--action__cart--btn__icon"
                                                                            xmlns="http://www.w3.org/2000/svg" width="16.897"
                                                                            height="17.565" viewBox="0 0 18.897 21.565">
                                                                            <path
                                                                                d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                                                                transform="translate(-2.667 -1.366)"
                                                                                fill="currentColor"></path>
                                                                        </svg>

                                                                        <span class="product__list--action__cart--text"> Add To
                                                                            Cart</span>
                                                                    </a>
                                                                    <ul
                                                                        class="product__list--action__wrapper d-flex align-items-center">
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                data-open="modal1" href="javascript:void(0)">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="30.51" height="25.443"
                                                                                    viewBox="0 0 512 512">
                                                                                    <path
                                                                                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                                                        fill="none" stroke="currentColor"
                                                                                        stroke-miterlimit="10"
                                                                                        stroke-width="32"></path>
                                                                                    <path fill="none" stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-miterlimit="10" stroke-width="32"
                                                                                        d="M338.29 338.29L448 448"></path>
                                                                                </svg>

                                                                                <span class="visually-hidden">Quick View</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="wishlist.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24.403" height="20.204"
                                                                                    viewBox="0 0 24.403 20.204">
                                                                                    <g transform="translate(0)">
                                                                                        <g data-name="Group 473"
                                                                                            transform="translate(0 0)">
                                                                                            <path data-name="Path 242"
                                                                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                                                                transform="translate(0 -35.514)"
                                                                                                fill="currentColor" />
                                                                                        </g>
                                                                                    </g>
                                                                                </svg>
                                                                                <span class="visually-hidden">Wishlist</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="compare.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="25.654" height="18.388"
                                                                                    viewBox="0 0 25.654 18.388">
                                                                                    <path data-name="Path 287"
                                                                                        d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                                                                        transform="translate(0 -72.508)"
                                                                                        fill="currentColor" />
                                                                                </svg>

                                                                                <span class="visually-hidden">Compare</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col mb-30">
                                                        <div
                                                            class="product__items product__list--items border-radius-5 d-flex align-items-center">
                                                            <div class="product__list--items__left d-flex align-items-center">
                                                                <div
                                                                    class="product__items--thumbnail product__list--items__thumbnail">
                                                                    <a class="product__items--link" href="product-details.html">
                                                                        <img class="product__items--img product__primary--img"
                                                                            src="assets/img/product/product9.webp"
                                                                            alt="product-img" />
                                                                        <img class="product__items--img product__secondary--img"
                                                                            src="assets/img/product/product10.webp"
                                                                            alt="product-img" />
                                                                    </a>
                                                                </div>
                                                                <div class="product__list--items__content">
                                                                    <span
                                                                        class="product__items--content__subtitle mb-5">Wooden</span>
                                                                    <h4 class="product__list--items__content--title mb-15"><a
                                                                        href="product-details.html">Single Stylish Mini
                                                                        Chair</a></h4>
                                                                    <p class="product__list--items__content--desc m-0">Lorem,
                                                                        ipsum dolor sit amet consectetur adipisicing elit. Quia
                                                                        voluptas dolore doloribus architecto sequi corporis
                                                                        deleniti officia culpa dolor esse consectetur eligendi.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="product__list--items__right">
                                                                <span class="product__list--current__price">$310.00</span>
                                                                <ul class="rating product__list--rating d-flex">
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list">
                                                                        <span class="rating__list--icon">
                                                                            <svg class="rating__list--icon__svg"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="11.105" height="11.732"
                                                                                viewBox="0 0 10.105 9.732">
                                                                                <path data-name="star - Copy"
                                                                                    d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                                                                    transform="translate(0 -0.018)"
                                                                                    fill="currentColor"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </li>
                                                                    <li class="rating__list"><span class="rating__list--text">(
                                                                        5.0)</span></li>
                                                                </ul>
                                                                <div class="product__list--action">
                                                                    <a class="product__list--action__cart--btn primary__btn"
                                                                        href="cart.html">
                                                                        <svg class="product__list--action__cart--btn__icon"
                                                                            xmlns="http://www.w3.org/2000/svg" width="16.897"
                                                                            height="17.565" viewBox="0 0 18.897 21.565">
                                                                            <path
                                                                                d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                                                                transform="translate(-2.667 -1.366)"
                                                                                fill="currentColor"></path>
                                                                        </svg>

                                                                        <span class="product__list--action__cart--text"> Add To
                                                                            Cart</span>
                                                                    </a>
                                                                    <ul
                                                                        class="product__list--action__wrapper d-flex align-items-center">
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                data-open="modal1" href="javascript:void(0)">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="30.51" height="25.443"
                                                                                    viewBox="0 0 512 512">
                                                                                    <path
                                                                                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                                                        fill="none" stroke="currentColor"
                                                                                        stroke-miterlimit="10"
                                                                                        stroke-width="32"></path>
                                                                                    <path fill="none" stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-miterlimit="10" stroke-width="32"
                                                                                        d="M338.29 338.29L448 448"></path>
                                                                                </svg>

                                                                                <span class="visually-hidden">Quick View</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="wishlist.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24.403" height="20.204"
                                                                                    viewBox="0 0 24.403 20.204">
                                                                                    <g transform="translate(0)">
                                                                                        <g data-name="Group 473"
                                                                                            transform="translate(0 0)">
                                                                                            <path data-name="Path 242"
                                                                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                                                                transform="translate(0 -35.514)"
                                                                                                fill="currentColor" />
                                                                                        </g>
                                                                                    </g>
                                                                                </svg>
                                                                                <span class="visually-hidden">Wishlist</span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__list--action__child">
                                                                            <a class="product__list--action__btn"
                                                                                href="compare.html">
                                                                                <svg class="product__list--action__btn--svg"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="25.654" height="18.388"
                                                                                    viewBox="0 0 25.654 18.388">
                                                                                    <path data-name="Path 287"
                                                                                        d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                                                                        transform="translate(0 -72.508)"
                                                                                        fill="currentColor" />
                                                                                </svg>

                                                                                <span class="visually-hidden">Compare</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Shop;