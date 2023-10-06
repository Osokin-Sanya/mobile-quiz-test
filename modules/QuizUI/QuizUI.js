import AnswersSection from "./AnswersSection";
import QuizApp from "../QuizApp";

export default class QuizUI {
  constructor(rootElement, onClickNext = () => {}) {
    this.root = rootElement;
    this.onClickNext = onClickNext;

    this.progressBarElement = null;
    this.questionElement = null;
    this.answers = null;
    this.nextButtonElement = null;

    this.selectedAnswer = null;

    this.#init();
  }

  #init() {
    this.#initProgressBar();
    this.#initQuestionSection();
    this.#initAnswersSection();
    this.#initNextButton();
  }

  #initProgressBar() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("progress-block");

    const container = document.createElement("div");
    container.classList.add("progress-container");

    const bar = document.createElement("div");
    bar.classList.add("progress-bar");
    bar.id = `progress-bar-${+new Date()}`; // Create new id

    wrapper.appendChild(container);
    container.appendChild(bar);

    this.root.appendChild(wrapper);
    this.progressBarElement = bar;
  }

  #initQuestionSection() {
    const question = document.createElement("div");
    question.classList.add("question-div");

    this.root.appendChild(question);
    this.questionElement = question;
  }

  #initNextButton() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrappe-button");

    const button = document.createElement("button");
    button.classList.add("button", "button-quiz__disabled");
    button.textContent = "далее";

    button.addEventListener("click", () => {
      this.onClickNext(this.selectedAnswer),
        button.classList.add("button-quiz__disabled"),
        button.classList.remove("button-quiz__enabled");
    });

    wrapper.appendChild(button);
    this.root.appendChild(wrapper);
    this.nextButtonElement = button;
  }

  #initAnswersSection() {
    const content = document.createElement("div");
    content.classList.add("content-block");

    this.root.appendChild(content);

    this.answers = new AnswersSection(content, (selectedValue) => {
      this.selectedAnswer = selectedValue;
      this.#updateNextButton();
    });
  }

  #updateProgressBar(value) {
    this.progressBarElement.style.width = `${Number(value)}%`;
  }

  #updateQuestionSection(value) {
    this.questionElement.textContent = value;
  }

  #updateAnswersSection(type, values, image) {
    this.answers.update(type, values, image);
  }

  #updateNextButton() {
    if (!!this.selectedAnswer) {
      this.nextButtonElement.classList.add("button-quiz__enabled");
      this.nextButtonElement.classList.remove("button-quiz__disabled");
    }
  }

  update({ progress, question, type, answers, urlImage }) {
    this.#updateProgressBar(progress);
    this.#updateQuestionSection(question);
    this.#updateAnswersSection(type, answers, urlImage);
  }

  renderSummarizing(results) {
    this.root.innerHTML = "";
    const headerText = document.querySelector(".header-information p");
    headerText.classList.add("header-text-result");
    headerText.textContent = "ГОТОВО!";

    const timer = document.createElement("div");
    const timerText = document.createElement("div");
    const blockButtonResult = document.createElement("div");
    const textResultButton = document.createElement("div");
    const blockItemsBottum = document.createElement("div");
    const blockTimer = document.createElement("div");
    const text1 = document.createElement("div");
    const text2 = document.createElement("div");
    const text3 = document.createElement("div");
    const text4 = document.createElement("div");
    const text5 = document.createElement("div");

    blockItemsBottum.classList.add("block-items-bottum");
    blockTimer.classList.add("block-timer");
    blockButtonResult.classList.add("block-button-result");
    textResultButton.classList.add("text-result-button");
    timer.classList.add("timer");
    text1.classList.add("summarizing-text1");
    text2.classList.add("summarizing-text2");
    text3.classList.add("summarizing-text3");
    text4.classList.add("summarizing-text4");
    text5.classList.add("summarizing-text5");

    text1.textContent = "Ваш результат рассчитан: ";
    text2.textContent =
      "вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!";
    text3.textContent = "Скорее получите свой результат!";
    text4.textContent =
      "В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона";
    text5.textContent = "Звоните скорее, запись доступна всего";
    timerText.textContent = "минут";
    textResultButton.textContent = "позвонить и прослушать результат";

    this.root.appendChild(blockItemsBottum);
    blockItemsBottum.appendChild(text1);
    blockItemsBottum.appendChild(text2);
    blockItemsBottum.appendChild(text3);
    blockItemsBottum.appendChild(text4);
    blockItemsBottum.appendChild(text5);
    blockItemsBottum.appendChild(blockTimer);
    blockTimer.appendChild(timer);
    blockTimer.appendChild(timerText);
    blockItemsBottum.appendChild(blockButtonResult);
    blockButtonResult.appendChild(textResultButton);

    const resultBTN = new QuizApp();
    blockButtonResult.addEventListener("click", function () {
      resultBTN.sendData(results);
    });

    const date = new Date(600_000);
    setInterval(() => {
      timer.textContent = `${date.toISOString().substring(14, 19)}`;
      date.setSeconds(date.getSeconds() - 1);
    }, 1_000);
  }
}
