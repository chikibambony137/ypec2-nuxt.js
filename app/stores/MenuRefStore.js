import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuRefStore = defineStore("menuRefs", () => {
  const refs = ref({
    news: {
      id: 0,
      route: "/",
      img: "menu-icons/news.png",
      altImg: "news.png",
      title: "Новости",
    },

    abiturient: {
      id: 1,
      route: "/abiturient",
      img: "menu-icons/abitur.png",
      altImg: "abitur.png",
      title: "Абитуриенту",
    },

    teacher: {
      id: 2,
      route: "/teacher",
      img: "menu-icons/prepod.png",
      altImg: "prepod.png",
      title: "Преподавателю",
    },

    student: {
      id: 3,
      route: "/student",
      img: "menu-icons/stud.png",
      altImg: "stud.png",
      title: "Студенту",
    },

    about: {
      id: 4,
      route: "/about",
      img: "menu-icons/about.png",
      altImg: "about.png",
      title: "О колледже",
    },

    tech: {
      id: 5,
      route: "/tech",
      img: "menu-icons/tech.png",
      altImg: "tech.png",
      title: "Техническое отделение",
    },

    himtech: {
      id: 6,
      route: "/himtech",
      img: "menu-icons/himtech.png",
      altImg: "himtech.png",
      title: "Химико-технологическое отделение",
    },

    finprav: {
      id: 7,
      route: "/finprav",
      img: "menu-icons/finprav.png",
      altImg: "finprav.png",
      title: "Финансово-правовое отделение",
    },

    distance: {
      id: 8,
      route: "/distance",
      img: "menu-icons/zaoch.png",
      altImg: "zaoch.png",
      title: "Заочное отделение",
    },

    dpo: {
      id: 9,
      route: "/dpo",
      img: "menu-icons/dopobr.png",
      altImg: "dopobr.png",
      title: "Дополнительное образование",
    },

    professionalitet: {
      id: 10,
      route: "/professionalitet",
      img: "menu-icons/professionalitet.png",
      altImg: "professionalitet.png",
      title: "Профессионалитет",
    },

    workshops: {
      id: 11,
      route: "/workshops",
      img: "menu-icons/workshops.png",
      altImg: "workshops.png",
      title: "Мастерские",
    },
  });

  return {
    refs,
  };
});
