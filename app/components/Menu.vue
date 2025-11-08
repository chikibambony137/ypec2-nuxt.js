<template>
  <nav class="menu">
    <a
      class="menu__ref"
      v-for="ref in menuRefStore.refs"
      :key="ref.id"
      @click="routeTo($event, ref.route, ref.img)"
      ><img :src="ref.img" :alt="ref.altImg" />{{ ref.title }}</a
    >
  </nav>
</template>

<script setup>
const menuRefStore = useMenuRefStore();

const emit = defineEmits(["closeMenu"]);

const router = useRouter();
const routeTo = (e, to) => {
  emit("closeMenu");

  router.push(to);

  // style
  const refs = document.querySelectorAll(".menu__ref");
  refs.forEach((ref) => ref.classList.remove("menu__ref_highlight"));
  e.target.classList.add("menu__ref_highlight");
};
</script>

<style scoped lang="scss">
@use "../assets/var.scss";

.menu {
  @include var.block;

  padding: 20px 10px;

  cursor: default;
  user-select: none;

  font-family: var.$default-font-family;
}

.menu__ref {
  all: unset;

  display: flex;
  align-items: center;
  gap: 0.5vw;

  margin-bottom: 10px;

  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: rgb(19, 176, 147);
  }
}

.menu__ref_highlight {
  color: rgb(19, 176, 147);
}
</style>
