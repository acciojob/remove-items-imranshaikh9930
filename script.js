// //your JS code here. If required.
// const inputbtn = document.querySelector("input");
// const colorSelect = document.querySelector("#colorSelect");
// const option = document.querySelectorAll("option");

// inputbtn.addEventListener("click", () => {
//     option.forEach((op) => {
//         if (colorSelect.value === op.textContent) {
//             op.remove();
//         }
//     });
// });
const inputbtn = document.querySelector("input");
const colorSelect = document.querySelector("#colorSelect");

inputbtn.addEventListener("click", () => {
  let selected = colorSelect.value;

  for (let i = 0; i < colorSelect.options.length; i++) {
    if (colorSelect.options[i].value === selected) {
      colorSelect.remove(i);
      break;
    }
  }
});

