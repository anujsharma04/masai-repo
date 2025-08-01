function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}


timer(3000, (message) => {
  console.log(message); // Will log after 3 seconds: "Timer of 3000 ms finished"
});
