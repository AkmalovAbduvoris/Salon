<script setup>
import './Working.css'
</script>
<template>
    <section class="working">
        <div class="container">
            <div class="working__wrapper">
                <img class="working__img" src="/public/img/working__img.png" alt="working">
                <div class="working__right-wrapper">
                    <h2 class="working__title">{{$t('working__title')}}</h2>
                    <p class="working__text">{{$t('working__text')}}</p>
                    <div class="working__days-wrapper">
                        <b class="working__day">{{$t('working__day1')}}</b>
                        <p class="working__time">{{$t('working__time1')}}</p>
                    </div>
                    <div class="working__days-wrapper">
                        <b class="working__day">{{$t('working__day2')}}</b>
                        <p class="working__time">{{$t('working__time2')}}</p>
                    </div>
                    <button class="working__btn">{{$t('buttons.book')}}</button>    
                </div>
            </div>
        </div>
    </section>
</template>