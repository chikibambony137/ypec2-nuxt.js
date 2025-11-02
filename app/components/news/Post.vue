<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.description }}</p>
    <p>{{ post.image }}</p>
    <button @click="postStore.removePost(post.id)">Delete</button>
  </div>
</template>

<script setup>
import { usePostStore } from '../../stores/PostStore';

const postStore = usePostStore();
const props = defineProps(['post']);
const post = props.post;

</script>

<style scoped lang="scss">
@use '../../assets/var.scss';

.post {
    @include var.block;
}
</style>