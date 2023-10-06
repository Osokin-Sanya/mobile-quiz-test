import QuestionType from "../models/QuestionType";

const quizQuestions = [
  {
    id: 1,
    type: QuestionType.text,
    question: "Ваш пол:",
    answers: ["Мужчина", "Женщина"],
  },
  {
    id: 2,
    type: QuestionType.text,
    question: "укажите ваш возраст:",
    answers: ["До 18", "От 18 до 28", "от 29 до 35", "От 36"],
  },
  {
    id: 3,
    type: QuestionType.text,
    question: "Выберите лишнее:",
    answers: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
  },
  {
    id: 4,
    type: QuestionType.text,
    question: "Продолжите числовой ряд: 18 20 24 32",
    answers: ["62", "48", "74", "57", "60", "77"],
  },
  {
    id: 5,
    type: QuestionType.colors,
    question: "Выберите цвет, который сейчас наиболее Вам приятен:",
    answers: [
      "#A8A8A8",
      "#0000A9",
      "#00A701",
      "#F60100",
      "#FDFF19",
      "#A95403",
      "#000000",
      "#850068",
      "#46B3AC",
    ],
  },
  {
    id: 6,
    type: QuestionType.colors,
    question:
      "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
    answers: [
      "#A8A8A8",
      "#46B2AC",
      "#A95403",
      "#00A701",
      "#000000",
      "#F60100",
      "#850068",
      "#FDFF19",
      "#0000A9",
    ],
  },
  {
    id: 7,
    type: QuestionType.text,
    question: "Какой из городов лишний?",
    answers: ["Вашингтон", "Лондон", "Париж", "Нью-Йорк", "Москва", "Оттава"],
  },
  {
    id: 8,
    type: QuestionType.textImage,
    urlImage: "./img/test1.jpg",
    question: "Выберите правильную фигуру из четырёх пронумерованных.",
    answers: ["1", "2", "3", "4"],
  },
  {
    id: 9,
    type: QuestionType.text,
    question: "Вам привычнее и важнее:",
    answers: [
      "Наслаждаться каждой минутой проведенного времени",
      "Быть устремленными мыслями в будущее",
      "Учитывать в ежедневной практике прошлый опыт",
    ],
  },
  {
    id: 10,
    type: QuestionType.textImage,
    urlImage: "./img/prism.jpg",
    question:
      "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
    answers: [
      "Оно остроконечное",
      "Оно устойчиво",
      "Оно-находится в состоянии равновесия",
    ],
  },
  {
    id: 11,
    type: QuestionType.textImage,
    urlImage: "./img/test2.jpg",
    question: "Вставьте подходящее число",
    answers: ["34", "36", "53", "44", "66", "42"],
  },
];

export default quizQuestions;
