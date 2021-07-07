import Select from "./select.js";

const selectElem = document.querySelectorAll("[data-custom]");

selectElem.forEach((element) => new Select(element));
