<script setup>
  import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";
  // import { Home } from "@views/Home.vue";

</script>

<template>
  <div>
    <header>
      <div class="header__logo">
        <a href="/"><img src="./assets/img/ohmyfood@2x.svg" alt="logo Oh my food"/></a>
      </div>
    </header>
      <Home />
      <router-link to="/test">okok</router-link>
      <Footer />
  </div>
</template>
