<template>
    <a href="#">
        <div class="menu__plat menu__plat--1">
            <div class="menu__plat--choix">
                <h3><slot name="titre"></slot></h3>
                <p><slot name="description"></slot>></p>
            </div>
            <p class="prix"><slot name="price"></slot></p>
            <div class="menu__plat--coche">
                <i class="test fas fa-check-circle"></i>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'Menu',
}
</script>

<style>
.menu__plat {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 2px 4px grey;
          box-shadow: 0px 2px 4px grey;
  opacity: 0;
  position: relative;
  overflow: hidden;
  -webkit-animation: effet-menu .6s ease-out forwards;
          animation: effet-menu .6s ease-out forwards;
}

.menu__plat--choix {
  overflow: hidden;
  white-space: nowrap;
}

.menu__plat--choix h3 {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu__plat--choix p {
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu__plat:hover > .menu__plat--coche {
  -webkit-animation: translate 600ms linear forwards;
          animation: translate 600ms linear forwards;
}

.menu__plat:hover > .menu__plat--coche > .test {
  -webkit-animation: plat 600ms linear forwards;
          animation: plat 600ms linear forwards;
}

.menu__plat:hover > .prix {
  -webkit-transform: translateX(-50px);
          transform: translateX(-50px);
  -webkit-transition: all 600ms linear;
  transition: all 600ms linear;
  margin-left: 50px;
}

.menu__plat--coche {
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  overflow: hidden;
  background-color: #99E2D0;
  padding: 19.9px;
  border-radius: 0 20px 20px 0;
}

.menu__plat--coche .test {
  color: white;
  font-size: 18px;
  text-align: center;
}

.menu__plat--1 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.menu__plat--2 {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}

.menu__plat--3 {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}

.menu__plat--4 {
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}

@media screen and (min-width: 768px) {

    .menu__plat {
    border-radius: 20px 50px 20px 20px;
    -webkit-animation: menu 600ms ease-in-out forwards;
            animation: menu 600ms ease-in-out forwards;
  }
  .menu__plat--1 {
    margin-right: -30px;
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }
  .menu__plat--2 {
    margin-right: -60px;
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }
  .menu__plat--3 {
    margin-right: -90px;
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
  }
  .menu__plat--4 {
    margin-right: -120px;
    -webkit-animation-delay: 1.2s;
            animation-delay: 1.2s;
  }
  .menu__plat:hover > .menu__plat--coche {
    -webkit-animation: translate-2 700ms linear forwards;
            animation: translate-2 700ms linear forwards;
  }
}
@media screen and (min-width: 1024px) {
    .menu__plat {
    border-radius: 20px;
    margin-right: 0px;
    margin-bottom: 20px;
    -ms-grid-column-align: left;
        justify-self: left;
  }
}
</style>