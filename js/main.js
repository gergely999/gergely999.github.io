let price = 1350;
let deliveryPrice = 500;
let amountInput = document.querySelector("input[name='amount-input']");
let amountTotal = document.querySelector("span.show-total");
let showAmount = document.querySelector("span.show-amount");
let deliveryPriceBlock = document.querySelector("span.show-deliveryprice");
let deliveryLeftPrice = document.querySelector("span.show-leftprice");
document.getElementById("deliveryFeeFree").style.visibility = 'hidden';





function calculate() {
    let amountNumber = parseInt(amountInput.value);
    deliveryLeftPrice.innerHTML = 5000;
    if (isNaN(amountNumber)) {
        amountNumber = 0;
    }
    totalPriceCalc(showSumPrice(price, amountNumber));

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
    
        document.getElementById("deliveryFee").style.visibility = 'hidden';
        document.getElementById("deliveryFeeFree").style.visibility = 'visible';
        amountTotal.innerHTML = price
        deliveryPriceBlock.innerHTML = 0;
        

    } else {
        document.getElementById("deliveryFee").style.visibility = 'visible';
        document.getElementById("deliveryFeeFree").style.visibility = 'hidden';
        deliveryPriceBlock.innerHTML = deliveryPrice;
        amountTotal.innerHTML = price + deliveryPrice;
        deliveryLeftPrice.innerHTML = 5000 - price;
    }
}


