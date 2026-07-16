const studentInfo = document.querySelector("#student-info");

const studentParagraph = document.createElement("p");
studentParagraph.textContent =
  "Student Name: Daniel Sweeney |  Student ID: 200645157";

studentInfo.appendChild(studentParagraph);

// Pizza class
class Pizza {
  constructor(
    customerName,
    phone,
    size,
    crust,
    sauce,
    cheese,
    toppings,
    quantity,
    orderType,
    instructions,
  ) {
    this.customerName = customerName;
    this.phone = phone;
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.toppings = toppings;
    this.quantity = quantity;
    this.orderType = orderType;
    this.instructions = instructions;
  }

  // Builds and returns pizza order description as a string
  buildDescription() {
    let toppingDescription = this.toppings.join(", ");
    let specialInstructions = this.instructions;

    if (specialInstructions === "") {
      specialInstructions = "No special instructions.";
    }

    return `Thank you, ${this.customerName}!

Phone Number: ${this.phone}
Order Type: ${this.orderType}

Pizza Size: ${this.size}
Crust: ${this.crust}
Sauce: ${this.sauce}
Cheese: ${this.cheese}
Toppings: ${toppingDescription}
Quantity: ${this.quantity}

Special Instructions: ${specialInstructions}

Your pizza order has been created successfully.`;
  }
}

// Selectors
const pizzaForm = document.querySelector("#pizza-form");
const orderOutput = document.querySelector("#order-output");
const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const sizeError = document.querySelector("#size-error");
const crustError = document.querySelector("#crust-error");
const sauceError = document.querySelector("#sauce-error");
const cheeseError = document.querySelector("#cheese-error");
const toppingsError = document.querySelector("#toppings-error");
const quantityError = document.querySelector("#quantity-error");
const orderTypeError = document.querySelector("#order-type-error");

// Event listener for when form is submitted
pizzaForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear old error messages
  clearErrors();

  // Store values from form
  const customerName = document.querySelector("#customer-name").value;
  const phone = document.querySelector("#phone").value;
  const phoneDigits = phone.replace(/\D/g, ""); // remove anything that isn't a digit
  const size = document.querySelector("#size").value;
  const sauce = document.querySelector("#sauce").value;
  const cheese = document.querySelector("#cheese").value;
  const quantity = document.querySelector("#quantity").value;
  const instructions = document.querySelector("#instructions").value;
  const selectedCrust = document.querySelector("input[name='crust']:checked");
  const selectedOrderType = document.querySelector(
    "input[name='order-type']:checked",
  );
  const selectedToppings = document.querySelectorAll(
    "input[name='toppings']:checked",
  );

  // Validation for input values
  let isValid = true;

  if (customerName === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  }

  if (phone === "") {
    phoneError.textContent = "Please enter your phone number.";
    isValid = false;
  } else if (phoneDigits.length !== 10) {
    phoneError.textContent = "Please enter a 10 digit phone number.";
    isValid = false;
  }

  if (size === "") {
    sizeError.textContent = "Please choose a pizza size.";
    isValid = false;
  }

  if (selectedCrust === null) {
    crustError.textContent = "Please choose a crust type.";
    isValid = false;
  }

  if (sauce === "") {
    sauceError.textContent = "Please choose a sauce.";
    isValid = false;
  }

  if (cheese === "") {
    cheeseError.textContent = "Please choose a cheese level.";
    isValid = false;
  }

  if (selectedToppings.length === 0) {
    toppingsError.textContent = "Please choose at least one topping.";
    isValid = false;
  }

  if (Number.isNaN(quantity) || quantity < 1 || quantity > 10) {
    quantityError.textContent = "Quantity must be between 1 and 10.";
    isValid = false;
  }

  if (selectedOrderType === null) {
    orderTypeError.textContent = "Please choose pickup or delivery.";
    isValid = false;
  }

  // Stop function if validation fails
  if (isValid === false) {
    orderOutput.textContent =
      "Please fix the errors in the form before placing your order.";
    return;
  }

  // Array for storing toppings
  const toppings = [];

  for (let i = 0; i < selectedToppings.length; i++) {
    toppings.push(selectedToppings[i].value);
  }

  // Pizza object using form values
  const customerPizza = new Pizza(
    customerName,
    phone,
    size,
    selectedCrust.value,
    sauce,
    cheese,
    toppings,
    quantity,
    selectedOrderType.value,
    instructions,
  );

  // Display description with method
  orderOutput.textContent = customerPizza.buildDescription();
});

// Clear all validation error messages
function clearErrors() {
  nameError.textContent = "";
  phoneError.textContent = "";
  sizeError.textContent = "";
  crustError.textContent = "";
  sauceError.textContent = "";
  cheeseError.textContent = "";
  toppingsError.textContent = "";
  quantityError.textContent = "";
  orderTypeError.textContent = "";
}
