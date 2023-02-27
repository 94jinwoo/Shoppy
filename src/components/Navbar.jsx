import React from 'react';
import { Link } from 'react-router-dom';
import { FcShop } from 'react-icons/fc';
import { login, logout, onUserStateChange } from '../api/firebase';
import { useState, useEffect } from 'react';
import User from './User';

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

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
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logut</button>}
      </nav>
    </header>
  );
}
