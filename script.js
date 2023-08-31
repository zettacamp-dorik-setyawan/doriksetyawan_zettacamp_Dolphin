// kode dalam blok akan di jalankan ketika halaman web telah di muat
document.addEventListener('DOMContentLoaded', () => {
    // mengambil elemen kemudian disimpan dalam bookForm
    const bookForm = document.getElementById('book-form');
    // cek apakah ada buku dalam lokal storage
    const books = JSON.parse(localStorage.getItem('books')) || [];

    


    // function untuk menampilkan buku dalam tabel
function displayBooks() {
    const bookTableBody = document.getElementById('book-table-body');
    // menghapus semua konten yang ada dalam tabel body
    bookTableBody.innerHTML = ''; 
    // loop yang mana indeknya sebagai argumen
    books.forEach((book, index) => {
        // membuat elemen row
        const row = document.createElement('tr');

        // membuat sel
        const titleCell = document.createElement('td');
        titleCell.textContent = book.title;
        row.appendChild(titleCell);
        
        const totalcountCell = document.createElement('td');
        totalcountCell.textContent = book.totalcount;
        row.appendChild(totalcountCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = book.description;
        row.appendChild(descriptionCell);

        // membuat button action edit dan delete
        const actionsCell = document.createElement('td');
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Edit';
        updateButton.classList.add('update-button');
        updateButton.setAttribute('data-index', index);
        actionsCell.appendChild(updateButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-index', index);
        actionsCell.appendChild(deleteButton);

        // menambahkan sel yang berisi tombol "Update" dan "Delete" ke dalam baris buku
        row.appendChild(actionsCell);

        // menambahkan row kedalam tabel body
        bookTableBody.appendChild(row);
    });
}

    // fungsi menambah buku
    function addBook(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const totalcount = document.getElementById('totalcount').value;
        const author = document.getElementById('author').value;
        const description = document.getElementById('description').value;
        const book = { title,totalcount, author,description };
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        displayBooks();
        bookForm.reset();
    }

    // fungsi delete buku
    function deleteBook(index) {
        books.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(books));
        displayBooks();
    }

    // untuk menjalankan submit
    bookForm.addEventListener('submit', addBook);

    // Event delegation for update and delete buttons
document.getElementById('book-table').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        const index = event.target.getAttribute('data-index');
        deleteBook(index);
    } else if (event.target.classList.contains('update-button')) {
        const index = event.target.getAttribute('data-index');
        updateBook(index);
    }
});



// Function to update a book
function updateBook(index) {
    // Get the row associated with the book to update
    const row = document.querySelectorAll('#book-table-body tr')[index];

    // Get the table cells for title, total count, author, and description
    const titleCell = row.querySelector('td:nth-child(1)');
    const totalCountCell = row.querySelector('td:nth-child(2)');
    const authorCell = row.querySelector('td:nth-child(3)');
    const descriptionCell = row.querySelector('td:nth-child(4)');

    // Create input fields for updating book details
    const updatedTitleInput = document.createElement('input');
    updatedTitleInput.type = 'text';
    updatedTitleInput.value = titleCell.textContent;

    const updatedTotalCountInput = document.createElement('input');
    updatedTotalCountInput.type = 'text';
    updatedTotalCountInput.value = totalCountCell.textContent;

    const updatedAuthorInput = document.createElement('input');
    updatedAuthorInput.type = 'text';
    updatedAuthorInput.value = authorCell.textContent;

    const updatedDescriptionInput = document.createElement('input');
    updatedDescriptionInput.type = 'text';
    updatedDescriptionInput.value = descriptionCell.textContent;

    // Replace the text content of the cells with input fields
    titleCell.textContent = '';
    titleCell.appendChild(updatedTitleInput);

    totalCountCell.textContent = '';
    totalCountCell.appendChild(updatedTotalCountInput);

    authorCell.textContent = '';
    authorCell.appendChild(updatedAuthorInput);

    descriptionCell.textContent = '';
    descriptionCell.appendChild(updatedDescriptionInput);

    // Create a Save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('save-button');
    saveButton.setAttribute('data-index', index);

    // Replace the Update button with the Save button
    const actionsCell = row.querySelector('td:nth-child(5)');
    actionsCell.textContent = '';
    actionsCell.appendChild(saveButton);

    // Add a click event listener to the Save button
    saveButton.addEventListener('click', () => {
        // Get the updated values from the input fields
        const updatedTitle = updatedTitleInput.value;
        const updatedTotalCount = updatedTotalCountInput.value;
        const updatedAuthor = updatedAuthorInput.value;
        const updatedDescription = updatedDescriptionInput.value;

        // Update the book object in the array
        books[index] = {
            title: updatedTitle,
            totalcount: updatedTotalCount,
            author: updatedAuthor,
            description: updatedDescription,
        };

        // Update Local Storage
        localStorage.setItem('books', JSON.stringify(books));

        // Refresh the displayed books
        displayBooks();
    });
}

// Menambahkan event listener untuk tombol "Clear Local Storage"
document.getElementById('clear-localstorage-button').addEventListener('click', () => {
    // Menghapus semua item dari localStorage
    localStorage.clear();
    
    // Selain menghapus dari localStorage, Anda mungkin juga ingin menghapus dari array "books" jika diperlukan.
    books.length = 0; // Menghapus semua elemen dari array books.

    // Memanggil displayBooks() untuk mereset tampilan tabel (jika diperlukan)
    displayBooks();
});

    // Initial display of books
    displayBooks();
});
