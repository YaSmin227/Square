import React from 'react'

export const loginSign_Question = () => {
  return (
    <>
          <div className="flex gap-2 text-[#0062FF] dark:text-[#FAFAFB] items-center justify-center mt-4 text-xs">
              <Link to="/">Can’t login?</Link>
              <span className='bg-[#0062FF] dark:bg-[#FAFAFB] w-1 h-1 rounded-full'></span>
              <Link to="/signup">Sign up for new user?</Link>
          </div>
    </>
  )
}
