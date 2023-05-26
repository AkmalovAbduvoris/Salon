<script setup>
import './Footer.css'

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__top-wrapper">
                    <img src="/public/img/logo.svg" alt="logo">
                    <div class="footer__top-l">
                        <p class="footer__text">Ready to get started?</p>
                        <button class="footer__btn">Get started</button>
                    </div>
                </div>
                <div class="footer__main__wrapper">
                    <div class="footer__inp-wrapper">
                        <p class="footer__inp-text">Subscribe to our newsletter</p>
                        <input class="footer__inp"  type="text" placeholder="Email address">
                        <button class="footer__inp-button">
                            <img src="/public/img/footerr__button.svg" alt="#">
                        </button>
                    </div>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <p class="footer__item-text">Services</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Email Marketing</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Campaigns</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Branding</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Offline</p>
                        </li>
                    </ul>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <p class="footer__item-text">About</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Our Story</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Benefits</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Team</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Careers</p>
                        </li>
                    </ul>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <p class="footer__item-text">Help</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">FAQs</p>
                        </li>
                        <li class="footer__item">
                            <p class="footer__item-text">Contact Us</p>
                        </li>
                    </ul>
                </div>
                <div class="footer__bottom-wrapper">
                    <div class="footer__text-wrapper">
                        <p class="footer__bottom-text">Terms & Conditions</p>
                        <p class="footer__bottom-text">Privacy Policy</p>
                    </div>
                    <div class="footer__icons">
                        <img class="footer__icon" src="/public/img/footer__facebook.svg" alt="facebook">
                        <img class="footer__icon" src="/public/img/footer__twitter.svg" alt="twitter">
                        <img class="footer__icon" src="/public/img/footer__instagram.svg" alt="instagram">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>