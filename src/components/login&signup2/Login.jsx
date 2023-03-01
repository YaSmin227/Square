import { useState } from 'react';
import { ActionButton } from './ActionButton';
import { loginFields } from "./FromFeildes";
import Input from "./Input";
import ExtraActions from './Remember&Forgepass'


const fields = loginFields;
let feildsIdState = {};
// get object of inputs id,s text
fields.forEach(field => feildsIdState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(feildsIdState);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    return (
        <form className="mt-2 max-[576px]:mt-1 bg-white dark:bg-[#1C1C24] dark:text-[#FAFAFB] p-7 rounded-3xl  w-[540px] max-[576px]:w-[90%] flex flex-col  justify-center gap-3 " onSubmit={(e) => e.preventDefault()}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />

                    )
                }
            </div>
            <ExtraActions />
            <ActionButton type='submit' text='Login' />
            
        </form>
    )
}