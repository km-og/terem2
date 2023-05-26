const block = document.querySelector(".block");
const form = block.querySelector(".block__form");
const btnSubmit = block.querySelector(".block__btn");
const screen = document.querySelector(".screen");
const screenText = screen.querySelector(".screen__text");

function handleFormSubmit(e) {
  e.preventDefault();
  const collection = form.elements;
  let formData = {};

  for (let i = 0; i < collection.length - 1; i++) {
    formData[collection[i].name] = collection[i].value;
  }

  const jsonStructure = JSON.stringify(formData);
  screenText.textContent = jsonStructure;

  fetch("https://someUrl.com", {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      }
    })
    .then((data) => {
      alert(data);
    })
    .catch((err) => {
      alert(err);
    });
}

form.addEventListener("submit", (e) => {
  handleFormSubmit(e);
});
