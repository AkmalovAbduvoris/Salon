<script setup>
import './Book.css'
</script>
<template>
    <section class="book">
        <div class="container">
            <div class="book__wrapper">
                <div class="book__left-wrapper">
                    <p class="book__text">{{$t('book__text')}}</p>
                    <h2 class="book__title">{{$t('book__title')}}</h2>
                    <p class="book__desciption">{{$t('book__desciption')}}</p>
                    <button class="book__btn">{{$t('buttons.appointment')}}</button>
                </div>
                <div class="book__right-wrapper">
                    <div class="book__img">
                    <img  src="/public/img/book__icon.svg" width="34" height="42" alt="tel">
                    </div>
                    <p class="book__call">{{$t('book__call')}}</p>
                    <p class="book__number">0300 7715325</p>
                </div>
            </div>
        </div>
    </section>
</template>