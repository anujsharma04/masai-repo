function get(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

get(2000,(massage)=>{console.log(massage)})