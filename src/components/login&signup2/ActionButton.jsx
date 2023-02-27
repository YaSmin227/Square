import React from 'react'

export const ActionButton = ({ text ,type }) => {
    return (
        <>
            <button className='w-full bg-[#0062FF] text-white px-9 py-2 rounded-xl text-center' type={type}>{text}</button>
        </>
    )
}
