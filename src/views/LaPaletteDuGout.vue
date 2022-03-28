<script setup>
    import Menu from '@/components/Menu.vue';
    import Footer from '../components/Footer.vue';
</script>
<script>

  </script>
<template>
    <header class="header-page">
            <a href="/" class="header__return"><i class="fas fa-arrow-left"></i></a>
            <a href="#"><img src="../assets/img/ohmyfood@2x.svg" alt="logo Oh my food"></a>
    </header>
    <section class="section">
        <img src="../assets/img/paletteDuGout.jpg" alt="Image la palette du gout" >
         <div class="section__hors-img">
            <div class="section__titre">
                <h1>La palette du goût</h1>
                <div class="card__text--heart">
                    <i class="card__text--vide far fa-heart"></i>
                    <i class="card__text--plein fas fa-heart"></i>
                </div>  
            </div>
            <div class="menuu">
                <div class="menu menu--1">
                    <h2>Entrées</h2>

                    <Menu>
                        <template #titre>Fricassée d'escargot</template>
                        <template #description>Au piment d'Espelette</template>
                        <template #price>25€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Foie gras de canard mi-cuit</template>
                        <template #description>Et ses copeaux de truffe noire</template>
                        <template #price>35€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Oeuf au plat</template>
                        <template #description>Assaisonné à la truffe sur lit de caviar</template>
                        <template #price>20€</template>
                    </Menu>
                </div>
                <div class="menu menu--2">
                    <h2>Plats</h2>
                    <Menu>
                        <template #titre>Filet de boeuf aux herbes</template>
                        <template #description>Accompagné de sa ribambelle de légumes</template>
                        <template #price>40€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Parmentier de queue de boeuf</template>
                        <template #description>À la truffe noire sur sa purée de panais</template>
                        <template #price>35€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Filet de turbot</template>
                        <template #description>Aux agrumes</template>
                        <template #price>20€</template>
                    </Menu>
                </div>
                <div class="menu menu--3">
                    <h2>Désserts</h2>
                    <Menu>
                        <template #titre>Paris-Brest</template>
                        <template #description>Revisité</template>
                        <template #price>18€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Macaron au chocolat d'exception</template>
                        <template #description>Et glace à la vanille de Madagascar</template>
                        <template #price>22€</template>
                    </Menu>
                    <Menu>
                        <template #titre>Mousse au chocolat</template>
                        <template #description>Au piment d'Espelette et à la truffe noire</template>
                        <template #price>23€</template>
                    </Menu>
                </div>
            </div>
        </div>
    </section>
    <Footer class="footer"/>
</template>



<style >
/* scoped permet de mettre du style uniquement sur ce component */
.menu h2 {
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-right: 290px;
}

.menu h2 span {
  position: absolute;
  width: 50px;
  border-top: 3px solid #FF79DA;
}
section {
  background: #f6f6f6;
  padding: 10px;
  gap: 10px;
}

section h2 {
  font-size: 20px;
  font-weight: bold;
}
.section {
  clear: both;
  padding: 0;
}

.section img {
  width: 100%;
  height: 250px;
  -o-object-fit: cover;
     object-fit: cover;
  position: absolute;
}

.section__hors-img {
  position: relative;
  bottom: -200px;
  background: #f6f6f6;
  padding: 20px;
  border-radius: 20px 20px 0 0;
}

.section__titre {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 24px;
  padding-bottom: 10px;
}

.section__titre h1 {
  font-family: 'Shrikhand', cursive;
  font-size: 26px;
}
.header-page {
  text-align: center;
}

.header-page a i {
  font-size: 18px;
  float: left;
  margin-top: 12px;
  margin-left: 10px;
}

.header-page img {
  margin: auto;
  padding-top: 10px;
  width: 140px;
}
@media screen and (min-width: 768px) {

  
  .menu {
    margin: 10px;
  }
  .menu--1 {
    margin-right: 350px;
  }
  .menu--2 {
    margin-right: 240px;
  }
  .menu--3 {
    margin-right: 130px;
  }
  .section__titre h1 {
    margin-left: 20px;
  }
  .section__hors-img i {
    font-size: 28px;
    margin-right: 30px;
  }
  .header-page a i {
    font-size: 22px;
    margin-top: 20px;
    margin-left: 15px;
  }
  .header-page img {
    width: 250px;
  }
}
@media screen and (min-width: 1024px) {
  .section img {
    height: 350px;
  }
  .section__hors-img {
    bottom: -300px;
    gap: 20px;
  }
}
</style>
