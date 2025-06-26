import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
  <div className='bg-black/10 shadow-2xl shadow-white/5'>
      <div className='container py-5 flex items-center justify-between'>
      <img className='w-52 cursor-pointer max-[500px]:w-40' src="/logo.svg" alt="logo" />
  <div className='flex items-center gap-10 max-[460px]:gap-5'>
    <Link to="/" className="text-[28px] font-semibold hover:border-b transition-all duration-200 ease-linear">Home</Link>
    <Link to="/about" className="text-[28px] font-semibold hover:border-b transition-all duration-200 ease-linear">About</Link>
  </div>
      </div>
      

    </div>
  </>
);

export default Navbar;
