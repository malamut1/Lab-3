var ageRequired = function () {
    var drink = document.querySelector("select option:checked").value;
    var dateDisplay = document.querySelector("#birthday");
    if (drink == "2" || drink == "4") {
        dateDisplay.style.visibility = "visible";
    } else {
        dateDisplay.style.visibility = "hidden";
    }
}

var calcAge = function () {
    var date = document.querySelector("#date").value;
    var birthday = moment(date);
    var minimum = moment().subtract("21", 'years');

    if (birthday.isAfter(minimum)) {
        document.querySelector("#box1").innerHTML = "Must be born before ";
        document.querySelector("#box2").innerHTML = minimum.format("dddd, MMMM, D, YYYY");
        document.querySelector("#box3").innerHTML = "to purchase this beverage.";
        document.querySelector("#receiptbox").style.visibility = "visible";
        return false;
    } else {
        return true;
    }
}


var prices = [[2.5, 3.5, 5], [2.5, 3, 4.5], [5, 6.5, 8], [5, 8, 10]];
var beverages = ["Coffee", "Tea", "Beer", "Wine"];
var sizes = { 0: "Small", 1: "Medium", 2: "Large" };

var submitOrder = function () {
    var name = document.querySelector("#name").value;
    var drink = document.querySelector("select option:checked").value;
    var drinkName = beverages[drink];
    var size = document.querySelector('[type="radio"]:checked').value;
    var quantity = Number(document.querySelector("#amount").value);
    var price = prices[drink][size];
    var totalPrice = quantity * price;

    if (calcAge()) {
        document.querySelector("#box1").innerHTML = "Customer: " + name;
        document.querySelector("#box2").innerHTML = quantity + " " + sizes[size] + " " + drinkName + " @ $" + price;
        document.querySelector("#box3").innerHTML = "TOTAL DUE: $" + totalPrice;
        document.querySelector("#receiptbox").style.visibility = "visible";
    }
}

window.onload = function () {
    document.querySelector("#birthday").style.visibility = "hidden";
    document.querySelector("#receiptbox").style.visibility = "hidden";
    var dropdown = document.querySelector("#drop");
    var dateSelector = document.querySelector("#date");
    dropdown.onchange = ageRequired;
    document.querySelector("#btn").onclick = submitOrder;
	
}