function TopSection() {
    return (
        <div className="bg-lime-400 h-3/5 w-screen gap-x-28 space-x-3 self-center flex justify-center align-middle items-center">
            <div className="">
                <h1 className="text-left text-8xl font-serif font-bold">Next-Shop</h1>
                <h2 className="text-left text-2xl font-serif font-bold">The best way to shop online</h2>
            </div>

            <div className="rounded-3xl border-gray-50 overflow-hidden border-4 h-2/5 w-2/5">
                <img src="cutePenguinArt_transparent.png"/>
            </div>

            <div className="m-auto">
                <h1 className="text-left text-2xl font-bold mb-4">Unser Angebot</h1>
                <ul className="border-l-8 p-1.5 border-gray-50">
                    <li className="mb-6 text-left text-xl font-semibold ">Für jeden was dabei</li>
                    <li className="mb-6 text-left text-xl font-semibold ">Regelmäßige updates</li>
                    <li className="text-left text-xl font-semibold">Open Source</li>
                </ul>
            </div>
        </div>
    )
}

export default TopSection;