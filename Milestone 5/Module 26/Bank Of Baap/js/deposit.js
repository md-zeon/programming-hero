//^ Step 01: add event listener at deposit btn
document.getElementById('btn-deposit').addEventListener('click', function() {
    //^ Step 02: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //^ step 08: clear the deposit field
    depositField.value = '';

    if(isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert("Please enter a valid amount");
        return;
    }

    //^ Step 03: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //^ Step 04: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //^ step 05: get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //^ step 06: calculate current balance total

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    //^ step 07: set the balance total

    balanceTotalElement.innerText = currentBalanceTotal;
    
    

})
