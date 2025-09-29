// 1. Create a cart (array)
let cart = ["Milk", "Bread", "Butter"];
console.log("Initial Cart:", cart);

// 2. Indexing → Access item
console.log("First Item:", cart[0]); // Milk

// 3. push → Add new item at end
cart.push("Eggs");
console.log("After push:", cart); // ["Milk","Bread","Butter","Eggs"]

// 4. pop → Remove last item
cart.pop();
console.log("After pop:", cart); // ["Milk","Bread","Butter"]

// 5. unshift → Add at start
cart.unshift("Juice");
console.log("After unshift:", cart); // ["Juice","Milk","Bread","Butter"]

// 6. shift → Remove first item
cart.shift();
console.log("After shift:", cart); // ["Milk","Bread","Butter"]

// 7. splice → Remove & Insert in middle
cart.splice(1, 1, "Cheese", "Jam");  
// remove 1 item at index 1, add Cheese & Jam
console.log("After splice:", cart); // ["Milk","Cheese","Jam","Butter"]

// 8. slice → Copy part of cart
let breakfastItems = cart.slice(0, 2);
console.log("Breakfast Items:", breakfastItems); // ["Milk","Cheese"]

// 9. map → Apply discount to all prices
let prices = [100, 200, 50, 150]; // price of each cart item
let discounted = prices.map(p => p * 0.9); // 10% discount
console.log("Discounted Prices:", discounted);

// 10. filter → Get items above 100
let premium = prices.filter(p => p > 100);
console.log("Premium Items:", premium); // [200,150]

// 11. reduce → Calculate total bill
let total = prices.reduce((sum, price) => sum + price, 0);
console.log("Total Bill:", total); // 500
