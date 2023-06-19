// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (x) =>{
    return x * oneEuroIs.USD;
}

const fromDollarToYen = (x) =>{
    return parseFloat(((x / oneEuroIs.USD) * oneEuroIs.JPY).toFixed(2));
}

const fromYenToPound = (x) =>{
    return parseFloat(((x / oneEuroIs.JPY) * oneEuroIs.GBP).toFixed(2));
}


console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };