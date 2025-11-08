<template>
  <header class="header">
    <div class="header__content">
      <div class="header__title-wrapper">
        <a href="/">
          <img
            class="header__logo"
            src="../assets/logo2.png"
            draggable="false" />
        </a>
        <a href="/">
          <div class="header__title">
            <h1 class="header__h1">
              Ярославский промышленно-<br />экономический колледж
            </h1>
            <h3 class="header__h3">имени Н. П. Пастухова</h3>
          </div>
        </a>
      </div>

      <div class="header__refs-wrapper">
        <div class="header__refs refs">
          <p>
            <a class="refs__ref" @click="$router.push('/cabinets')">Кабинеты</a>
          </p>
          <p>
            <a class="refs__ref" @click="$router.push('/teacher-rasp')"
              >Преподавателю</a
            >
          </p>
          <p>
            <a class="refs__ref" @click="$router.push('/rasp')">Расписание</a>
          </p>
          <p>
            <a class="refs__ref" @click="$router.push('/zameni')">Замены</a>
          </p>
        </div>

        <ButtonMenu class="header__menu-bttn" @toggleMenu="emit('toggleMenu')"></ButtonMenu>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['toggleMenu']);
</script>

<style scoped lang="scss">
@use "../assets/var.scss";

.header {
  display: flex;

  width: 100%;
  height: 80px;

  padding: 2px 15px 2px 15px;

  font-family: var.$default-font-family;
  color: white;

  box-sizing: border-box;
  background: var.$linear-color;
}

.header__content {
  display: flex;
  gap: 1vw;

  justify-content: space-between;
  align-items: center;

  max-width: 1170px;
  width: 100%;
  margin: auto;
}

.header__title-wrapper {
  display: flex;
  gap: 1vw;

  user-select: none;
  cursor: pointer;

  a {
    all: unset;
    margin: 0;
    padding: 0;
  }
}

.header__title {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  min-width: 220px;
}

.header__logo {
  height: 4em;
  width: 4em;
}

.header__h1 {
  font-size: 1.2em;
  margin: 0;
}

.header__h3 {
  font-size: 0.8em;
  margin: 4px 0 0 0;
  font-weight: 400;
}

.header__refs-wrapper {
  display: flex;
  gap: 1vw;
}

.header__refs {
  display: flex;
  gap: 1vw;
  min-width: 100px;
  flex-wrap: wrap;

  p {
    margin: 0;
  }
}

.refs__ref {
  font-size: 0.9em;

  cursor: pointer;
  user-select: none;

  &:hover {
    color: rgb(223, 223, 223);
  };

  &:active {
    color: rgb(190, 190, 190);
  };
}

.header__menu-bttn {
  margin-left: 10px;
}

@media (max-width: 532px) {
  .header__refs {
    display: none;
  }
}
</style>
