import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';

const App = () => {
  const [books] = useState(
    [
      {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Historical Fiction",
        "image": "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        "price": 19.99,
        "discountPrice": 14.99
      },
      {
        "id": 2,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Romance",
        "image": "https://covers.openlibrary.org/b/id/8091016-L.jpg",
        "price": 17.99,
        "discountPrice": 12.99
      },
      {
        "id": 3,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "genre": "Adventure",
        "image": "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        "price": 21.99,
        "discountPrice": 15.49
      },
      {
        "id": 4,
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "genre": "Historical",
        "image": "https://covers.openlibrary.org/b/id/8101343-L.jpg",
        "price": 24.99,
        "discountPrice": 18.99
      },
      {
        "id": 5,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "genre": "Fiction",
        "image": "https://covers.openlibrary.org/b/id/8231856-L.jpg",
        "price": 16.99,
        "discountPrice": 11.99
      },
      {
        "id": 6,
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "genre": "Philosophical",
        "image": "https://covers.openlibrary.org/b/id/8279251-L.jpg",
        "price": 20.99,
        "discountPrice": 14.99
      },
      {
        "id": 7,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "image": "https://covers.openlibrary.org/b/id/6979861-L.jpg",
        "price": 22.99,
        "discountPrice": 16.99
      },
      {
        "id": 8,
        "title": "Jane Eyre",
        "author": "Charlotte Brontë",
        "genre": "Romance",
        "image": "https://covers.openlibrary.org/b/id/8221256-L.jpg",
        "price": 18.99,
        "discountPrice": 13.49
      },
      {
        "id": 9,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "genre": "Science Fiction",
        "image": "https://covers.openlibrary.org/b/id/8774294-L.jpg",
        "price": 19.49,
        "discountPrice": 13.99
      },
      {
        "id": 10,
        "title": "Little Women",
        "author": "Louisa May Alcott",
        "genre": "Fiction",
        "image": "https://covers.openlibrary.org/b/id/8235267-L.jpg",
        "price": 17.49,
        "discountPrice": 12.49
      },
      {
        "id": 11,
        "title": "Wuthering Heights",
        "author": "Emily Brontë",
        "genre": "Gothic",
        "image": "https://covers.openlibrary.org/b/id/8236057-L.jpg",
        "price": 18.49,
        "discountPrice": 13.99
      },
      {
        "id": 12,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Adventure",
        "image": "https://covers.openlibrary.org/b/id/8105321-L.jpg",
        "price": 20.00,
        "discountPrice": 14.50
      },
      {
        "id": 13,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "image": "https://covers.openlibrary.org/b/id/7352163-L.jpg",
        "price": 28.99,
        "discountPrice": 21.99
      },
      {
        "id": 14,
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "genre": "Drama",
        "image": "https://covers.openlibrary.org/b/id/8232077-L.jpg",
        "price": 23.99,
        "discountPrice": 17.99
      },
      {
        "id": 15,
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "genre": "Philosophical",
        "image": "https://covers.openlibrary.org/b/id/8165696-L.jpg",
        "price": 19.99,
        "discountPrice": 14.99
      },
      {
        "id": 16,
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "genre": "Horror",
        "image": "https://covers.openlibrary.org/b/id/8228698-L.jpg",
        "price": 18.49,
        "discountPrice": 13.49
      },
      {
        "id": 17,
        "title": "The Odyssey",
        "author": "Homer",
        "genre": "Epic",
        "image": "https://covers.openlibrary.org/b/id/8231997-L.jpg",
        "price": 21.99,
        "discountPrice": 15.99
      },
      {
        "id": 18,
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "genre": "Satire",
        "image": "https://covers.openlibrary.org/b/id/8232231-L.jpg",
        "price": 24.99,
        "discountPrice": 18.49
      },
      {
        "id": 19,
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "genre": "Science Fiction",
        "image": "https://covers.openlibrary.org/b/id/7884863-L.jpg",
        "price": 19.49,
        "discountPrice": 14.49
      },
      {
        "id": 20,
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "genre": "Drama",
        "image": "https://covers.openlibrary.org/b/id/8162584-L.jpg",
        "price": 26.99,
        "discountPrice": 19.99
      },
      {
        "id": 21,
        "title": "Dracula",
        "author": "Bram Stoker",
        "genre": "Horror",
        "image": "https://covers.openlibrary.org/b/id/8232481-L.jpg",
        "price": 17.99,
        "discountPrice": 12.49
      },
      {
        "id": 22,
        "title": "The Kite Runner",
        "author": "Khaled Hosseini",
        "genre": "Drama",
        "image": "https://covers.openlibrary.org/b/id/8228692-L.jpg",
        "price": 18.99,
        "discountPrice": 13.99
      },
      {
        "id": 23,
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "genre": "Dystopian",
        "image": "https://covers.openlibrary.org/b/id/8232397-L.jpg",
        "price": 20.49,
        "discountPrice": 15.49
      },
      {
        "id": 24,
        "title": "The Book Thief",
        "author": "Markus Zusak",
        "genre": "Historical Fiction",
        "image": "https://covers.openlibrary.org/b/id/8235287-L.jpg",
        "price": 21.99,
        "discountPrice": 16.49
      },
      {
        "id": 25,
        "title": "The Fault in Our Stars",
        "author": "John Green",
        "genre": "Romance",
        "image": "https://covers.openlibrary.org/b/id/8229110-L.jpg",
        "price": 18.49,
        "discountPrice": 13.49
      },
      {
        "id": 26,
        "title": "Twilight",
        "author": "Stephenie Meyer",
        "genre": "Fantasy",
        "image": "https://covers.openlibrary.org/b/id/8232399-L.jpg",
        "price": 19.99,
        "discountPrice": 14.49
      },
      {
        "id": 27,
        "title": "The Maze Runner",
        "author": "James Dashner",
        "genre": "Science Fiction",
        "image": "https://covers.openlibrary.org/b/id/8235412-L.jpg",
        "price": 19.49,
        "discountPrice": 13.99
      },
      {
        "id": 28,
        "title": "Dune",
        "author": "Frank Herbert",
        "genre": "Science Fiction",
        "image": "https://covers.openlibrary.org/b/id/8235423-L.jpg",
        "price": 24.49,
        "discountPrice": 18.99
      }
    ]
  );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
