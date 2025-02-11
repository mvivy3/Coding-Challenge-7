// TASK 1: FUNCTION DECLARATION

// Write a function that calculates the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount // Write the formula
    console.log(`Total Invoice: $${total}`); // Log the total invoice
}

// Test Cases
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"
