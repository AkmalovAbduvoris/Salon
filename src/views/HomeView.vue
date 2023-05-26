<script setup>
import FooterComp from '../components/Footer/FooterComp.vue';
import HeaderComp from '../components/Header/HeaderComp.vue';
import BestComp from '../components/Main/Best/BestComp.vue';
import HeroComp from '../components/Main/Hero/HeroComp.vue';
import BookComp from '../components/Main/Book/BookComp.vue';
import JoinComp from '../components/Main/Join/JoinComp.vue';
import ClientsComp from '../components/Main/Clients/ClientsComp.vue';
import WorkingComp from '../components/Main/Working/WorkingComp.vue';

</script>

<template>
  <HeaderComp />
  <main>
    <HeroComp />
    <BestComp />
    <BookComp />
    <WorkingComp />
    <ClientsComp />
    <JoinComp />
  </main>
  <FooterComp />
</template>
