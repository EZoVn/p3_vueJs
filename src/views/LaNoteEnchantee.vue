<script setup>
    import Menu from '@/components/Menu.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
<header class="header-page">
            <a href="/" class="header__return"><i class="fas fa-arrow-left"></i></a>
            <a href="#"><img src="../assets/img/ohmyfood@2x.svg" alt="logo Oh my food"></a>
    </header>
    <section class="section">
        <img src="../assets/img/noteEnchantee.jpg" alt="Image la note enchantée" >
         <div class="section__hors-img">
            <div class="section__titre">
                <h1>La note enchantée</h1>
                <div class="card__text--heart">
                    <i class="card__text--vide far fa-heart"></i>
                    <i class="card__text--plein fas fa-heart"></i>
                </div>  
            </div>
            <div class="menuu">
                <div class="menu menu--1">
                    <h2>Entrées</h2>
                    <Menu>
                        <template #titre></template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                    <Menu>
                        <template #titre></template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                    <Menu>
                        <template #titre></template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                </div>
                <div class="menu menu--2">
                    <h2>Plats</h2>
                    <Menu>
                        <template #titre></template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                    <Menu>
                        <template #titre></template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                    <Menu>
                        <template #titre></template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                </div>
                <div class="menu menu--3">
                    <h2>Désserts</h2>
                    <Menu>
                        <template #titre></template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                    <Menu>
                        <template #titre></template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                    <Menu>
                        <template #titre>t</template>
                        <template #description></template>
                        <template #price>€</template>
                    </Menu>
                </div>
            </div>
        </div>
    </section>
    <Footer class="footer"/>
</template>