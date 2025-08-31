import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'
import Owl from '../owl/Owl';
import Type from '../type/Type';
import Product from '../product/Product'
import BannerSection from '../banner__section/BannerSection';

function Main() {
    return (
        <div>
            <Owl />
            <Type />
            <Product />
            <BannerSection />
        </div>
    )
}
export default Main;