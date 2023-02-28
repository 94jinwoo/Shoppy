import React from 'react';
import { Link } from 'react-router-dom';
import { FcShop } from 'react-icons/fc';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FcShop />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Product</Link>
        {user && <Link to='/carts'>Cart</Link>}

        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <BsFillPencilFill />
          </Link>
        )}

        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
