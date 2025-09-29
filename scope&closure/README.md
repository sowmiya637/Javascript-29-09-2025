#  JavaScript Shopping Cart Demo

This is a JavaScript demo that showcases **core concepts** such as:

- Global Scope
- Function Scope
- Block Scope
- Lexical Scope
- Closures
- Variable Shadowing

###  Features Demonstrated:

| Concept             | How It's Used                                                                 |
|---------------------|--------------------------------------------------------------------------------|
|  **Global Scope**     | `storeName` is defined globally and accessed inside inner functions          |
|  **Function Scope**   | `cartTotal` is declared in `shoppingCart()` and used inside nested functions |
|  **Block Scope**      | `seasonalDiscount` is defined in a `{}` block and only exists there          |
|  **Lexical Scope**    | `applyDiscount()` accesses outer `seasonalDiscount` due to where it's defined |
|  **Closure**          | `checkout()` retains access to `cartTotal` even after `shoppingCart()` finishes |
|  **Variable Shadowing** | Inner `seasonalDiscount` in `applyDiscount()` shadows outer one               |


##  Code Usage

```js
// Create a shopping cart
const myCart = shoppingCart();

// Add items (simulated)
myCart.addItem = function(price) {
  return (function innerAdd() {
    return price;
  })();
};

// Print checkout total using closure
console.log(myCart());

Example Output:
Seasonal discount inside block: 1.5
Shadowed discount inside function: 2.5
Global Mart: Order placed! Total Bill: ₹-3.50
