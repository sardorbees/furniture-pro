import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'

function Main() {
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
            <section className='product__section section--padding pt-0'>
                <div class="section__heading text-center mb-30">
                    <h2 class="section__heading--maintitle">Самые популярные товары</h2>
                </div>
                <div className="tab_content">
                    <div className="tab_pane active show">
                        <div className="product__section--inner">
                            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30">
                                {products.map((product) => (
                                    <div className="col mb-30">
                                        <div className="product__items">
                                            <div class="product__items--thumbnail">
                                                <a class="product__items--link">
                                                    <img class="product__items--img product__primary--img" src={product.thumbnail} alt="product-img" />
                                                    <img class="product__items--img product__secondary--img" src={product.thumbnail} alt="product-img" />
                                                </a>
                                                <div class="product__badge">
                                                    <span class="product__badge--items sale">Новый</span>
                                                </div>
                                                <div class="product__items--content text-center">
                                                    <div class="product__items--color">
                                                        <ul class="product__items--color__wrapper d-flex justify-content-center">
                                                            <li class="product__items--color__list"><a class="product__items--color__link one"><span class="visually-hidden">Color 1</span></a></li>
                                                            <li class="product__items--color__list"><a class="product__items--color__link two"><span class="visually-hidden">Color 2</span></a></li>
                                                            <li class="product__items--color__list"><a class="product__items--color__link three"><span class="visually-hidden">Color 3</span></a></li>
                                                            <li class="product__items--color__list"><a class="product__items--color__link four"><span class="visually-hidden">Color 3</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <h3 class="product__items--content__title h4"><a>{product.title}</a></h3>
                                                    <div class="product__items--price">
                                                        <br /><br />
                                                        <span class="current__price">{product.description}</span>
                                                        <br /><br />
                                                        <span class="current__price">{product.price}</span>
                                                    </div>
                                                    <a class="product__items--action__cart--btn primary__btn" href="cart.html">
                                                        <svg class="product__items--action__cart--btn__icon" xmlns="http://www.w3.org/2000/svg" width="13.897" height="14.565" viewBox="0 0 18.897 21.565">
                                                            <path d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z" transform="translate(-2.667 -1.366)" fill="currentColor"></path>
                                                        </svg>
                                                        <span class="add__to--cart__text">Купить</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Main;