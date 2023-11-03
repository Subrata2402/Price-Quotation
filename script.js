let subtotal = document.getElementById("subtotal");
let discount = document.getElementById("discount");
let discountAmount = document.getElementById("discount-amount");
let total = document.getElementById("total");
let calculateButton = document.getElementById("calculate-button");
let clearButton = document.getElementById("clear-button");

calculateButton.addEventListener("click", function() {
    let sub = subtotal.value;
    let disc = discount.value;
    let alert = document.getElementById('popup');
    let alertText = document.getElementById('popup-text');
    if (sub == "") {
        alertText.innerHTML = 'Please enter a sale price.';
        alert.classList.add('show-popup');
        return;
    } else if (disc == "") {
        alertText.innerHTML = 'Please enter a discount percentage.';
        alert.classList.add('show-popup');
        return;
    }
    let discAmount = sub * (disc / 100);
    let tot = sub - discAmount;
    discountAmount.innerHTML = `$${discAmount}`;
    total.innerHTML = `$${tot}`;
});

clearButton.addEventListener("click", function() {
    subtotal.value = "";
    discount.value = "";
    discountAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
});

document.getElementById('close-popup').addEventListener('click', function() {
    let alert = document.getElementById('popup');
    alert.classList.remove('show-popup');
});