//your JS code here. If required.
const inputbtn = document.querySelector("input");
const colorSelect = document.querySelector("#colorSelect");
const option = document.querySelectorAll("option");



inputbtn.addEventListener("click",()=>{
  let updatedList = option.forEach((op)=>{

    if(colorSelect.value === op.textContent){

      colorSelect.removeChild(op);

    }
  });

  // console.log(colorSelect.value);

})