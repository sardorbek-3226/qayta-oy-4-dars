import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Home = ({ books, deleteBook }) => {
  const [counts, setCounts] = useState({});
  const [likedBooks, setLikedBooks] = useState({}); // like holatlari

  const handleAdd = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleSubtract = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  const handleClick = () => {
    toast.success("Kitob savatga qo‘shildi");
  };

  const toggleLike = (id) => {
    setLikedBooks((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <ul className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-around container pt-16 pb-16'>
      {books.map((book) => {
        const count = counts[book.id] || 0;
        const isLiked = likedBooks[book.id] || false;

        return (
          <li key={book.id} className='hover:scale-105 transition-all ease-linear duration-150 gap-5'>
            <div className=' max-w-[450px] shadow-2xl shadow-white/5 rounded-xl text-center '>
              <div className='w-[350px] h-[350px] mx-auto p-3 rounded-xl overflow-hidden shadow-lg relative'>
                <img
                  
                  className=' w-full h-full object-cover opacity-50 transition-all hover:scale-120 duration-500 ease-in-out hover:rotate-[5deg] hover:opacity-100'
                  src={book.image}
                  alt={book.title}
                />
                
                <span
                  className='absolute top-2 right-4 text-2xl cursor-pointer'
                  onClick={() => toggleLike(book.id)}
                >
                  {isLiked ? (
                    <FaHeart className='text-red-500 transition-colors duration-300' />
                  ) : (
                    <FaRegHeart className='text-gray-400 transition-colors duration-300' />
                  )}
                </span>
              </div>
              <h1 className='text-[25px] font-bold pt-2'>{book.title}</h1>
              <h3 className='text-2xl font-semibold pt-2'>{book.author}</h3>
              <h5 className='text-xl font-medium pt-2 pb-2'>{book.genre}</h5>

              <div className='flex items-center container justify-between flex-col space-y-3 '>
                <div className='flex items-center gap-10'>
                  <div className='ml-3'>
                    <h2 className="line-through text-red-500 text-xl pr-10 mb-1">${book.price}</h2>
                    <h1 className="text-white/80 font-bold text-2xl pl-5 mb-1">${book.discountPrice}</h1>
                  </div>

                  <div className='flex items-center gap-3'>
                    <button className='btn btn-primary btn-sm' onClick={() => handleSubtract(book.id)} disabled={count === 0}>&minus;</button>
                    <h1 className='text-xl select-none'>{count}</h1>
                    <button className='btn btn-primary btn-sm' onClick={() => handleAdd(book.id)}>&#43;</button>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4 space-y-2 pb-2'>
                  <button className="btn btn-outline btn-sm btn-primary px-8 " onClick={() => deleteBook(book.id)}>Delete</button>
                  {count > 0 && (
                    <button className='btn btn-primary btn-sm mb-2' onClick={handleClick}>Buy</button>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
