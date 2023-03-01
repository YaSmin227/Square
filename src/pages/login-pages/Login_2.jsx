import React from 'react'
import Header from '../../components/login&signup2/Header'
import Login from '../../components/login&signup2/Login'
import LoginSign_Question from '../../components/login&signup2/loginSign_Question'
const Login_2 = () => {
    return (
        <div className='bg-[#FAFAFB] dark:bg-[#13131A] w-full h-[100%] py-16 flex items-center justify-center flex-col gap-4'>
            <Header
                title="Sign In"
                heading="Just sign in if you have an account in here. Enjoy our Website"
            />
            <Login/>
            <LoginSign_Question
                link='/signup'
                question='Can’t login ? '
                link_text='Sign up for new user?' />
        </div>
    )
}
export default Login_2
