window.onload = function () {
  creatForm();
};

creatForm = () => {
  let anchor = document.getElementById("anchor");
  let form = document.createElement("form");
  form.setAttribute("id", "form");

  let inputName = document.createElement("input");
  // create input element
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "inputname");
  inputName.setAttribute("name", "inputname");

  //create label of input
  let labelName = document.createElement("labelName");
  labelName.setAttribute("id", "inputName");
  labelName.setAttribute("for", "inputName");
  //text for <label>Enter your name:</laber>
  let textName = document.createTextNode("Enter your name: ");
  labelName.appendChild(textName);

  form.appendChild(labelName);
  form.appendChild(inputName);
  anchor.appendChild(form);

  let button = document.createElement("input");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "button");
  button.setAttribute("value", "Add");

  form.appendChild(button);

  addEventListener(button, function (event) {
    event.preventDefault();
  });
};
