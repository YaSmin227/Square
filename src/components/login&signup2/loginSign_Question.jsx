import React from 'react'
import { Link } from 'react-router-dom'
const LoginSign_Question = ({
  link_text,
  link,
  question
}) => {
  return (
    <>
      <div className="flex gap-2 text-[#0062FF] dark:text-[#FAFAFB] items-center justify-center mt-4 text-xs">
        <Link to="/">{question}</Link>
        <Link to={link}>{link_text}</Link>
      </div>
    </>
  )
}

export default LoginSign_Question