<script setup>
import './Clients.css'

function bosildi(){

}
</script>
<template>
    <section class="clients">
        <div class="container">
            <div class="clients__wrapper">
                <div class="clients__left-wrapper">
                    <p class="clients__text">{{$t('clients__text')}}</p>
                    <h2 class="clients__title">{{$t('clients__title')}}</h2>
                    <p class="clients__description">{{$t('clients__description')}}</p>
                    <button class="clients__btn">{{$t('buttons.give')}}</button>
                </div>
                <div class="clients__right-wrapper">
                    <ul class="clients__list">
                        <li class="clients__item">
                            <img src="/public/img/clients__item-Usman.png" width="80" height="80" alt="user">
                            <p class="clients__item-text">{{$t('clients__item-text')}}</p>
                            <!-- INPUT CHEKBOX -->
                            <div class="stars">
                                <img @click="bosildi" src="/public/img/star.svg" width="20" height="23" alt="star">
                                <img @click="bosildi" src="/public/img/star.svg" width="20" height="23" alt="star">
                                <img @click="bosildi" src="/public/img/star.svg" width="20" height="23" alt="star">
                                <img @click="bosildi" src="/public/img/starno.svg" width="20" height="23" alt="star">
                                <img @click="bosildi" src="/public/img/starno.svg" width="20" height="23" alt="star">
                            </div>
                            <b class="clients__item-name">Umar Usman</b>
                            <p class="clients__item-info">{{$t('clients__item-info')}}</p>
                        </li>
                        <li class="clients__item">
                            <img src="/public/img/clients__item-Khalil.png" width="80" height="80" alt="user">
                            <p class="clients__item-text">{{$t('clients__item-text')}}</p>
                            <!-- INPUT CHEKBOX -->
                            <div class="stars">
                                <img @click="bosildi" src="/public/img/star.svg" width="20" height="23" alt="star">
                                <img @click="bosildi" src="/public/img/star.svg" width="20" height="23" alt="star">
                                <img @click="bosildi" src="/public/img/star.svg" width="20" height="23" alt="star">
                                <img @click="bosildi" src="/public/img/star.svg" width="20" height="23" alt="star">
                                <img @click="bosildi" src="/public/img/starno.svg" width="20" height="23" alt="star">
                            </div>
                            <b class="clients__item-name">Rabia Khalil</b>
                            <p class="clients__item-info">{{$t('clients__item-info')}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>