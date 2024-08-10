const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        date: "1960",
        reviews: "A novel of warmth and humor despite dealing with serious issues of rape and racial inequality."
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        date: "1949",
        reviews: "A novel that delves into the dangers of totalitarianism and extreme political ideology."
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        date: "1813",
        reviews: "A classic novel of manners that explores the concerns and difficulties of genteel women living in early 19th century England."
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Tragedy",
        date: "1925",
        reviews: "A novel about the American dream and the disillusionment that can follow its pursuit."
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: "Adventure",
        date: "1851",
        reviews: "An epic tale of the voyage of the whaling ship Pequod, led by Captain Ahab and his obsessive quest to kill the white whale, Moby Dick."
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Historical Fiction",
        date: "1869",
        reviews: "A novel that intertwines the lives of private and public individuals during the time of the Napoleonic wars."
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        date: "1951",
        reviews: "A novel about teenage rebellion and angst, focusing on the life of Holden Caulfield."
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        date: "1937",
        reviews: "A fantasy novel that sets the stage for the epic Lord of the Rings trilogy."
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        genre: "Gothic Fiction",
        date: "1847",
        reviews: "A novel about the experiences of the eponymous orphaned girl, including her growth to adulthood and her love for Mr. Rochester."
    },
    {
        title: "The Odyssey",
        author: "Homer",
        genre: "Epic",
        date: "8th Century BC",
        reviews: "An epic poem that follows the adventures of Odysseus as he returns home after the Trojan War."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById('book-list');
    const bookDetails = document.getElementById('book-details');

    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.textContent = book.title;
        bookItem.addEventListener('click', () => showBookDetails(index));
        bookList.appendChild(bookItem);
    });

    function showBookDetails(index) {
        const book = books[index];
        bookDetails.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Date of Publishing:</strong> ${book.date}</p>
            <p><strong>Reviews:</strong> ${book.reviews}</p>
        `;
    }
});
