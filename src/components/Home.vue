<script setup>
import Card from './Card.vue'
</script>

<script>
export default {
    components: {
        Card,
    }
}
</script>

<template>
    <div>  
        <header class="header">           
            <div class="header__loc">
                <i class="fas fa-map-marker-alt"></i>
                <input type="search" name="recherche" placeholder="Paris, Belleville">
            </div>
            <div class="header__slogan">
                <h2>Réservez le menu qui vous convient</h2>
                <p>Découvrez des restaurants d'exception, séléctionnés par nos soins</p>
                <a href="#restaurants" id="explore" class="header__slogan--explore">Explorer nos restaurants</a>
            </div>
            <nav class="nav">
                <h2>Fonctionnement</h2>
                <div class="nav__lien nav__lien--1">
                    <p>1</p>
                    <i class="fas fa-mobile-alt"></i>
                    <a href="#">Choisissez un restaurant</a>
                </div>
                <div class="nav__lien nav__lien--2">
                    <p>2</p>
                    <i class="fas fa-list-ul"></i>
                    <a href="#">Composez votre menu</a>
                </div>
                <div class="nav__lien nav__lien--3">
                    <p>3</p>
                    <i class="fas fa-store"></i>
                    <a href="#">Dégustez au restaurant</a>
                </div>
            </nav>
        </header>

        <section id="restaurant">
            <h2>Restaurants</h2>
            <RouterLink to="/LaPaletteDuGout">
                <Card>
                    <template #image>
                        <img src="../assets/img/paletteDuGout.jpg" alt="Restaurant la palette du goût">
                    </template>
                    <template #name>La palette du goût</template>
                    <template #description>Ménilmontant</template>
                </Card>
            </RouterLink>
                <!-- <div class="card card--1">
                    <a href="la_palette_du_gout.html">
                        <img src="../assets/img/paletteDuGout.jpg" alt="photo de plat, la palette du goût">
                        <p class="card__nouveau">Nouveau</p>
                        <div class="card__text">
                            <div>
                                <h3>La palette du goût</h3>
                                <p>Ménilmontant</p>
                            </div>
                            <div class="card__text--heart">
                                <i class="card__text--vide far fa-heart"></i>
                                <i class="card__text--plein fas fa-heart"></i>
                            </div>
                        </div>
                    </a>
                </div> -->
            <RouterLink to="/LaNoteEnchantée">
                <Card>
                    <template #image>
                        <img src="../assets/img/noteEnchantee.jpg" alt="Restaurant la note enchantée">
                    </template>
                    <template #name>La note enchantée</template>
                    <template #description>Charonne</template>
                </Card>
            </RouterLink>
                <!-- <div class="card card--2">
                    <a href="la_note_enchante.html">
                        <img src="../assets/img/noteEnchantee.jpg" alt="photo de plat, la note enchantée">
                        <p class="card__nouveau">Nouveau</p>
                        <div class="card__text">
                            <div>
                                <h3>La note enchantée</h3>
                                <p>Charonne</p>
                            </div>
                            <div class="card__text--heart">                        
                                <i class="card__text--vide far fa-heart"></i>
                                <i class="card__text--plein fas fa-heart"></i>
                            </div>
                        </div>
                    </a>
                </div> -->
            <RouterLink to="/LaFrancaise">
                <Card>
                    <template #image>
                        <img src="../assets/img/laFrancaise.jpg" alt="Restaurant a la Française">
                    </template>
                    <template #name>A la Française</template>
                    <template #description>Cité Rouge</template>
                </Card>            
            </RouterLink>
                <!-- <div class="card card--3">
                    <a href="a_la_francaise.html">
                        <img src="../assets/img/laFrancaise.jpg" alt="photo de plat, à la française">
                        <div class="card__text">
                            <div>
                                <h3>À la française</h3>
                                <p>Cité Rouge</p> 
                            </div>
                            <div class="card__text--heart">                        
                                <i class="card__text--vide far fa-heart"></i>
                                <i class="card__text--plein fas fa-heart"></i>
                            </div>
                        </div>
                    </a>
                </div> -->
            <RouterLink to="/LesDelicesDeSens">
                <Card>
                    <template #image>
                        <img src="../assets/img/deliceDesSens.jpg" alt="Restaurant les délices de sens">
                    </template>
                    <template #name>Les délices de sens</template>
                    <template #description>Folie-méricourt</template>
                </Card>
            </RouterLink> 
        </section>

            <!-- <div class="card card--4">
                <a href="le_delice_des_sens.html">
                    <img src="../assets/img/deliceDesSens.jpg" alt="photo de plat, le délice des sens">
                    <div class="card__text">
                        
                        <div>
                            <h3>Le délice des sens</h3>
                            <p>Folie-méricourt</p>
                        </div>
                        <div class="card__text--heart">                    
                            <i class="card__text--vide far fa-heart"></i>
                            <i class="card__text--plein fas fa-heart"></i>
                        </div>
                    </div>
                </a>
            </div> -->
    </div>
</template>

<style>
.header {
  text-align: center;
}
.header__loc i {
  padding-left: 40px;
}

.header__loc input {
  font-weight: 500;
  border: none;
  background: inherit;
}

.header__slogan {
  background: #f6f6f6;
  padding: 0 30px 70px;
  margin-bottom: 50px;
}

