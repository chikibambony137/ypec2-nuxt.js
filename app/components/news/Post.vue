<template>
  <div class="post">
    <form class="post__form">
      <textarea
        class="post__textarea"
        v-if="!post.title || post.isEdit"
        v-model="titleInput"
        placeholder="Заголовок"
        maxlength="100" />

      <h3 class="post__title" v-else>{{ post.title }}</h3>

      <textarea
        class="post__textarea"
        v-if="!post.description || post.isEdit"
        v-model="descriptionInput"
        placeholder="Описание"
        maxlength="500" />

      <p class="post__description" v-else>{{ post.description }}</p>

      <input v-if="post.isEdit" type="image" />
      <p class="post__image">{{ post.image }}</p>

      <div class="post__buttons">
        
        <button class="post__editBttn" v-if="!post.isEdit" @click.prevent="post.isEdit = !post.isEdit">
          Редактировать
        </button>

        <button class="post__saveBttn" v-else @click.prevent="saveData">
          Сохранить
        </button>

        <button class="post__removeBttn" @click.prevent="postStore.removePost(post.id)">
          Удалить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { usePostStore } from "../../stores/PostStore";

const postStore = usePostStore();
const props = defineProps(["post"]);
const post = props.post;

const titleInput = ref("");
const descriptionInput = ref("");

const saveData = () => {
  post.isEdit = !post.isEdit;
  postStore.savePostData(post.id, titleInput, descriptionInput);
};
</script>

<style scoped lang="scss">
@use "../../assets/var.scss";

.post {
  @include var.block;

  padding: 20px;

  font-family: var.$default-font-family;
}

.post__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.post__textarea {
  max-width: 700px;
  word-wrap: break-word;
  resize: none;
  height: auto;

  border: 0;
  outline: 0;

  width: 100%;
}

.post__title {
  margin: 0;
  font-weight: 700;
  font-size: 1.2rem;

  max-width: 800px;
  word-wrap: break-word;
}

.post__description {
  max-width: 800px;
  word-wrap: break-word;
}

.post__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
}
</style>
