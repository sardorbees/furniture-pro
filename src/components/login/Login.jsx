import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'


function Login() {
    return (
        <div class="login__section section--padding">
            <div class="container">
                <form action="#" className='form'>
                    <div class="login__section--inner">
                        <div class="row row-cols-md-2 row-cols-1">
                            <div class="col">
                                <div class="account__login">
                                    <div class="account__login--header mb-25">
                                        <h3 class="account__login--header__title mb-10">Авторизоваться</h3>
                                        <p class="account__login--header__desc">Войдите в систему, если вы являетесь постоянным клиентом.</p>
                                    </div>
                                    <div class="account__login--inner">
                                        <label>
                                            <input class="account__login--input" placeholder="Email Addres" type="email" />
                                        </label>
                                        <label>
                                            <input class="account__login--input" placeholder="Password" type="password" />
                                        </label>
                                        <div class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                                            <div class="account__login--remember position__relative">
                                                <input class="checkout__checkbox--input" id="check1" type="checkbox" />
                                                <span class="checkout__checkbox--checkmark"></span>
                                                <label class="checkout__checkbox--label login__remember--label" for="check1">
                                                    Запомнить меня</label>
                                            </div>
                                            <button class="account__login--forgot" type="submit">Забыли пароль?</button>
                                        </div>
                                        <button class="account__login--btn primary__btn" type="submit">Авторизоваться</button>
                                        <div class="account__login--divide">
                                            <span class="account__login--divide__text">ИЛИ</span>
                                        </div>
                                        <p class="account__login--signup__text">Нет учетной записи? <button type="submit">Зарегистрируйтесь сейчас</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;