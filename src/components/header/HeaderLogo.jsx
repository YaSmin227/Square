import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-blue.png';
import darklogo from '../../assets/logo-white.png';

const HeaderLogo = () => {
  return (
    <Link to="/" className='flex items-center gap-2'>
      <img src={logo} alt="logo" width={30} height={30} className="dark:brightness-0 dark:invert-[1] duration-300" />
      <span className='font-bold'>Square</span>
    </Link>
  )
}

export default HeaderLogo