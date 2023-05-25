import { form } from "../utils/constants.js";
import { handleFormSubmit } from "../utils/utils.js";

form.addEventListener("submit", (e) => {
  handleFormSubmit(e);
});
