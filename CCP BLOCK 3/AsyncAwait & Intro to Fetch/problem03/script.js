  const productGrid = document.getElementById("product-grid");
    const errorDiv = document.getElementById("error");
    const totalPriceDiv = document.getElementById("total-price");

    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const products = await response.json();

        // Display products in grid
        products.forEach(product => {
          const div = document.createElement("div");
          div.className = "product";
          div.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button class="btn">View Details</button>
          `;
          productGrid.appendChild(div);
        });

        // Calculate total price using reduce
        const total = products.reduce((acc, curr) => acc + curr.price, 0);
        totalPriceDiv.textContent = `Total Price: $${total.toFixed(2)}`;

        console.log("Fetched Products:", products);
        console.log("Total Price using reduce:", total.toFixed(2));

      } catch (error) {
        console.error("Fetch error:", error);
        errorDiv.textContent = "Failed to fetch products. Please try again later.";
      }
    }

    fetchProducts();