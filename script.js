function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function createLabelElement() {
    // var labelText = prompt("Enter the label text:");
    // if (!labelText) {
    //   return null;
    // }
    var labelText = "Edit this!"
    var label = document.createElement("label");
    label.textContent = labelText;
    label.contentEditable = "true"; // Allow editing the label text
    return label;
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
    else if (formElement === "Line Break") {
        newElement = document.createElement("br");
    }
    else if (formElement === "Label") {
        newElement = createLabelElement();
    }
    else if (formElement === "Password Input") {
        newElement = document.createElement("input");
        newElement.type = "password";
        newElement.className = "password-input";
    } else if (formElement === "File Input") {
        newElement = document.createElement("input");
        newElement.type = "file";
        newElement.className = "file-input";
    } else if (formElement === "Textarea") {
        newElement = document.createElement("textarea");
        newElement.className = "textarea";
    } else if (formElement === "Select Dropdown") {
        newElement = document.createElement("select");
        newElement.className = "select-dropdown";
    } else if (formElement === "Submit Button") {
        newElement = document.createElement("input");
        newElement.type = "submit";
        newElement.className = "submit-button";
    } else if (formElement === "Reset Button") {
        newElement = document.createElement("input");
        newElement.type = "reset";
        newElement.className = "reset-button";
    } else if (formElement === "Date Input") {
        newElement = document.createElement("input");
        newElement.type = "date";
        newElement.className = "date-input";
    } else if (formElement === "Time Input") {
        newElement = document.createElement("input");
        newElement.type = "time";
        newElement.className = "time-input";
    } else if (formElement === "Color Picker") {
        newElement = document.createElement("input");
        newElement.type = "color";
        newElement.className = "color-picker";
    } else if (formElement === "Number Input") {
        newElement = document.createElement("input");
        newElement.type = "number";
        newElement.className = "number-input";
    } else if (formElement === "Range Input") {
        newElement = document.createElement("input");
        newElement.type = "range";
        newElement.className = "range-input";
    } else if (formElement === "Checkboxes Group") {
        newElement = document.createElement("div");
        // Create checkboxes and append them to newElement
        // Example:
        // var checkbox1 = document.createElement("input");
        // checkbox1.type = "checkbox";
        // newElement.appendChild(checkbox1);
        // ... create other checkboxes and append them ...
    } else if (formElement === "Radio Buttons Group") {
        newElement = document.createElement("div");
        // Create radio buttons and append them to newElement
        // Example:
        // var radio1 = document.createElement("input");
        // radio1.type = "radio";
        // newElement.appendChild(radio1);
        // ... create other radio buttons and append them ...
    } else if (formElement === "Image Input") {
        newElement = document.createElement("input");
        newElement.type = "file";
        newElement.accept = "image/*";
        newElement.className = "image-input";
    }

    if (newElement) {
        document.getElementById("generated-html").appendChild(newElement);
    }
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

function newLine() {
    var newElement = document.createElement("br");
    document.getElementById("generated-html").appendChild(newElement);
}

function addSpace() {
    // Create a text node containing a space character
    const spaces = document.createTextNode('\u00A0\u00A0\u00A0');
    document.getElementById("generated-html").appendChild(spaces);
}

document.addEventListener("DOMContentLoaded", function () {
    var formElements = document.getElementsByClassName("form-element");
    for (var i = 0; i < formElements.length; i++) {
        formElements[i].addEventListener("dragstart", drag);
    }
});
