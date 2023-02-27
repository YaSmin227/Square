import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.png';

const Logo = () => {
  return (
    <Link to='/' className="logo flex items-center gap-2">
      <img src={logo} alt="logo" width={42} height={42} />
      <span className='text-white font-semibold text-lg'>Square</span>
    </Link>
  )
}

export default Logo