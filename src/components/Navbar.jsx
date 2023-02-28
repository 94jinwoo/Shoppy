import React from 'react';
import { Link } from 'react-router-dom';
import { FcShop } from 'react-icons/fc';
import { login, logout, onUserStateChange } from '../api/firebase';
import { useState, useEffect } from 'react';
import User from './User';
import Button from './ui/Button';

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
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
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
