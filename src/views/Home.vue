<script setup>
//@ is an alias to /src
import Home from '@/components/Home.vue'
import Footer from '../components/Footer.vue'

</script>
<template>
    <div class="home">
        <div class="header__logo">
            <a href="#"><img src="../assets/img/ohmyfood@2x.svg" alt="logo Oh my food"></a>
        </div>
        <!-- <img src="../assets/logo.svg" alt="Logo"> -->
        <Home />
        <Footer />
    </div>
</template>

<style>
.header__logo {
    text-align: center;
}    
</style>