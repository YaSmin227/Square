import React from 'react'
import { NavLink } from 'react-router-dom'
import { DarkMode } from '../components/sidebar'

const Sidebar = () => {
  return (
    <aside
      className='border-r-[1px] duration-300 h-[calc(100vh-70px)] 
    border-r-slate-200 dark:bg-[#1C1C24] dark:border-[#292932] dark:text-slate-100'
    >
      <nav className='h-[calc(100%-40px)]'>
        <NavLink to='/'>Home </NavLink>
        <NavLink to='login'>Login </NavLink>
        <NavLink to='signup'>Signup </NavLink>
      </nav>
      <div className="flex items-center justify-center mt-2">
        <DarkMode />
      </div>
    </aside>
  )
}

export default Sidebar