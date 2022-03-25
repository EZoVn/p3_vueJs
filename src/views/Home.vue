<template>
    <div class="home">
        <img src="../assets/logo.svg" alt="Logo">
        <!-- <Home /> -->
        <!-- <Footer /> -->
    </div>
</template>

<script>
//@ is an alias to /src
import Home from '@/components/Home.vue'
import Footer from '../components/Footer.vue'



export default {
    name: 'Home',
    components: {
        Home,
        Footer
    }
}
</script>
