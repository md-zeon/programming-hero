//^ Step 01: add event listener at withdraw btn
document.getElementById('btn-withdraw').addEventListener('click', function() {
    //^ Step 02: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //^ step 08: clear the withdraw field
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert("please Enter a valid amount");
        return;
    }

    //^ Step 03: get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //^ step 05: get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if(newWithdrawAmount > previousBalanceTotal) {
        alert("Baap er bank e eto taka nai");
        return;
    }

    //^ Step 04: add numbers to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //^ step 06: calculate current balance total

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    //^ step 07: set the balance total

    balanceTotalElement.innerText = currentBalanceTotal;
    
})
