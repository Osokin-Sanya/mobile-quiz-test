import QuestionType from "../../models/QuestionType";

export default class AnswersSection {
  constructor(root, onChange = () => {}) {
    this.root = root;
    this.onChange = onChange;
  }

  update(type, values, image) {
    this.#clear();

    if (type === QuestionType.text) {
      return this.#updateTextType(values);
    }

    if (type === QuestionType.colors) {
      return this.#updateColorType(values);
    }

    if (type === QuestionType.textImage) {
      return this.#updateTextImageType(values, image);
    }

    throw new Error("Invalid quiz data");
  }

  #updateTextImageType(values = [], imageUrl) {
    const image = document.createElement("div");
    image.classList.add("test-image");
    image.style.backgroundImage = `url('${imageUrl}')`;
console.log(imageUrl);
    this.root.appendChild(image);

    this.#updateTextType(values);
  }

  #updateColorType(values = []) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("content-block__squares");

    values.forEach((value) => {
      const square = document.createElement("div");
      square.classList.add("set-squares");
      square.style.background = value;

      square.addEventListener("click", () =>
        this.#onClickSelectedAnswer(square, value)
      );

      wrapper.appendChild(square);
    });

    this.root.appendChild(wrapper);
  }

  #updateTextType(values = []) {
    values.forEach((value, index) => {
      const input = document.createElement("input");
      input.classList.add("radio-answer");
      input.id = index;
      input.type = "radio";
      input.name = "answers";
      input.value = value;

      const label = document.createElement("label");
      label.htmlFor = index;
      label.textContent = value;

      const wrapper = document.createElement("div");
      wrapper.classList.add("content-wrapper");
      wrapper.appendChild(input);
      wrapper.appendChild(label);

      label.addEventListener("click", () =>
        this.#onClickSelectedAnswer(label, value)
      );

      this.root.appendChild(wrapper);
    });
  }

  #onClickSelectedAnswer(element, value) {
    document
      .querySelectorAll(".active-element")
      .forEach((element) => element.classList.remove("active-element"));

    element.classList.add("active-element");

    this.onChange(value);
  }

  #clear() {
    this.root.innerHTML = "";
  }
}
