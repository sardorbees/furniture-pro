import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'


function Register() {
    return (
        <div class="login__section section--padding">
            <div class="container">
                <form action="#" className='form'>
                    <div class="login__section--inner">
                        <div class="row row-cols-md-2 row-cols-1">
                            <div class="col">
                                <div class="account__login register">
                                    <div class="account__login--header mb-25">
                                        <h3 class="account__login--header__title mb-10">Завести аккаунт</h3>
                                        <p class="account__login--header__desc">Зарегистрируйтесь здесь, если вы новый клиент</p>
                                    </div>
                                    <div class="account__login--inner">
                                        <label>
                                            <input class="account__login--input" placeholder="Username" type="text"/>
                                        </label>
                                        <label>
                                            <input class="account__login--input" placeholder="Email Addres" type="email"/>
                                        </label>
                                        <label>
                                            <input class="account__login--input" placeholder="Password" type="password"/>
                                        </label>
                                        <label>
                                            <input class="account__login--input" placeholder="Confirm Password" type="password"/>
                                        </label>
                                        <label>
                                            <button class="account__login--btn primary__btn mb-10" type="submit">Отправить и зарегистрироваться</button>
                                        </label>
                                        <div class="account__login--remember position__relative">
                                            <input class="checkout__checkbox--input" id="check2" type="checkbox"/>
                                                <span class="checkout__checkbox--checkmark"></span>
                                                <label class="checkout__checkbox--label login__remember--label" for="check2">
                                                    Я прочитал(а) и согласен(сна) с условиями</label>
                                        </div>
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
export default Register;