window.onload = function () {
  creatForm();
};
// I. Creat form on web-page with elements and submitbutton
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
  let labelName = document.createElement("label");
  labelName.setAttribute("id", "labeltName");
  labelName.setAttribute("for", "inputName");
  //text for <label>Enter your name:</laber>
  let textName = document.createTextNode("Enter your name: ");
  labelName.appendChild(textName);

  form.appendChild(labelName);
  form.appendChild(inputName);

  let button = document.createElement("input");
  button.setAttribute("type", "submit");
  button.setAttribute("id", "button");
  button.setAttribute("value", "Add");

  form.appendChild(button);

  form.addEventListener(button, function (event) {
    event.preventDefault();
  });
  anchor.appendChild(form);
};

// II. a. make object for sending to server
addToList = async () => {
  let name = document.getElementById("inputname");
  let contact = {
    name: name.value,
  };

  // II. b. Make request to server and send object to there
  let url = "api/contact";
  let request = {
    method: "POST",
    mode: "cors",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(contact),
  };

  let response = await fetch(url, request);
  if (response.ok) {
    name.value = "";
    console.log("Object has been sent!");
  } else {
    console.log("Server has responded with status: ", response.status);
  }
};
// III. and finally how to check if the object
getContactList = async () => {
  let request = {
    method: "GET",
    mode: "cors",
    headers: { "Content-type": "application/json" },
  };
  let response = await fetch("/api/contact", request);
  if (response.ok) {
    // this will take just text, cause there much more data
    let data = await response.json();
    console.log(data);
    //one more line
  } else {
    console.log(
      "Failed to load contacts. Server responded with a status:",
      response.status
    );
  }
};
