let price = 1350;
let deliveryPrice = 500;
let amountInput = document.querySelector("input[name='amount-input']");
let amountTotal = document.querySelector("span.show-total");
let showAmount = document.querySelector("span.show-amount");
let deliveryPriceBlock = document.querySelector("span.show-deliveryprice");
let deliveryLeftPrice = document.querySelector("span.show-leftprice");
document.getElementById("deliveryFeeFree").style.visibility = "hidden";

addToppings();

function addToppings() {
  let toppings = ["Sajt", "Szalonna", "Tükörtojás"];

  let toppingSelect = document.querySelector("#topInput");
  let index = 0;
  while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
  }
}

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  calculate();

  let inputs = this.querySelectorAll("input");
  let values = {};

  for (let i = 0; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
  }

  console.log(values);
});

//info button close

let alertCloseButtons = document.querySelectorAll(
  ".close[data-dismiss='alert']"
);
let alertCloseEventHandlerFunction = function (ev) {
  this.parentElement.style.display = "none";
};
for (let k = 0; k < alertCloseButtons.length; k++) {
  alertCloseButtons[k].addEventListener(
    "click",
    alertCloseEventHandlerFunction
  );
}

function calculate() {
  let amountNumber = parseInt(amountInput.value);
  deliveryLeftPrice.innerHTML = 5000;
  if (isNaN(amountNumber)) {
    amountNumber = 0;
  }
  totalPriceCalc(showSumPrice(price, amountNumber));

  massModify("input", "title", "haha");
}

function showSumPrice(price = 1350, amountNumber = 1, deliveryPrice = 500) {
  if (amountNumber > 10) {
    alert("Maximum 10 terméket vásárolhat!");
  } else if (amountNumber < 1) {
    alert("A kosár üres!");
  } else {
    let amount = amountNumber * price;
    showAmount.innerHTML = amount;
    return amount;
  }
}

function totalPriceCalc(price = 1350) {
  if (price > 5000) {
    document.getElementById("deliveryFee").style.visibility = "hidden";
    document.getElementById("deliveryFeeFree").style.visibility = "visible";
    amountTotal.innerHTML = price;
    deliveryPriceBlock.innerHTML = 0;
  } else {
    document.getElementById("deliveryFee").style.visibility = "visible";
    document.getElementById("deliveryFeeFree").style.visibility = "hidden";
    deliveryPriceBlock.innerHTML = deliveryPrice;
    amountTotal.innerHTML = price + deliveryPrice;
    deliveryLeftPrice.innerHTML = 5000 - price;
  }
}
function massModify(selector, attribute, value) {
  console.log("selector: " + selector);
  let nodeList = document.querySelectorAll(selector);
  console.log(nodeList);
  for (let y = 0; y < nodeList.length; y++) {
    nodeList[y][attribute] = value;
  }
}
