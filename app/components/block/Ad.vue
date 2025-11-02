<template>
  <div class="ad">
    12345
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
}
</style>