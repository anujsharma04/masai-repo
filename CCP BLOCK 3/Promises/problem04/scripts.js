// Task A: Resolves after 1 second
function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000);
  });
}

// Task B: Resolves after 1.5 seconds, takes Task A output
function processTask(taskAResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${taskAResult}`);
    }, 1500);
  });
}

// Task C: Resolves after 0.5 seconds, takes Task B output
function finalizeTask(taskBResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${taskBResult}`);
    }, 500);
  });
}

// Simulate the workflow using promise chaining
startTask()
  .then(resultA => {
    console.log(resultA);
    return processTask(resultA);
  })
  .then(resultB => {
    console.log(resultB);
    return finalizeTask(resultB);
  })
  .then(resultC => {
    console.log(resultC);
  })
  .catch(error => {
    console.error("Error in task flow:", error);
  });
