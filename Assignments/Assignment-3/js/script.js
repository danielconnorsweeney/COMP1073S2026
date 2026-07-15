const studentInfo = document.querySelector("#student-info");

const studentParagraph = document.createElement("p");
studentParagraph.textContent = "Student Name: Daniel Sweeney |  Student ID: 200645157";

studentInfo.appendChild(studentParagraph);

// Selectors
const pizzaForm = document.querySelector("#pizza-form");
const orderOutput = document.querySelector("#order-output");

// Event listener for when form is submitted
pizzaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Store values from form
    const customerName = document.querySelector("#customer-name").value;
    const phone = document.querySelector("#phone").value;
    const size = document.querySelector("#size").value;
    const sauce = document.querySelector("#sauce").value;
    const cheese = document.querySelector("#cheese").value;
    const quantity = document.querySelector("#quantity").value;
    const instructions = document.querySelector("#instructions").value;
    const selectedCrust = document.querySelector("input[name='crust']:checked");
    const selectedOrderType = document.querySelector("input[name='order-type']:checked");
    const selectedToppings = document.querySelectorAll("input[name='toppings']:checked");

    // Array for storing toppings
    const toppings = [];

    for (let i = 0; i < selectedToppings.length; i++) {
        toppings.push(selectedToppings[i].value);
    }

    // Testing order inputs are stored properly
    orderOutput.textContent = `Customer Name: ${customerName}
Phone Number: ${phone}
Pizza Size: ${size}
Crust: ${selectedCrust ? selectedCrust.value : "None selected"}
Sauce: ${sauce}
Cheese: ${cheese}
Toppings: ${toppings.join(", ")}
Quantity: ${quantity}
Order Type: ${selectedOrderType ? selectedOrderType.value : "None selected"}
Special Instructions: ${instructions}`;
});