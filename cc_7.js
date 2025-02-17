// TASK 1: FUNCTION DECLARATION

// Write a function that calculates the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount // Write the formula
    console.log(`Total Invoice: $${total}`); // Log the total invoice
}

// Test Cases
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

// TASK 2: FUNCTION EXPRESSION

// Declare a function expression that calculates hourly wage
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek *52) // Write the formula
    console.log(`Hourly Wage: $${hourlyWage}`); // Log the hourly wage
}

// Test Cases
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"

// TASK 3: ARROW FUNCTION

// Write an arrow function that applies a discount
const calculateLoyaltyDiscount =(amount, years) => {
    let loyaltyDiscount = 0;
    if (years >= 5) loyaltyDiscount = amount * .15; // 15% discount 
    else if (years >= 3) loyaltyDiscount = amount * .10; // 10% discount if 3 o
    else loyaltyDiscount = amount * .05;
    let discountedPrice = amount - loyaltyDiscount

    console.log(`Discounted Price: $${discountedPrice}`); // Log the discounted price
}

// Test Cases
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

// TASK 4: PARAMETERS AND ARGUMENTS

// Write a function to calculate shipping fees
function calculateShippingCost(weight, location, expedited = false) {
   
    let baseCost = 0;
    if (location == "USA") baseCost = (weight * 0.5) + 5;
    else if (location == "Canada") baseCost = (weight * 0.7) + 10;
    if (expedited == true) baseCost += 10;
console.log(`Shipping Cost: $${baseCost.toFixed(2)}`);
}

// Test Cases
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

// TASK 5: RETURNING VALUES

// Write a function that returns total interest
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test Cases
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// TASK 6: HIGHER-ORDER FUNCTIONS

// Declare an array with at least five amounts
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction){ // Write a higher-order function that filters transactions above $1000
    return transactions.filter(filterFunction);
}

// Test Cases
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]

// TASK 7: CLOSURES 

// Write a function that returns another function to add expenses and keep a running balance
function createBudgetTracker() {
    let totalBudget = 0; // Initialize the beginning budget 

    return function(expense) {
        totalBudget -= expense;
        return `Current Balance: $${totalBudget}`;
    };
}

// Test Cases
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -500"

// TASK 8: RECURSION IN JAVASCRIPT

// Write a recursive function that projects revenue growth
function calculateGrowth(years, revenue) {
    if (years >= 10) {
         return `Projected Revenue: $${revenue.toFixed(2)}`; 
    }
    return calculateGrowth(years + 1, revenue * 1.05);
    
}

// Test Cases
console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41"
