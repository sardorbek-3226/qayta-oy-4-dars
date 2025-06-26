import React from 'react';
const topBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Historical Fiction",
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    price: 19.99,
    discountPrice: 14.99
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    price: 17.99,
    discountPrice: 12.99
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    price: 22.99,
    discountPrice: 16.99
  },
  {
    id: 4,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Romance",
    image: "https://covers.openlibrary.org/b/id/8221256-L.jpg",
    price: 18.99,
    discountPrice: 13.49
  },
  {
    id: 5,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    image: "https://covers.openlibrary.org/b/id/7352163-L.jpg",
    price: 28.99,
    discountPrice: 21.99
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    image: "https://covers.openlibrary.org/b/id/8105321-L.jpg",
    price: 20.00,
    discountPrice: 14.50
  },
  {
    id: 7,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "Drama",
    image: "https://covers.openlibrary.org/b/id/8232077-L.jpg",
    price: 23.99,
    discountPrice: 17.99
  },
  {
    id: 8,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    image: "https://covers.openlibrary.org/b/id/8228698-L.jpg",
    price: 18.49,
    discountPrice: 13.49
  },
  {
    id: 9,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Philosophical",
    image: "https://covers.openlibrary.org/b/id/8165696-L.jpg",
    price: 19.99,
    discountPrice: 14.99
  },
  {
    id: 10,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical",
    image: "https://covers.openlibrary.org/b/id/8279251-L.jpg",
    price: 20.99,
    discountPrice: 14.99
  },
  {
    id: 11,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    price: 16.99,
    discountPrice: 11.99
  },
  {
    id: 12,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Drama",
    image: "https://covers.openlibrary.org/b/id/8228692-L.jpg",
    price: 18.99,
    discountPrice: 13.99
  }
];

const About = () => (
     <>
     <h1 className='text-[36px] text-center font-bold italic text-white/80 mt-4'>The best books I have read.</h1>
     <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-around container pt-16 pb-16'>
    {topBooks.map((book)=>{
      return (
        <li key={book.id} className='hover:scale-105 transition-all ease-linear duration-150 gap-5'>
            <div className='max-w-[450px] shadow-2xl shadow-white/5 rounded-xl text-center '>
            <img className='w-[350px] h-[350px] mx-auto p-3 rounded-xl ' src={book.image} alt={book.title} />
            <h1 className='text-[25px] font-bold  pt-2'>{book.title}</h1>
            <h3 className='text-2xl font-semibold pt-2'>{book.author}</h3>
            <h5 className='text-xl font-medium pt-2 pb-2'>{book.genre}</h5>
            <div className='flex items-center gap-10 justify-center'>
            <div className=''>
              <h2 className="line-through text-red-500 text-xl pr-10 mb-1">${book.price}</h2>
              <h1 className="text-white/80 font-bold text-2xl pl-5 mb-1">${book.discountPrice}</h1>
            </div>
            <button className="btn btn-outline btn-primary px-8">Buy</button>
            </div>
            </div>
        </li>
      )
    })}
  </ul>
     </>
);

export default About;
