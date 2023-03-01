function ExtraActions() {
    return (
        <div className="flex items-center justify-between mb-2 ">
            <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm max-[500px]:text-xs  text-gray-900">
                    Remember Me
                </label>
            </div>

            <div className="text-sm">
                <a href="#" className="font-medium max-[576px]:text-xs text-[#50B5FF] ">
                    Forgot your password?
                </a>
            </div>
        </div>

    )
}

export default ExtraActions