import React from 'react';

const Home = ({ books }) => {
  
 
  return (
    <ul className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-around container pt-16 pb-16'>
    {books.map((book)=>{
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
            <button className="btn btn-outline btn-primary px-8"   >Buy</button>
            </div>
        
            </div>
           
        </li>
        
      )
    })}
  </ul>
  );
};

export default Home;
