// Step 1: Simulate Data Fetching with a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50% chance
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Network error or server issue.");
      }
    }, 1000); // Simulated delay of 1 second
  });
}

// Step 2: Async function to handle data fetch
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!", result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

// Step 3: Simulate the Workflow
fetchDataHandler();
