const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listItems = document.getElementsByTagName("LI");
const deleteBtn = document.getElementsByTagName("button");

//get length of list

const listLength = () => {
  console.log(listItems.length);
  return listItems.length;
};

//create delete buttons for exisiting buttons

listLength.forEach(() => {
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete!"));
  listItems[i].appendChild(btn);
  btn.onclick = removeParent;
});

//remove an item from the list

const removeParent = evt => {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
};

//check or uncheck list items

const checked = event => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
};

//get the buttons array

const deleteBtnsLength = () => {
  console.log(deleteBtn.length);
  return deleteBtn.length;
};

// get the length of the user input

const inputLength = () => {
  return input.value.length;
};

//create a new list item for user input

const createElement = () => {
  // add user input to list and set input value to an empty string again
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  //create delete button for each new list item
  const btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete!"));
  li.appendChild(btn);

  //why is that not working if I put () behind removeParent? As we want to execute the function?
  btn.onclick = removeParent;
};

//user click add input
const addElementByClick = () => {
  if (inputLength() > 0) {
    createElement();
  }
};

//user press enter on keyboard
const addElementByKeypress = event => {
  if (inputLength() > 0 && event.keyCode === 13) {
    //event.which works too!
    createElement();
  }
};

ul.addEventListener("click", checked);

button.addEventListener("click", addElementByClick);

input.addEventListener("keypress", addElementByKeypress);
