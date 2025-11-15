<template>
  <div class="post">
    <form class="post__form">
      <textarea
        class="post__textarea"
        v-if="post.isEdit"
        v-model="titleInput"
        ref="title"
        placeholder="Заголовок"
        maxlength="100" />

      <h3 class="post__title" v-else-if="post.title">{{ post.title }}</h3>

      <textarea
        class="post__textarea"
        v-if="post.isEdit"
        v-model="descriptionInput"
        placeholder="Описание"
        maxlength="500" />

      <p class="post__description" v-else-if="post.description">{{ post.description }}</p>

      <input v-if="post.isEdit" type="image" />
      <p class="post__image" v-else-if="post.image">{{ post.image }}</p>

      <div class="post__buttons">
        <button
          class="post__button post__button_edit"
          v-if="!post.isEdit"
          @click.prevent="editData">
          Редактировать
        </button>

        <button class="post__button post__button_save" v-else @click.prevent="saveData">
          Сохранить
        </button>

        <button
          class="post__button post__button_remove"
          @click.prevent="postStore.removePost(post.id)">
          Удалить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { usePostStore } from "#imports";
import { useTemplateRef } from "vue";

const postStore = usePostStore();

const props = defineProps(["post"]);
const post = props.post;

const titleInput = ref("");
const descriptionInput = ref("");

const saveData = () => {
  post.isEdit = !post.isEdit;
  postStore.savePostData(post.id, titleInput, descriptionInput);
};

const title = useTemplateRef("title");
const editData = () => {
  post.isEdit = !post.isEdit;

  titleInput.value = post.title;
  descriptionInput.value = post.description;
  // imageInput.value = post.image;

  setTimeout(() => {
    title.value.select();
  }, 100); // сразу не сработает
};
</script>

<style scoped lang="scss">
@use '../../../assets/var.scss';

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
  justify-content: end;
  gap: 20px;

  width: 100%;
}

.post__button {
  border: none;
  border-radius: 10px;

  font-family: var.$default-font-family;

  padding: 5px 15px;

  &:hover {
    background-color: rgb(40, 187, 167);
    color: white;
  }

  &:active {
    background-color: rgb(35, 162, 145);
  }
}

.post__button_remove {
  &:hover {
    background-color: rgb(255, 0, 0);
  }
}
</style>
