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
