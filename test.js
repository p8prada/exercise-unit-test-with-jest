// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// Euro to Dollar test ----------------------------------
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

// Dollar to Yen test -----------------------------------
test("100 dolares should be 10,658.33 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    
    const yens = fromDollarToYen(100)
    const expected = Math.floor(100 / 1.2) * 127.9; 
    
    expect(fromDollarToYen(100)).toBe(10658.33);
})

// Yen to Pund test -------------------------------------
test("10,000 yens should be 62.55 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const gbp = fromYenToPound(10000)
    const expected = Math.floor((10000 / 127.9)) * 0.8; 

    expect(fromYenToPound(10000)).toBe(62.55);
})