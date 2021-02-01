"use strict";
// 1
const lang = "ru";
const lang_arr = [''];


if (lang === "ru") {
  console.log('Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс');
} else if (lang == "en") {
  console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
} else {
  console.log("you switched the wrong way");
}

switch (lang) {
  case "ru":
    console.log('Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс');
    break;
  case "en":
    console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
    break;
  default:
    console.log("you switched the wrong way");
    break;
}

lang_arr['ru'] = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'];
lang_arr['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(lang_arr[lang]);

// 2
const namePerson = "Артём";

const school = (namePerson === "Артём") ? console.log("директор") :
  (namePerson === "Максим") ? console.log("преподаватель") : console.log("студент");