function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
  }
  
  function drop(event) {
    event.preventDefault();
    var formElement = event.dataTransfer.getData("text");
    var newElement;
  
    // Create form element based on dropped form element name
    if (formElement === "Text Input") {
      newElement = document.createElement("input");
      newElement.type = "text";
      newElement.className = "text-input";
    } 
    else if (formElement === "Checkbox") {
      newElement = document.createElement("input");
      newElement.type = "checkbox";
      newElement.className = "checkbox";
    } 
    else if (formElement === "Radio Button") {
      newElement = document.createElement("input");
      newElement.type = "radio";
      newElement.className = "radio";
    }
  
    if (newElement) {
        document.getElementById("generated-html").appendChild(newElement);
    //   updateGeneratedHTML();
    }
  }
  
  function updateGeneratedHTML() {
    var mainArea = document.getElementById("main-area");
    var generatedHTML = mainArea.innerHTML;
    document.getElementById("generated-html").textContent = generatedHTML;
  }
  
  function copyHTMLCode() {
    var generatedHTML = document.getElementById("generated-html").innerHTML;
  
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");
    textarea.value = generatedHTML;
    document.body.appendChild(textarea);
  
    // Select and copy the content
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
  
    try {
      document.execCommand("copy");
    //   alert("HTML code copied to clipboard!");
    } catch (error) {
      alert("Failed to copy HTML code to clipboard!");
    }
  
    // Remove the temporary textarea element
    document.body.removeChild(textarea);
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
    var formElements = document.getElementsByClassName("form-element");
    for (var i = 0; i < formElements.length; i++) {
      formElements[i].addEventListener("dragstart", drag);
    }
  });
  