<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";
  // import { Home } from "@views/Home.vue";

</script>

<template>
  <div>
    <!-- <header>
      <div class="header__logo">
        <a href="/"><img src="./assets/img/ohmyfood@2x.svg" alt="logo Oh my food"/></a>
      </div>
    </header> -->
      <Home />
      <RouterLink to="/LaPaletteDuGout">La palette du gout</RouterLink>
      <Footer />
      <RouterView />
  </div>
</template>

<style scoped>
.header__logo {
  padding: 10px;
  text-align: center;
}
.header__logo img {
  padding-top: 10px;
  width: 140px;
}
@media screen and (min-width: 1024px) {
    .header__logo img {
    width: 300px;
  }
}
@media screen and (min-width: 768px) {
  .header__logo img {
    width: 250px;
  }
}
</style>