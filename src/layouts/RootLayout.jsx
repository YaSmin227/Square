import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from "../layout";


const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-6">
        <Sidebar />
        <main
          className='bg-[#FAFAFB] dark:bg-[#13131A] dark:text-slate-100 
          p-6 grid col-span-5 duration-300'
        >
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default RootLayout