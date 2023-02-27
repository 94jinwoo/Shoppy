import React from 'react';
import { Link } from 'react-router-dom';
import { FcShop } from 'react-icons/fc';

export default function Header() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FcShop />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Product</Link>
        <Link to='/carts'>Cart</Link>
        <Link to='/products/new'>New</Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
