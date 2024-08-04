export default function changeValue(element, id) {
  element.addEventListener("click", function addInput() {
    let input = document.createElement("input");
    input.value = element.innerText;
    element.textContent = "";
    element.classList.remove("textAnimation");
    element.appendChild(input);
    input.focus();
    function removeInput() {
      element.textContent = input.value;
      localStorage.setItem(id, input.value);
      element.addEventListener("click", addInput);
      element.classList.add("textAnimation");
      setTimeout(() => {
        element.classList.remove("textAnimation");
      }, 5000);
    }
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        removeInput();
      }
    });
    input.addEventListener("blur", removeInput);
    element.removeEventListener("click", addInput);
  });
}
