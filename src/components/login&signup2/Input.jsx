const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:z-10 text-sm sm:text-sm"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass
}) {
    return (
        <div className="py-5 relative">
            <label htmlFor={labelFor} className="text-[12px]   text-[#50B5FF] bg-white px-2  absolute top-2 left-2 z-20 ">
                {labelText}
            </label>
            <input 
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass }
                placeholder={placeholder}
            />
        </div>
    )
}