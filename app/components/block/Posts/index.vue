<template>
  <div class="posts">
    <button class="posts__addBttn" @click="addPost">Новый пост</button>

    <p v-if="postStore.postsVisuality.length == 0">Ничо нет D:</p>

    <BlockPostsPost v-for="post in postStore.postsVisuality" :key="post.id" :post>
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </BlockPostsPost>
  </div>
</template>

<script setup>
const postStore = usePostStore();

const addPost = () => {
  postStore.addPost();
};
</script>

<style scoped lang="scss">
@use "../../../assets/var.scss";

.posts {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  margin-top: 10px;
}

.posts__addBttn {
  @include var.block;
  font-family: var.$default-font-family;

  padding: 5px;

  &:hover {
    background-color: rgb(40, 187, 167);
    color: white;
  }

  &:active {
    background-color: rgb(35, 162, 145);
  }
}
</style>
