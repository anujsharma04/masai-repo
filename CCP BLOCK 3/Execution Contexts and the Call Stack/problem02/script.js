const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  // Improved addBook with full validation and messaging
  addBook(book) {
    const { title, author, year } = book;

    // Validate fields
    if (typeof title !== 'string' || typeof author !== 'string' || typeof year !== 'number') {
      console.error("❌ Book information is incomplete or invalid. Title and author must be strings, year must be a number.");
      return false;
    }

    // Optional: Prevent duplicate titles
    if (this.books.some(b => b.title === title)) {
      console.warn(`⚠️ A book titled "${title}" already exists.`);
      return false;
    }

    this.books.push({ title, author, year });
    console.log(`✅ Book titled "${title}" added successfully.`);
    return true;
  },

  // Find a book by title
  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  // Remove a book by title
  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`🗑️ Removed book: "${removed.title}"`);
      return true;
    } else {
      console.warn(`⚠️ Book titled "${title}" not found.`);
      return false;
    }
  }
};


// Try adding an invalid book (missing title)
library.addBook({ author: "George Orwell", year: 1949 }); // Should show error

// Add a valid book
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

// Check how many books in library
console.log("📚 Total books in library:", library.books.length); // Should be 2

// Try finding a book
const book = library.findBookByTitle("1984");
console.log("🔍 Found book:", book);

// Remove a book
library.removeBook("1984");

// Final list
console.log("📖 Final books:", library.books);
