import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'
import logo from '../assets/icon/nav-log.webp'

function Header() {
    return (
        <div>
            <header class="header__section header__transparent">
                <div class="header__topbar bg__primary">
                    <div class="container-fluid">
                        <div class="header__topbar--inner d-flex align-items-center justify-content-between">
                            <div class="header__shipping">
                                <p class="header__shipping--text text-white">Получите скидку до 80% в вашем первом предложении!</p>
                            </div>
                            <div class="language__currency d-none d-lg-block">
                                <ul class="d-flex align-items-center">
                                    <li class="language__currency--list">
                                        <a class="account__currency--link text-white" href="#">
                                            <span>Валюта</span>
                                        </a>
                                    </li>
                                    <li class="language__currency--list">
                                        <a class="language__switcher text-white" href="#">
                                            <span>Язык</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main__header header__sticky">
                    <div class="container-fluid">
                        <div class="main__header--inner position__relative d-flex justify-content-between align-items-center">
                            <div class="offcanvas__header--menu__open ">
                                <a class="offcanvas__header--menu__open--btn" href="javascript:void(0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352" /></svg>
                                    <span class="visually-hidden">Открыть меню Offcanvas</span>
                                </a>
                            </div>
                            <div class="main__logo">
                                <h1 class="main__logo--title"><a class="main__logo--link" href="/"><img class="main__logo--img" src={logo} alt="logo-img" /></a></h1>
                            </div>
                            <div class="header__menu d-none d-lg-block">
                                <nav class="header__menu--navigation">
                                    <ul class="d-flex">
                                        <li class="header__menu--items">
                                            <a class="header__menu--link" href="/">Основный</a>
                                        </li>
                                        <li class="header__menu--items">
                                            <a class="header__menu--link" href="/shop">Диван</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="header__account">
                                <ul class="d-flex">
                                    <li class="header__account--items  header__account--search__items d-md-none">
                                        <a class="header__account--btn search__open--btn">
                                            <svg class="header__search--button__svg" xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" /></svg>
                                            <span class="visually-hidden">Поиск</span>
                                        </a>
                                    </li>
                                    <li class="header__account--items">
                                        <a class="header__account--btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26.51" height="23.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /></svg>
                                            <span class="visually-hidden">Мой счет</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="offcanvas-header" tabindex="-1">
                    <div class="offcanvas__inner">
                        <div class="offcanvas__logo">
                            <a class="offcanvas__logo_link" href="index.html">
                                <img src="assets/img/logo/nav-log.webp" alt="Furea Logo" />
                            </a>
                            <button class="offcanvas__close--btn" aria-label="offcanvas close btn">close</button>
                        </div>
                        <nav class="offcanvas__menu">
                            <ul class="offcanvas__menu_ul">
                                <li class="offcanvas__menu_li">
                                    <a class="offcanvas__menu_item" href="index.html">Основеый</a>
                                </li>
                                <li class="offcanvas__menu_li">
                                    <a class="offcanvas__menu_item" href="#">Диван</a>
                                </li>
                            </ul>
                            <div class="offcanvas__account--items">
                                <a class="offcanvas__account--items__btn d-flex align-items-center" href="login.html">
                                    <span class="offcanvas__account--items__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20.51" height="19.443" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /></svg>
                                    </span>
                                    <span class="offcanvas__account--items__label">Войти / Зарегистрироваться</span>
                                </a>
                            </div>
                            <div class="language__currency">
                                <ul class="d-flex align-items-center">
                                    <li class="language__currency--list">
                                        <a class="offcanvas__language--switcher" href="#">
                                            <span>Английский</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div class="offcanvas__stikcy--toolbar" tabindex="-1">
                    <ul class="d-flex justify-content-between">
                        <li class="offcanvas__stikcy--toolbar__list">
                            <a class="offcanvas__stikcy--toolbar__btn" href="/">
                                <span class="offcanvas__stikcy--toolbar__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="21.51" height="21.443" viewBox="0 0 22 17"><path fill="currentColor" d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"></path></svg>
                                </span>
                                <span class="offcanvas__stikcy--toolbar__label">Основный</span>
                            </a>
                        </li>
                        <li class="offcanvas__stikcy--toolbar__list">
                            <a class="offcanvas__stikcy--toolbar__btn" href="/shop">
                                <span class="offcanvas__stikcy--toolbar__icon">
                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="18.51" height="17.443" viewBox="0 0 448 512"><path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"></path></svg>
                                </span>
                                <span class="offcanvas__stikcy--toolbar__label">Магазин</span>
                            </a>
                        </li>
                        <li class="offcanvas__stikcy--toolbar__list ">
                            <a class="offcanvas__stikcy--toolbar__btn search__open--btn">
                                <span class="offcanvas__stikcy--toolbar__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" /></svg>
                                </span>
                                <span class="offcanvas__stikcy--toolbar__label">Поиск</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
export default Header;