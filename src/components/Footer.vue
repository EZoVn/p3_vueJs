<template>
    <footer>
      <img src="../assets/img/ohmyfood@2x.svg" alt="logo du site en blanc" />
      <div class="contact">
        <p><i class="fas fa-utensils"></i>Proposer un restaurant</p>
        <p><i class="fas fa-hands-helping"></i>Devenir partenaire</p>
        <p>Mentions légales</p>
        <a href="mailto:contact@ohmyfood.fr">contact</a>
      </div>
    </footer>
</template>

<style scopped>

    footer {
        background: #353535;
        padding: 20px;
        color: #FFF;
        font-size: 14px;
        padding-bottom: 30px;
    }

    footer img {
        width: 90px;
        margin-bottom: 15px;
        -webkit-filter: invert(1);
                filter: invert(1);
    }
    .contact p i {
        width: 20px;
        font-size: 10px;
        padding-right: 10px;
    }
@media screen and (min-width: 768px) {
    footer img {
        width: 150px;
        margin: 0 0 30px 40%;
    }
    .contact {
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
        -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
        font-size: 18px;
    }
}
@media screen and (min-width: 1024px) {
  footer {
    padding-bottom: 45px;
  }
  footer img {
    margin: 30px 0;
  }
}
</style>