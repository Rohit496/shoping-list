const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

function myForm(event) {
  event.preventDefault();

  if (itemInput.value === "") {
    alert("Please enter a value");
    return;
  }
  console.log("Submit Event Fired");
  const li = document.createElement("li");
  const text = document.createTextNode(itemInput.value);
  const button = buttonClass("remove-item btn-link text-red");
  const icon = iconClass("fa-solid fa-xmark");
  button.appendChild(icon);
  li.appendChild(text);
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = "";
}

function buttonClass(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}

function iconClass(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

itemForm.addEventListener("submit", myForm);
