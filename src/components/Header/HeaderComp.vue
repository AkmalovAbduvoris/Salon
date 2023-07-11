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
                            <router-link class="header__link" target="_blank" to="https://t.me/Abduvorisss">{{$t('Home')}}</router-link>
                        </li>
                        <li class="header__item">
                            <router-link class="header__link" target="_blank" to="https://t.me/Abduvorisss">{{$t('Us')}}</router-link>
                        </li>
                        <li class="header__item">
                            <router-link class="header__link" target="_blank" to="https://t.me/Abduvorisss">{{$t('Services')}}</router-link>
                        </li>
                        <li class="header__item">
                            <router-link class="header__link" target="_blank" to="https://t.me/Abduvorisss">{{$t('Contact')}}</router-link>
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