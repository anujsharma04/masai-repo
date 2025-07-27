const userProfile = {
  name: "Alice",
  age: 28,

   details() {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    // Validate age: must be a positive number
    if (typeof newAge !== 'number' || newAge <= 0 || isNaN(newAge)) {
      console.error("❌ Invalid age. Please enter a positive number.");
      return;
    }

    this.age = newAge;
    console.log(`✅ Age updated. ${this.details()}`);
  }



};

userProfile.updateAge(30);                  
console.log(userProfile.details());         
userProfile.updateAge(-5);                  
userProfile.updateAge("thirty");        
