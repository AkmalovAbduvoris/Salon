<script setup>
import './Best.css'
</script>
<template>
    <section class="best">
        <div class="container">
            <div class="best__wrapper">
                <div>
                    <img src="/public/img/best__img.png" alt="">
                </div>
                <div>
                    <p class="best__text">{{$t('Us')}}</p>
                    <h2 class="best__title">{{$t('best__title')}}</h2>
                    <p class="best__description">{{$t('best__description')}}</p>
                    <button class="best__btn">{{$t('buttons.read')}}</button>
                </div>
            </div>
        </div>
    </section>
</template>