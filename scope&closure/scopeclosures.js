// Global Scope
let storeName = "Global Mart";

function shoppingCart() {
  // Function Scope
  let cartTotal = 2;  //local scope

  // Closure to count items(inner func inside shoppingcart)
  function addItem(price) {
    cartTotal += price;   //remember cartTotal variable from outer function.
    console.log(`Item added: ₹${price}. Cart total: ₹${cartTotal}`);
  }

  // Block Scope for seasonal discount
  {
    let seasonalDiscount = 1.5; // 10%
    console.log("Seasonal discount inside block:", seasonalDiscount);

    // Lexical scope: inner function can access seasonalDiscount
    function applyDiscount() {
      let seasonalDiscount = 2.5; // Shadowing outer block variable
      console.log("Shadowed discount inside function:", seasonalDiscount);
      cartTotal = cartTotal - cartTotal * seasonalDiscount;
    }

    applyDiscount();
  }

  return function checkout() { // Closure remembers cartTotal
    return ` ${storeName}: Order placed! Total Bill: ₹${cartTotal.toFixed(2)}`;
  };
}

// Using the cart
const myCart = shoppingCart(); // outer function executed, closure created

// Adding items
myCart.addItem = function(price) { // adding method to closure object
  return (function innerAdd() {
    return price;
  })();
};

let add = shoppingCart();
addItem = add; // closure example for item count(assign closure to another variable)

// Using closure for checkout
console.log(myCart()); // Order placed message
