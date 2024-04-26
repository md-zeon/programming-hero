document.getElementById('apply-btn').addEventListener('click', function() {
    const originalPriceElement = document.getElementById('original-price');
    const originalAmountString = originalPriceElement.innerText;
    const originalAmount = parseFloat(originalAmountString);
    const couponFieldElement = document.getElementById('coupon-field');
    const couponValue = couponFieldElement.value;
    couponFieldElement.value = '';

    if(couponValue === 'coupon30') {
        const discount = 30/100;
        const discountedAmount = originalAmount * discount;
        const newPrice = originalAmount - discountedAmount;
        const h3 = document.createElement('h3');
        h3.innerText = 'New Price: ' + newPrice + 'Tk';
        h3.classList.add('text-4xl');
        document.getElementById('coupon-section').appendChild(h3);
    } else {
        alert("Invalid Coupon Code!");
    }
})