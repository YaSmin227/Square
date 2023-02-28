import React from 'react'
import { signupFields } from './FromFeildes'
import Input from './Input';
import { ActionButton } from './ActionButton';
import LoginSign_Question from './loginSign_Question';
const fields = signupFields;
export const Signup = () => {
    console.log(fields);
    return (
        <form className="mt-8 ">
            <div className=''>
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            labelText={field.labelText}
                            id={field.is}
                            name={field.name}
                            placeholder={field.placeholder}
                            isRequired={field.isRequired}
                            type={field.type}
                        />
                    )
                }
            </div>
            <ActionButton type='submit' text='Get Started' />
            <LoginSign_Question
                link='/login'
                question='Already have an Square account ?' 
                link_text='Log in'/>
        </form>
    )
}
