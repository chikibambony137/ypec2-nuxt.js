<template>
  <div class="swap">
    <a class="swap__href" href="/professionalitet"><img class="swap__img" src="../../assets/prof-label.png" alt="swap"></img></a>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '../../assets/var.scss';

.swap {
    @include var.block;
    display: flex;
    flex-grow: 1;
    min-width: 150px;

    box-sizing: border-box;
    padding: 20px;
}

.swap__img {
  width: 90%;
  margin: auto;
}
</style>