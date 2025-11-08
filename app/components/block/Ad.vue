<template>
  <div class="ad">
    <img src="../../assets/r_farm.png" alt="r_farm" class="ad__img">
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '../../assets/var.scss';

.ad {
    @include var.block;
    display: flex;
    width: 300px;

    padding: 0px 20px;
}

.ad__img {
  width: 90%;
  margin: auto;
}
</style>