<template>
  <div class="menu-bttn">
    <label class="menu-bttn__burger" for="burger">
      <input type="checkbox" id="burger" v-model="menuOpen"/>
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
const menuOpen = ref(false);

const emit = defineEmits(['toggleMenu']);

watch(menuOpen, () => emit('toggleMenu'));

</script>

<style scoped lang="scss">
.menu-bttn__burger {
  position: relative;
  width: 30px;
  height: 23px;
  background: transparent;
  cursor: pointer;
  display: block;

  &:hover {
    span {
      background-color: rgb(186, 186, 186);
    }
  };

  &:active {
    span {
      background-color: rgb(157, 157, 157);
    }
  }
}

.menu-bttn__burger input {
  display: none;
}

.menu-bttn__burger span {
  display: block;
  position: absolute;
  height: 3.7px;
  width: 100%;
  background: rgb(230, 227, 227);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.menu-bttn__burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.menu-bttn__burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.menu-bttn__burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.menu-bttn__burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: -2px;
  left: 5px;
}

.menu-bttn__burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.menu-bttn__burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 20px;
  left: 5px;
}
</style>
