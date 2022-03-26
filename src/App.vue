<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
      <RouterView />
  </div>
</template>

<style scoped>
.header__logo {
  padding: 10px;
  text-align: center;
}
.header__logo img {
  padding-top: 10px;
  width: 140px;
}
@media screen and (min-width: 1024px) {
    .header__logo img {
    width: 300px;
  }
}
@media screen and (min-width: 768px) {
  .header__logo img {
    width: 250px;
  }
}
</style>