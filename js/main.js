function calculate(){
    let price = 1350;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    if(isNaN(amountNumber)){
        amountNumber = 0;
    }

    if(amountNumber > 10){
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1){
        alert("A kosár üres!");
    } else {
        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount;
    }

}