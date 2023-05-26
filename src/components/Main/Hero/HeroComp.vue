<script setup>
import './Hero.css'
</script>
<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <p class="hero__text">{{$t('hero__text')}}</p>
                <h1 class="hero__title">{{$t('hero__title')}}</h1>
                <p class="hero__description">{{$t('hero__description')}}</p>
                <div class="hero__buttons">
                    <button class="hero__btn-orange">{{$t('hero__btn-orange')}}</button>
                    <button class="hero__btn-black">{{$t('hero__btn-black')}}</button>
                </div>
            </div>
        </div>
    </section>
</template>