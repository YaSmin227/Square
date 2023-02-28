

export default function Header({
    heading,
    title
}) {
    return (
        <div className="my-10 ">
            <h2 className="flex text-xl text-5xl justify-center text-[#44444F]  ">
                {title}
            </h2>
            <p className="mt-6 text-center text-sm	text-[#92929D] ">
                {heading}
            </p>
        </div>
    )
}