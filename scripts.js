// Assuming you have a container in your HTML with id 'library-shelf'
/*const libraryShelf = document.getElementById('library-shelf');

// Function to create a new book div and add it to the shelf
function addBookToLibrary(name, pages, id, read) {
    const bookDiv = document.getElementById('library-shelf').append('div');
    bookDiv.className = 'book';
    bookDiv.dataset.id = id;

    bookDiv.innerHTML = `
        <h3>${name}</h3>
        <p>Pages: ${pages}</p>
        <p>Status: ${read ? 'Read' : 'Not Read'}</p>
    `;

    libraryShelf.appendChild(bookDiv);
}

// Example: Collect user input and add book
function handleAddBook() {
    const name = prompt('Enter book name:');
    const pages = prompt('Enter number of pages:');
    const id = Date.now(); // Unique id based on timestamp
    const read = confirm('Have you read this book?');

    addBookToLibrary(name, pages, id, read);
}

// Example: Add button to trigger adding books
const addButton = document.createElement('button');
addButton.textContent = 'Add Book';
addButton.onclick = handleAddBook;
document.body.appendChild(addButton);

// Make sure to have a container in your HTML:
// <div id="library-shelf"></div>

// Function to clear the library shelf
function clearLibraryShelf() {
    libraryShelf.innerHTML = '';
    document.getElementById('message').textContent = 'Library shelf cleared.';
}

//A code example from copilot to add books to a library shelf in HTML,
Can be used when I am stuck or neet a reminder.
*/