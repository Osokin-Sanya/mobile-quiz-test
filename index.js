import QuizApp from "./modules/QuizApp";
import QuizUI from "./modules/QuizUI";
import quizQuestions from "./quiz-questions";

const onOpenQuiz = (() => {
  const body = document.querySelector("body");
  const quizAppBlock = document.querySelector(".quiz-block");

  return () => {
    body.style.overflow = "hidden";
    quizAppBlock.style.display = "block";
    window.scrollTo(0, 0);
  };
})();

// Set listeners for all active elements
document.querySelectorAll(".open-quiz-app").forEach((activeElement) => {
  activeElement.addEventListener("click", onOpenQuiz);
});

const quiz = new QuizApp(quizQuestions);
const quizUI = new QuizUI(document.querySelector("#quiz-app"), onClickNext);

function onClickNext(selectedValue) {
  quiz.saveAnswer(selectedValue);

  if (quiz.isDone()) {
    return quizUI.renderSummarizing(quiz.getResults());
  }

  quizUI.update({
    progress: quiz.getProgress(),
    ...quiz.next(),
  });
}

quizUI.update({
  progress: quiz.getProgress(),
  ...quiz.next(),
});
