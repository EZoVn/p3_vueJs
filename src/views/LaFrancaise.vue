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
        <img src="../assets/img/laFrancaise.jpg" alt="Image a la Française" >
         <div class="section__hors-img">
            <div class="section__titre">
                <h1>A la Française</h1>
                <div class="card__text--heart">
                    <i class="card__text--vide far fa-heart"></i>
                    <i class="card__text--plein fas fa-heart"></i>
                </div>  
            </div>
            <div class="menuu">
                <div class="menu menu--1">
                    <h2>Entrées</h2>
                    <Menu>
                        <template #titre>Tartare de poulpe acidulé</template>
                        <template #description>Aux zests d'orange</template>
                        <template #price>25€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Velouté de légumes d'antan</template>
                        <template #description>Carotte, panais, topinambour</template>
                        <template #price>35€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Soupe à l'oignon</template>
                        <template #description>Revisitée</template>
                        <template #price>20€</template>
                    </Menu>
                </div>
                <div class="menu menu--2">
                    <h2>Plats</h2>
                    <Menu>
                        <template #titre>Coquilles Saint-Jacques</template>
                        <template #description>Accompagnées d'une purée de panais</template>
                        <template #price>40€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Magret de canard</template>
                        <template #description>Et parmentier de pommes de terres</template>
                        <template #price>35€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Pigeonneau d'Illes-et-Vilaine</template>
                        <template #description>Sur son lit de gnocchis aux légumes</template>
                        <template #price>44€</template>
                    </Menu>
                </div>
                <div class="menu menu--3">
                    <h2>Désserts</h2>
                    <Menu>
                        <template #titre>Pétales de violettes glacés</template>
                        <template #description>Et purée de noisettes</template>
                        <template #price>18€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Fondant au chocolat</template>
                        <template #description>Revisité</template>
                        <template #price>22€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Millefeuille croustillant</template>
                        <template #description>myrtilles et pâtes d'amande</template>
                        <template #price>23€</template>
                    </Menu>
                </div>
            </div>
        </div>
    </section>
    <Footer class="footer"/>
</template>