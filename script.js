const age = 18;
if (age >= 18 && age <= 25) {
    console.log("U krijgt 50% korting!")
} else {
    console.log("U krijgt geen korting.")
}

console.log("");

const firstName = "Sarah";
if (firstName == "Sarah" || firstName == "Bram") {
    console.log("U krijgt een gratis biertje!")
} else {
    console.log("U krijgt geen gratis biertje.")
}

console.log("");

const totalAmount = 100;
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("U krijgt gratis (vega)bitterballen!")
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("U krijgt een gratis portie nachos!")
} else if (totalAmount >= 100) {
    console.log("U krijgt een gratis flesje champagne!")
}