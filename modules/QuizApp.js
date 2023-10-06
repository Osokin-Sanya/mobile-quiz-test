import sendDataAPI from "./api";

export default class QuizApp {
  constructor(questions = []) {
    this.questions = questions;
    this.questionPointer = -1;

    this.selectedAnswers = [];
  }

  next() {
    this.questionPointer += 1;
    return this.#getCurrent();
  }

  saveAnswer(answer) {
    const current = this.#getCurrent();
    this.selectedAnswers.push({ id: current.id, answer });
  }

  getProgress() {
    return ((this.questionPointer + 1) * 100) / this.questions.length;
  }

  getResults() {
    return this.selectedAnswers;
  }

  isDone() {
    return this.questions.length === this.selectedAnswers.length;
  }

  #getCurrent() {
    return this.questions[this.questionPointer];
  }

  sendData(results) {
    sendDataAPI(results);
  }
}
