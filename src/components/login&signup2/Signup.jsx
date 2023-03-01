import React, { useState } from 'react'
import { signupFields } from './FromFeildes'
import Input from './Input';
import { ActionButton } from './ActionButton';
import LoginSign_Question from './loginSign_Question';
const fields = signupFields;
export const Signup = () => {
    // get all inputs id,s 
    let fieldInputsIds = {}
    fields.forEach(field => { fieldInputsIds[field.id] = '' });
    const [signUpState, setSignUpState] = useState(fieldInputsIds)
    const handelChange = (e) => {
        setSignUpState({ ...signUpState, [e.target.id]: e.target.value })
    }
    console.log(fields);
    return (
        <form className="mt-2 max-[576px]:mt-1 bg-white dark:bg-[#1C1C24] dark:text-[#FAFAFB] p-7 rounded-3xl  w-[540px] max-[576px]:w-[90%] flex flex-col  justify-center gap-3 " onSubmit={(e) => e.preventDefault()}>
            <div className=''>
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handelChange}
                            value={signUpState[field.id]}
                            labelText={field.labelText}
                            id={field.id}
                            name={field.name}
                            placeholder={field.placeholder}
                            isRequired={field.isRequired}
                            type={field.type}
                        />
                    )
                }
            </div>
            <ActionButton type='submit' text='Get Started' />
            
        </form>
    )
}
