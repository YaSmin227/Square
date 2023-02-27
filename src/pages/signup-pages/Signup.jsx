import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputOne, Logo, SocialButton } from '../../components';
import google from "../../assets/Google.png";
import { Eye } from 'iconsax-react';
import PasswordStrengthBar from 'react-password-strength-bar';

const Signup = () => {
  const [password, setPassword] = useState('')
  const handleSignup = (e) => {
    e.preventDefault();
  }
  return (
    <div className='bg-[#0062FF] dark:bg-[#13131A] w-full h-[100vh] flex items-center justify-center flex-col gap-4'>
      <Logo />
      <form onSubmit={(e) => handleSignup(e)} className="form bg-slate-100 dark:text-[#FAFAFB] dark:bg-[#1C1C24] w-[345px] p-6 rounded-2xl flex flex-col items-center justify-center gap-3">
        <h2 className='text-lg '>Sign Up to your acount</h2>
        <InputOne type={"text"} placeHolder={"Your Email"} />
        <InputOne type={"text"} placeHolder={"Your Name"} />
        <InputOne type={"password"} setPassword={setPassword} placeHolder={"Your Password"} icon={<Eye size="16" color="#B5B5BE" />} />
        <PasswordStrengthBar className='password-strength' password={password} minLength={8} style={{ width: "100%", padding: "0 5px" }} scoreWordClassName="password-score" />
        <button type='submit' className='w-full bg-[#0062FF] text-white px-9 py-2 rounded-xl text-start'>Register</button>
        <h5 className='text-xs text-[#92929D]'>OR</h5>
        <SocialButton image={google} text={"Continue with Google"} />
        <div className="w-full bg-[#D8D8D8] dark:bg-[#44444F h-0.5 rounded-full"></div>
        <div className="flex gap-2 text-[#0062FF] dark:text-[#FAFAFB] items-center justify-center mt-4 text-xs">
          <Link to="/login">Already have an Square account? Log in</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup