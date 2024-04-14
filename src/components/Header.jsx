import React from 'react';
import './header.css';
import Logo from './Logo';
import User from './User';

function Header() {
  return (
    <>
      <header id='head' className='head  d-flex justify-content-between align-items-center'>
        <Logo />
        <User />
      </header>
    </>
  )
}

export default Header
