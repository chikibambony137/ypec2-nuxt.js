<template>
  <div class="news">
    <div class="news__articles articles">
      <BlockSwap class="articles__swap"></BlockSwap>
      <BlockAd class="articles__ad"></BlockAd>
    </div>

    <div class="news__posts">
      <button @click="addPost">Add</button>
      <p v-if="postStore.postsVisuality.length == 0">Ничо нет D:</p>
      <NewsPost v-for="post in postStore.postsVisuality" :key="post.id" :post>
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </NewsPost>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "~/stores/PostStore";

const postStore = usePostStore();

const addPost = () => {
  postStore.addPost("Jopa", "hui", "pizda");
};
</script>

<style scoped lang="scss">
@use "../assets/var.scss";

.news {
  width: 100%;
}

.articles {
  display: flex;
  gap: 1vw;
  width: 100%;
}

.articles__ad {
  @media (max-width: 768px) {
    display: none;
  }
}

.news__posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  width: 100%;
  margin-top: 2vh;
}
</style>
