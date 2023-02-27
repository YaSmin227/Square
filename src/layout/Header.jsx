import React, { useState } from 'react'
import { HeaderLogo } from '../components/header';

const Header = () => {
  return (
    <header
      className='border-b-[1px] h-[70px] duration-300
    dark:bg-[#1C1C24] border-b-slate-200 dark:border-[#292932] dark:text-slate-50'
    >
      <div className="flex justify-between items-center h-full px-4">
        <div className="logo">
          <HeaderLogo />
        </div>
        <div className="items-container">
        </div>
      </div>
    </header>
  )
}

export default Header