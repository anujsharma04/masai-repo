const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 150 },
];

function processProducts(data) {
  let productname = data.map((ele) => ele.name);

  data.forEach((element, index) => {
    let massage = element.price > 50 ? " is above 50$" : "is below 50$";
    console.log(`${productname[index]} ${massage}`);
  });
}


processProducts(input)