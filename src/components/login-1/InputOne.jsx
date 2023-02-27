import React, { useState } from 'react';
import { EyeSlash } from 'iconsax-react';

const InputOne = ({ type, placeHolder, icon, setPassword }) => {
  const [showPass, setShowPass] = useState(false);
  const showPassword = () => {
    const element = document.getElementById("password");
    element.type === "password" ?
      (element.type = "text",
        setShowPass(true)) :
      (element.type = "password",
        setShowPass(false));
  }
  return (
    <div className={`w-full ${icon && "relative"}`}>
      {type === "password" ?
        <input type={type} id="password" placeholder={placeHolder} className='bg-[#FAFAFB] dark:bg-[#292932] dark:border-none border-[2px] border-[#F1F1F5] w-full rounded-xl p-2 duration-500 outline-none focus:border-[#0062FF]' onChange={(e) => setPassword(e.target.value)} /> :
        <input type={type} placeholder={placeHolder} className='bg-[#FAFAFB] dark:bg-[#292932] dark:border-none border-[2px] border-[#F1F1F5] w-full rounded-xl p-2 duration-500 outline-none focus:border-[#0062FF]' />
      }
      {type === "password" &&
        <button className='absolute right-3 top-[50%] translate-y-[-50%] duration-300' onClick={showPassword}>
          {showPass ?
            <EyeSlash size="16" color="#B5B5BE" /> :
            icon}
        </button>
      }
    </div>
  )
}

export default InputOne