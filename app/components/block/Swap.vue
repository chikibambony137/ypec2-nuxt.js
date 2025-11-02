<template>
  <div class="swap">
    123
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
}
</style>