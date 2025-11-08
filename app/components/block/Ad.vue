<template>
  <div class="ad">
    <a href="https://www.r-pharm.com/ru" class="ad__href"><img src="../../assets/r_farm.png" alt="r_farm" class="ad__img"></a>
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

.ad__href {
  width: 90%;
  margin: auto;
}

.ad__img {
  width: 100%;
}
</style>