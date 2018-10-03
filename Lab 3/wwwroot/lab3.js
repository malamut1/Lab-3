var ageCalc = function () {
    var date = document.querySelector("#date").value;
    var birthday = moment(date);
    var minimum = moment().subtract("21", 'years');

    if (birthday.isAfter(minimum)) {
        document.querySelector("#boxtitle").innerHTML = "Must be born before ";
        document.querySelector("#boxcontent1").innerHTML = minimum.format("dddd, MMMM, D, YYYY");
        document.querySelector("#boxcontent2").innerHTML = "to purchase this beverage.";
        document.querySelector("#infobox").style.visibility = "visible";
        return false;
    } else {
        return true;
    }
}

var ageRequired = function () {
    var drink = document.querySelector("select option:checked").value;
    var dateDisplay = document.querySelector("#birthday");
    if (drink == "2" || drink == "4") {
        dateDisplay.style.visibility = "visible";
    } else {
        dateDisplay.style.visibility = "hidden";
    }
}

var prices = [[2.5, 3.5, 5], [2.5, 3, 4.5], [5, 6.5, 8], [5, 8, 10]];
var beverages = ["Cofee", "Tea", "Beer", "Wine"];
var sizes = { 0: "Small", 1: "Medium", 2: "Large" };

var submitOrder = function () {
    var name = document.querySelector("#name").value;
    var drink = document.querySelector("select option:checked").value;
    var drinkName = beverages[drink];
    var size = document.querySelector('[type="radio"]:checked').value;
    var quantity = Number(document.querySelector("#amount").value);
    var price = prices[drink][size];
    var totalPrice = quantity * price;

    if (ageCalc()) {
        document.querySelector("#boxtitle").innerHTML = "Receipt";
        document.querySelector("#boxcontent1").innerHTML = name + " ordered " + quantity + " " + sizes[size] + " " + drinkName + " @ $" + price + " each."
        document.querySelector("#boxcontent2").innerHTML = "TOTAL: $" + totalPrice;
        document.querySelector("#infobox").style.visibility = "visible";
    }
}

window.onload = function () {
    document.querySelector("#birthday").style.visibility = "hidden";
    document.querySelector("#infobox").style.visibility = "hidden";
    var dropdown = document.querySelector("#drop");
    var dateSelector = document.querySelector("#date");
    dropdown.onchange = ageRequired;
    document.querySelector("#btn").onclick = submitOrder;
	
}