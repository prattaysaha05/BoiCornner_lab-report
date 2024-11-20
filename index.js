// Fetch books from books.json
async function fetchBooks() {
  const response = await fetch("books.json"); // Path to your JSON file
  const books = await response.json();
  displayBooks(books);
  return books;
}


// Display books in the DOM
function displayBooks(books) {
  const booksContainer = document.getElementById("booksContainer");
  booksContainer.innerHTML = ""; // Clear previous results

  books.forEach((book) => {
    const bookCard = `
        <div class="bg-white shadow-md rounded-lg p-4">
          <img src="${book.image}" alt="${book.name}" class="w-full h-48 rounded mb-4" />
          <h3 class="text-lg font-bold">${book.name}</h3>
          <p class="text-gray-600">Price: ${book.price} BDT</p>
          <a href="#" class="mt-2 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Buy Now
          </a>
        </div>
      `;
    booksContainer.innerHTML += bookCard;
  });
}

// Filter books based on search input
async function filterBooks() {
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  const books = await fetchBooks();

  const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(searchQuery));

  displayBooks(filteredBooks);
}

// Initial fetch and display of books
fetchBooks();
