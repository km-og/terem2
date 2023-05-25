import {
  firstInput,
  screenText,
  secondInput,
  selectInput,
} from "./constants.js";

export function handleFormSubmit(e) {
  e.preventDefault();

  const formData = {
    selectInput: selectInput.value,
    firstInput: firstInput.value,
    secondInput: secondInput.value,
  };

  const jsonStructure = JSON.stringify(formData);

  screenText.textContent = jsonStructure;

  fetch("https://someUrl.com", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data);
    })
    .catch((err) => {
      alert(err);
    });
}