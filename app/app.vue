<template>
  <div class="app">
    <Header class="app__header" @toggleMenu="toggleMenu"></Header>

    <div class="app__content">

      <Menu class="app__menu_mobile" v-if="menuOpen" :class="{'app__menu_visible': menuStyleOpen}"></Menu>

      <Menu class="app__menu"></Menu>
      <div class="app__page">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from "vue";

const menuOpen = ref(false);
const menuStyleOpen = ref(false);

const toggleMenu = () => {
  if (!menuOpen.value) {
    menuOpen.value = true;           // элемент в DOM и display != none             // дождаться рендера
    setTimeout(() => (menuStyleOpen.value = true), 1);     // стартует transition -> transform
  } else {
    menuStyleOpen.value = false;     // запускаем скрывающий transition
    setTimeout(() => (menuOpen.value = false), 500); // after transition
  }
};
</script>

<style lang="scss">
@use "normalize.css";
@use "./assets/var.scss";

.app {
  font-size: var.$default-font-size;
}

.app__content {
  display: flex;
  gap: 1vw;
  padding: 10px 15px 10px 15px;

  max-width: 1200px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
}

.app__menu {
  width: 300px;
  height: min-content;
}

.app__menu_mobile {
  position: fixed;
  height: min-content;
  width: 50vw;
  min-width: 250px;

  transform: translateX(-300px);
  transition: all 0.5s ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }
}

.app__menu_visible {
  transition: all 0.5s ease-in-out;
  transform: translateX(0);
}

.app__page {
  display: flex;
  flex-grow: 1;
}

.header__menu-bttn {
  display: none;
}

@media (max-width: 1024px) {
  .app__menu {
    display: none;
  }

  .header__menu-bttn {
    display: flex;
  }
}

@media (max-width: 850px) {
  .app {
    font-size: var.$tablet-font-size;
  }
}

@media (max-width: 768px) {
  .app {
    font-size: var.$tablet-font-size - 1;
  }
}

@media (max-width: 480px) {
  .app {
    font-size: var.$mobile-font-size;
  }
}
</style>
