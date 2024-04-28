document.getElementById("item1").addEventListener("click", function() {
    updateList("item1");
});

document.getElementById("item2").addEventListener("click", function() {
    updateList("item2");
});

document.getElementById("item3").addEventListener("click", function() {
    updateList("item3");
});

document.getElementById("item4").addEventListener("click", function() {
    updateList("item4");
});

document.getElementById("item5").addEventListener("click", function() {
    updateList("item5");
});

document.getElementById("item6").addEventListener("click", function() {
    updateList("item6");
});

document.getElementById("item7").addEventListener("click", function() {
    updateList("item7");
});

document.getElementById("item8").addEventListener("click", function() {
    updateList("item8");
});

document.getElementById("item9").addEventListener("click", function() {
    updateList("item9");
});


document.getElementById("coupon-btn").addEventListener("click", function() {
    getDiscountPrice();
});

document.getElementById("home-btn").addEventListener("click", function() {
    resetData("total-price");
    resetData("discount-price");
    resetData("total");
    const ol = document.getElementById("shopping-list");
    ol.innerHTML = '';
});