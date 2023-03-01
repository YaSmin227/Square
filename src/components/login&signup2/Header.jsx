

export default function Header({
    heading,
    title
}) {
    return (
        <div className="my-3 ">
            <h2 className="flex text-5xl max-[576px]:text-2xl justify-center text-[#44444F]  ">
                {title}
            </h2>
            <p className="mt-6 text-center text-sm max-[576px]:text-xs max-[576px]:px-2	text-[#92929D] ">
                {heading}
            </p>
        </div>
    )
}