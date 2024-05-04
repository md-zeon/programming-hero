document.getElementById("calculate").addEventListener("click", function() {
    const totalIncome = getInputValue("income");
    const totalExpenses = calculateExpenses();
    const balance = totalIncome - totalExpenses;
    if(checkValidity(totalIncome) || checkValidity(totalExpenses) || checkValidity(balance)) {
        return;
    }
    document.getElementById("total-expenses").innerText = totalExpenses;
    document.getElementById("balance").innerText = balance;
});

document.getElementById("save-btn").addEventListener("click", function() {
    const totalIncome = getInputValue("income");
    const balance = calculateBalance();
    const save = getInputValue("save");
    const savings = totalIncome * (save / 100);
    const remainingBalance = balance - savings;
    if(checkValidity(savings) || checkValidity(remainingBalance)) {
        return;
    }
    document.getElementById("savings").innerText = savings;
    document.getElementById("remaining-balance").innerText = remainingBalance;
})

function getInputValue(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputElementValue = inputElement.value;
    const inputValue = parseFloat(inputElementValue);
    return inputValue;
}

function calculateExpenses() {
    const foodExpanse = getInputValue("food");
    const rentExpense = getInputValue("rent");
    const clothesExpense = getInputValue("clothes");
    const totalExpenses = foodExpanse + rentExpense + clothesExpense;
    return totalExpenses;
}

function calculateBalance() {
    const totalIncome = getInputValue("income");
    const totalExpenses = calculateExpenses();
    const balance = totalIncome - totalExpenses;
    return balance;
}

function checkValidity(elementValue) {
    if(isNaN(elementValue) || elementValue < 0) {
        alert("Please enter a valid number");
        return true;
    } else {
        return false;
    }
    
}