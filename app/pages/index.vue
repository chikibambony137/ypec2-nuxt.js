<template>
  <div class="news">
    <h1 class="news__title">Новости</h1>

    <div class="news__articles articles">
      <BlockSwap class="articles__swap"></BlockSwap>
      <BlockAd class="articles__ad"></BlockAd>
    </div>

    <BlockPosts class="news__posts"> </BlockPosts>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@use "../assets/var.scss";

.news {
  width: 100%;
}

.news__title {
  font-family: var.$default-font-family;
  font-size: 1.5rem;
  margin-left: 20px;
}

.articles {
  display: flex;
  gap: 10px;
  width: 100%;
}

.articles__ad {
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
