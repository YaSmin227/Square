import React from 'react';
import { InputOne, Logo, SocialButton } from '../../components';
import google from "../../assets/Google.png";
import fb from "../../assets/FB.png";
import { Link } from 'react-router-dom';

const login = () => {
  return (
    <div className='bg-[#0062FF] dark:bg-[#13131A] w-full h-[100vh] flex items-center justify-center flex-col gap-4'>
      <Logo />
      <form onSubmit={(e) => { e.preventDefault() }} className="form dark:text-[#FAFAFB] bg-slate-100 dark:bg-[#1C1C24] w-[345px] p-6 rounded-2xl flex flex-col items-center justify-center gap-3">
        <h2 className='text-lg '>Login to your acount</h2>
        <InputOne type={"text"} placeHolder={"Your Email"} />
        <InputOne type={"password"} placeHolder={"Your Password"} />
        <button type='submit' className='w-full bg-[#0062FF] text-white px-9 py-2 rounded-xl text-start'>Continue</button>
        <h5 className='text-xs text-[#92929D]'>OR</h5>
        <SocialButton image={google} text={"Continue with Google"} />
        <SocialButton image={fb} text={"Continue with Facebook"} />
        <div className="w-full bg-[#D8D8D8] dark:bg-[#44444F] h-0.5 rounded-full"></div>
        <div className="flex gap-2 text-[#0062FF] dark:text-[#FAFAFB] items-center justify-center mt-4 text-xs">
          <Link to="/">Can’t login?</Link>
          <span className='bg-[#0062FF] dark:bg-[#FAFAFB] w-1 h-1 rounded-full'></span>
          <Link to="/signup">Sign up for new user?</Link>
        </div>
      </form>
    </div>
  )
}

export default login