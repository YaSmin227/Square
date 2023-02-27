

export default function Header({
    heading,
    title
}) {
    return (
        <div className="mb-10">
            <h2 className="flex text-xl  justify-center  #44444F">
                {title}
            </h2>
            <p className="mt-6 text-center  #92929D">
                {heading}
            </p>
        </div>
    )
}