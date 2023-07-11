<script setup>
import './Header.css'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({useScope: 'global'})
function swichLang(){
    locale.value === 'en' ? locale.value = 'uz' : locale.value = 'en'
    localStorage.setItem('lang' , locale.value)
    console.log(locale.value);
    
}
</script>



<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <router-link to="/">
                    <img src="/public/img/logo.svg" alt="logo">
                </router-link>
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__item">
                            <a class="header__link" target="_blank" href="https://t.me/Abduvorisss">{{$t('Home')}}</a>
                        </li>
                        <li class="header__item">
                            <a class="header__link" target="_blank" href="https://t.me/Abduvorisss">{{$t('Us')}}</a>
                        </li>
                        <li class="header__item">
                            <a class="header__link" target="_blank" href="https://t.me/Abduvorisss">{{$t('Services')}}</a>
                        </li>
                        <li class="header__item">
                            <a class="header__link" target="_blank" href="https://t.me/Abduvorisss">{{$t('Contact')}}</a>
                        </li>
                    </ul>
                    <div class="header__buttons">
                        <button class="header__btn">{{ $t('buttons.book') }}</button>
                        <button @click="swichLang" class="header__btn-lang"> {{ locale }}</button>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>