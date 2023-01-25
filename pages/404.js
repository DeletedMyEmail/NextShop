function NotFoundPage() {
    return (
        <div className="w-screen h-screen flex justify-center align-middle text-center items-center bg-white font-sans">
            <div className="items-center flex">
                <h1 className="text-4xl font-bold text-gray-800 pr-4 border-r-2 border-gray-400 inline-block">404</h1>
                <h1 className="text-2xl font-semibold text-gray-600 pl-4 inline-block">Page not found</h1>
            </div>
        </div>
    )
}

export default NotFoundPage