.header__slogan h2 {
  font-size: 24px;
  padding: 30px 0 10px 0;
  margin: 0 20px;
  font-weight: bold;
}

.header__slogan p {
  padding-bottom: 30px;
  color: #656565;
}

.header__slogan--explore {
  border-radius: 25px;
  padding: 15px 20px;
  color: #FFF;
  background: -webkit-gradient(linear, left top, right bottom, from(#FF79DA), to(#9356DC));
  background: linear-gradient(to bottom right, #FF79DA, #9356DC);
  -webkit-box-shadow: 0px 2px 4px grey;
          box-shadow: 0px 2px 4px grey;
}

.header__slogan--explore:hover {
  cursor: pointer;
  -webkit-box-shadow: 2px 2px 4px grey;
          box-shadow: 2px 2px 4px grey;
  -webkit-transition: all 1s;
  transition: all 1s;
  -webkit-transform: scale(1.15);
          transform: scale(1.15);
}
.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-align: start;
  margin: 20px;
  gap: 20px;
}

.nav h2 {
  margin: 0 -10px;
  font-size: 24px;
  font-weight: bold;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.nav__lien {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-shadow: 2px 2px 5px #e5e5e5;
          box-shadow: 2px 2px 5px #e5e5e5;
  border-radius: 20px;
  gap: 10px;
  padding: 20px;
  background: #f6f6f6;
  position: relative;
}

.nav__lien p {
  position: absolute;
  font-size: 12px;
  border: 2px solid #9356DC;
  border-radius: 25px;
  padding: 1px 5px;
  background: #9356DC;
  color: #FFF;
  margin: 0 10px;
  left: -20px;
  -webkit-transition: -webkit-transform 500ms ease-in-out;
  transition: -webkit-transform 500ms ease-in-out;
  transition: transform 500ms ease-in-out;
  transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;
}

.nav__lien i {
  color: #888888;
  padding: 0 15px;
}

.nav__lien a {
  font-weight: 500;
}

.nav__lien:hover {
  cursor: pointer;
  color: #9356DC;
  background-color: #e4d5f6;
  -webkit-box-shadow: 2px 2px 5px grey;
          box-shadow: 2px 2px 5px grey;
}

.nav__lien:hover p {
  -webkit-transform: scale(1.2) translateX(5px);
          transform: scale(1.2) translateX(5px);
}

.nav__lien:hover i {
  color: #9356DC;
}

.nav__lien:hover a {
  color: #000;
}

@media screen and (min-width: 768px) {
.header__loc i {
    font-size: 20px;
  }
  .header__loc input {
    padding: 10px;
  }
  .nav {
    margin: 30px 80px;
  }
  .nav__lien {
    margin: 0 50px;
    padding: 20px 30px;
  }
  .nav__lien p {
    font-size: 16px;
    padding: 0px 5px;
  }
  .nav__lien i {
    font-size: 22px;
  }
  .nav__lien a {
    font-size: 22px;
  }
  section h2 {
    font-size: 24px;
    margin: 0 30px;
  }
  
}

@media screen and (min-width: 1024px) {
  .card--1 {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 2;
    grid-row: 2;
  }
  .card--2 {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 2;
    grid-row: 2;
  }
  .card--3 {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 3;
    grid-row: 3;
  }
  .card--4 {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 3;
    grid-row: 3;
  }
  .header__loc i {
    font-size: 20px;
  }
  .header__loc input {
    padding: 10px;
  }
  .header__slogan {
    margin-bottom: 0;
  }
  .header__slogan h2 {
    font-size: 32px;
  }
  .header__slogan p {
    font-size: 20px;
  }
  .header__slogan--explore {
    font-size: 24px;
  }
  .header__slogan--explore:hover {
    color: #301255;
    font-weight: bold;
    -webkit-transition: all 600ms ease-in-out;
    transition: all 600ms ease-in-out;
  }
  .nav {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto;
        grid-template-columns: auto;
    -ms-grid-rows: auto;
        grid-template-rows: auto;
    margin: 30px 0;
  }
  .nav h2 {
    color: #292828;
    font-size: 28px;
    margin: auto;
    border-bottom: 2px solid #9356DC;
    margin-left: 35px;
  }
  .nav__lien {
    -webkit-box-shadow: 2px 2px 5px #9356DC;
            box-shadow: 2px 2px 5px #9356DC;
    margin: 0 50px;
    padding: 20px 30px;
  }
  .nav__lien--1 {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 2;
    grid-row: 2;
  }
  .nav__lien--2 {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 2;
    grid-row: 2;
  }
  .nav__lien--3 {
    -ms-grid-column: 3;
    grid-column: 3;
    -ms-grid-row: 2;
    grid-row: 2;
  }
  .nav__lien p {
    font-size: 16px;
    padding: 0px 5px;
  }
  .nav__lien i {
    font-size: 22px;
  }
  .nav__lien a {
    font-size: 22px;
  }
  #restaurants {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto;
        grid-template-columns: auto;
    -ms-grid-rows: auto;
        grid-template-rows: auto;
  }
  #restaurants h2 {
    border-bottom: 2px solid #9356DC;
    font-size: 28px;
    margin: auto;
    margin-left: 25px;
  }
}

</style>
