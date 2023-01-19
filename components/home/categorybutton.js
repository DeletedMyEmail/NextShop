import Link from "next/link";

function CategoryButton(args) {
    return (
        <Link className="w-1/4 h-3/5 p-2 items-center justify-center align-middle overflow-visible gap-x-10 justify-between flex transform transition duration-500 hover:scale-110" href="/category/development">
            {args.icon}
            <div>
                <h2 className="text-gray-500 text-xl font-medium">{args.category}</h2>
                <div className="text-gray-400 font-normal">{args.description}</div>
            </div>
        </Link>
    )
}

export default CategoryButton