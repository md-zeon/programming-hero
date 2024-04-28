function updateList(cardId) {
    const shoppingList = document.getElementById("shopping-list");
    const li = document.createElement("li");
    const card = document.getElementById(cardId);
    const cardTitle = card.querySelector(".card-title");
    li.innerText = cardTitle.innerText;
    shoppingList.appendChild(li);

    const cardPriceElement = card.querySelector(".price");
    const itemPrice = getPrice(cardPriceElement);
    updatePrice("total-price", itemPrice);
    updatePrice("total", itemPrice);
}

function getDiscountPrice() {
    const discountPriceElement = document.getElementById("discount-price");
    const couponField = document.getElementById("coupon-field");
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice = getPrice(totalPriceElement);
    const couponFieldText = couponField.value;
    couponField.value = '';
    if(couponFieldText == "SELL200" && totalPrice >= 200) {
        const discountPrice = (totalPrice * 0.20).toFixed(2);
        discountPriceElement.innerText = discountPrice;

        const totalElement = document.getElementById("total");
        const total = getPrice(totalPriceElement);
        totalElement.innerText = total - discountPrice;
    } else {
        alert("Please Enter a valid Coupon Code");
    }
}

function getPrice(priceElement) {
    const text = priceElement.innerText;
    const price = parseFloat(text);
    return price;
}

function updatePrice(priceId, itemPrice) {
    const totalPriceElement = document.getElementById(priceId);
    const previousTotalPrice = getPrice(totalPriceElement);
    const totalPrice = previousTotalPrice + itemPrice;
    totalPriceElement.innerText = totalPrice;

    if(priceId == "total-price") {
        if(totalPrice > 200) {
            const couponBtn = document.getElementById("coupon-btn");
            couponBtn.classList.remove("btn-disabled");
        }
    } else if (priceId == "total") {
        if(totalPrice > 0) {
            const purchaseBtn = document.getElementById("purchase-btn");
            purchaseBtn.classList.remove("btn-disabled");
        }
    }
}


function resetData(elementId) {
    const resetElementId = document.getElementById(elementId);
    resetElementId.innerText = '00.00';
    document.getElementById("purchase-btn").classList.add("btn-disabled");
    document.getElementById("coupon-btn").classList.add("btn-disabled");
}