let inputArea = document.getElementById("task");
let container = document.querySelector(".container");
let addButton = document.getElementById("liveToastBtn");
let successToast = document.getElementById("successToast");
let errorToast = document.getElementById("errorToast");
let list = document.getElementById("list");

inputArea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    document.querySelector("#liveToastBtn").click();
  }
  console.log(inputArea.value);
});

function newElement() {
  if (inputArea.value.length > 0) {
    $("#successToast").toast("show");

    let li = document.createElement("li");
    li.setAttribute("class", "text");
    li.textContent = inputArea.value;

    let lis = document.querySelectorAll(".text");
    for (i = 0; i < lis.length; i++) {
      lis[i].append(li);
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-light");
    deleteBtn.textContent = "X";

    let btnItem = document.querySelectorAll(".btn-light");
    for (i = 0; i < btnItem.length; i++) {
      btnItem[i].append(deleteBtn);
    }

    deleteBtn.addEventListener("click", (deleteElement) => {
      let ul = document.querySelector("ul");
      ul.removeChild(deleteElement.target.parentElement);
    });

    li.append(deleteBtn);
    list.appendChild(li);
    inputArea.value = "";
  } else {
    $("#errorToast").toast("show");
  }
}
