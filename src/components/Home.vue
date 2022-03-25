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

        <a href="/LaPaletteDuGout">
            <Card>
                <template #image>
                    <img src="../assets/img/paletteDuGout.jpg" alt="Restaurant la palette du goût">
                </template>
                <template #name>La palette du goût</template>
                <template #description>Ménilmontant</template>
            </Card>
        </a>
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
        <a href="/LaNoteEnchantée">
            <Card>
                <template #image>
                    <img src="../assets/img/noteEnchantee.jpg" alt="Restaurant la note enchantée">
                </template>
                <template #name>La note enchantée</template>
                <template #description>Charonne</template>
            </Card>
        </a>
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
        <a href="ALaFrancaise">
            <Card>
                <template #image>
                    <img src="../assets/img/laFrancaise.jpg" alt="Restaurant a la Française">
                </template>
                <template #name>A la Française</template>
                <template #description>Cité Rouge</template>
            </Card>            
        </a>
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
        <a href="LesDélicesDeSens">
            <Card>
                <template #image>
                    <img src="../assets/img/deliceDesSens.jpg" alt="Restaurant les délices de sens">
                </template>
                <template #name>Les délices de sens</template>
                <template #description>Folie-méricourt</template>
            </Card>
        </a>    
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
}
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
