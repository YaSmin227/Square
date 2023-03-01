import React from 'react'
import { Signup } from '../../components/login&signup2/Signup'
import Header from '../../components/login&signup2/Header'
import LoginSign_Question from '../../components/login&signup2/loginSign_Question'

 const Signup_2 = () => {
  return (
    <div className='bg-[#FAFAFB] dark:bg-[#13131A] w-full h-[100%] py-16 flex items-center justify-center flex-col gap-4'>
    <Header
    title='Sign Up'
    heading='Let’s Sign up first for enter into Square Website. Uh She Up!'
    />
    <Signup/>
      <LoginSign_Question
        link='/login'
        question='Already have an Square account ?'
        link_text='Log in' />
    </div>
  )
}

export default Signup_2