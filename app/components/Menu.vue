<template>
  <nav class="menu">
    <p><a class="menu__ref" href="/">Новости</a></p>
    <p><a class="menu__ref" href="/abiturient">Абитуриентам</a></p>
    <p><a class="menu__ref" href="/teacher">Преподавателям</a></p>
    <p><a class="menu__ref" href="/student">Студентам</a></p>
    <p><a class="menu__ref" href="/about">О колледже</a></p>
    <p><a class="menu__ref" href="/tech">Техническое отделение</a></p>
    <p><a class="menu__ref" href="/himtech">Химико-технологическое отделение</a></p>
    <p><a class="menu__ref" href="/finprav">Финансово-правовое отделение</a></p>
    <p><a class="menu__ref" href="/distance">Заочное отделение</a></p>
    <p><a class="menu__ref" href="/dpo">Дополнительное образование</a></p>
    <p><a class="menu__ref" href="/professionalitet">Профессионалитет</a></p>
    <p><a class="menu__ref" href="/workshops">Мастерские</a></p>
  </nav>
</template>

<script setup></script>

<style scoped lang="scss">
@use "../assets/var.scss";

.menu {
  @include var.block;

  cursor: default;
  user-select: none;

  font-family: var.$default-font-family;
}
</style>
