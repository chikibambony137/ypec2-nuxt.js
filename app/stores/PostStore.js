import { defineStore } from "pinia";
import { ref, onMounted } from "vue";

export const usePostStore = defineStore("posts", () => {
  const posts = ref([]);
  const postsVisuality = ref([]);

  const postsCount = computed(() => posts.value.length);

  const loadFromLocalStorage = () => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("posts");
      posts.value = raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("localStorage parse error", e);
    }
    postsVisuality.value = [...posts.value];
  };

  const updateLocalStorage = () => {
    localStorage.setItem("posts", JSON.stringify(posts.value));
  };

  const addPost = () => {
    posts.value.unshift({
      id: Date.now(),
      title: "",
      description: "",
      isEdit: true,
      image: null,
    });

    postsVisuality.value = [...posts.value];

  };

  const savePostData = (id, title, description) => {
    const post = posts.value.filter((post) => post.id == id)[0];

    post.title = title;
    post.description = description;

    updateLocalStorage();
  }

  const searchPost = (input) => {
    if (input == "") {
      postsVisuality.value = [...posts.value];
    } else {
      postsVisuality.value = [...posts.value].filter((post) =>
        post.title
          ?.toLowerCase()
          .includes(
            input.toLowerCase() ||
              post.description?.toLowerCase().includes(input.toLowerCase())
          )
      );
    }
  };

  const removePost = (id) => {
    posts.value = posts.value.filter((post) => post.id != id);
    updateLocalStorage();

    postsVisuality.value = postsVisuality.value.filter((post) => post.id != id);
  };

  onMounted(() => {
    loadFromLocalStorage();
  })

  return {
    posts,
    postsVisuality,
    postsCount,
    loadFromLocalStorage,
    addPost,
    savePostData,
    searchPost,
    removePost,
  };
});
