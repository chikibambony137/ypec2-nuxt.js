<template>
  <nav class="menu">
    <a class="menu__ref" href="/"><img src="../assets/news.png" alt="news_img">Новости</a>
    <a class="menu__ref" href="/abiturient"><img src="../assets/abitur.png" alt="abitur_img">Абитуриентам</a>
    <a class="menu__ref" href="/teacher"><img src="../assets/prepod.png" alt="prepod_img">Преподавателям</a>
    <a class="menu__ref" href="/student"><img src="../assets/stud.png" alt="stud_img">Студентам</a>
    <a class="menu__ref" href="/about"><img src="../assets/about.png" alt="about_img">О колледже</a>
    <a class="menu__ref" href="/tech"><img src="../assets/tech.png" alt="tech_img">Техническое отделение</a>
    <a class="menu__ref" href="/himtech"><img src="../assets/himtech.png" alt="himtech_img">Химико-технологическое отделение</a>
    <a class="menu__ref" href="/finprav"><img src="../assets/finprav.png" alt="finprav_img">Финансово-правовое отделение</a>
    <a class="menu__ref" href="/distance"><img src="../assets/zaoch.png" alt="zaoch_img">Заочное отделение</a>
    <a class="menu__ref" href="/dpo"><img src="../assets/dopobr.png" alt="dopobr_img">Дополнительное образование</a>
    <a class="menu__ref" href="/professionalitet"><img src="../assets/professionalitet.png" alt="prof_img">Профессионалитет</a>
    <a class="menu__ref" href="/workshops"><img src="../assets/workshops.png" alt="workshops_img">Мастерские</a>
  </nav>
</template>

<script setup></script>

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
</style>
