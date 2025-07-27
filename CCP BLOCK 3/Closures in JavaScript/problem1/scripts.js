function outerFunction() {
  const message = "Hello from the closure!";

  // Inner function forms a closure over `message`
  function innerFunction() {
    console.log(message);
  }

  // Return the inner function without calling it
  return innerFunction;
}

// Call outerFunction and store the returned function
const storedFunction = outerFunction();

// Now call the stored function
storedFunction(); // Output: "Hello from the closure!"
