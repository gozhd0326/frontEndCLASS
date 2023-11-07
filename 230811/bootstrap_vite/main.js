import './scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import "bootstrap-icons/font/bootstrap-icons.scss"

import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // 모듈 추가
    modules: [Navigation, Pagination],
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  });