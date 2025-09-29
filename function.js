// ==================== Function Declaration ====================
// (Hoisted → can be called before it's defined)
console.log(calculateTotal([100, 200, 50])); // ✅ Works due to hoisting

function calculateTotal(prices) {
  // Adds up all product prices
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}


// ==================== Function Expression ====================
// (Not hoisted → must be defined before calling)
const applyDiscount = function(total, discountPercent = 10) {
  // Applies discount, default = 10%
  return total - (total * discountPercent) / 100;
};

let cartTotal = calculateTotal([100, 200, 50]); // 350
let discountedTotal = applyDiscount(cartTotal, 20); // 20% discount
console.log("After discount:", discountedTotal); // 280


// ==================== Arrow Function ====================
// Short syntax for reusable small tasks
const addGST = (amount) => amount * 1.18; // Adding 18% GST

let finalAmount = addGST(discountedTotal);
console.log("Final amount with GST:", finalAmount); // 330.4


// ==================== Rest Parameters ====================
// Add multiple items dynamically
function addItems(...items) {    //items are stored in array format
  return items.reduce((sum, item) => sum + item, 0);
}

let newItemsTotal = addItems(300, 150, 50); // 500
console.log("New items total:", newItemsTotal);


// ==================== Using Return Properly ====================
function checkout(finalBill) {
  return `✅ Order placed successfully! Total Bill: ₹${finalBill}`;
}

console.log(checkout(finalAmount));




