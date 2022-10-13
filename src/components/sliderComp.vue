<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/bundle';
</script>

<template>
    <Swiper :slides-per-view="1" :space-between="50" :modules="[Navigation, Pagination]" navigation :pagination="{ clickable: true }">
        <SwiperSlide v-for="n in 10" :key="n">
            <img :src="'https://picsum.photos/1920/700?random'+n" />
        </SwiperSlide>
    </Swiper>
</template>

<script>
export default {}
</script>

<style>
    .swiper-button-next,
    .swiper-button-prev {
        width: 44px;
        padding: 16px;
        margin: 0 50px;
        border-radius: 50%;
        background-color: #5865F2;
        color: white;
        font-weight: bold;
    }
</style>