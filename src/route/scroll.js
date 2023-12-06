// Підключаємо технологію express для back-end сервера
const express = require("express");
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router();

const Test = require("../class/test");

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get("/", function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render("scroll", {
    // вказуємо назву контейнера
    name: "scroll",
    // вказуємо назву компонентів
    // component: ['heading'],

    // вказуємо назву сторінки
    title: "Scroll",
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  });
  // ↑↑ сюди вводимо JSON дані
});

// Підключаємо роутер до бек-енду
module.exports = router;
