const checkout = {
  items: [],
  total: 0,

  // Adds item to cart after validating and parsing price
  addItem(item) {
    let price = item.price;

    // Convert string price to number if needed
    if (typeof price === 'string') {
      price = parseFloat(price);
    }

    // Validate price
    if (typeof price !== 'number' || isNaN(price)) {
      console.error("❌ Invalid price. Please enter a valid number.");
      return;
    }

    this.items.push({ ...item, price });
    this.total += price;
    console.log(`✅ Added: ${item.name} - $${price.toFixed(2)}`);
  },

  // Return total in currency format
  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};



checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // Will now be parsed and accepted
checkout.addItem({ name: "Milk", price: 3.50 });             // Already valid

console.log(checkout.getTotal());  // ➜ Total: $103.45
