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

  //create info of input
  let labelName = document.createElement("labelName");
  labelName.setAttribute("id", "Input your name");
  labelName.setAttribute("for", "inputName");
  let textName = document.createTextNode("Enter your name: ");
  labelName.appendChild(textName);

  inputName.appendChild(labelName);
  form.appendChild(inputName);
  anchor.appendChild(form);
};
