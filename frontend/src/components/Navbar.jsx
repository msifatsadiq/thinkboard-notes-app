import { PlusCircleIcon } from "lucide-react"
import { Link } from "react-router"

const Navbar = () => {
    return (
        <header className="bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#232526] shadow-lg border-b border-transparent">
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-mono drop-shadow-lg select-none">
                    ThinkBoard
                </h1>
                <div className="flex items-center gap-3">
                    <Link
                        to="/create"
                        className="group relative flex items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 hover:scale-105 transition-transform duration-200 shadow-lg"
                        aria-label="Create New Note"
                    >
                        <span className="flex items-center justify-center bg-[#181c24] rounded-full p-3 transition-colors duration-200 group-hover:bg-transparent">
                            <PlusCircleIcon className="size-6 text-cyan-400 group-hover:text-white transition-colors duration-200" />
                        </span>
                    </Link>
                    <span className="text-base font-medium text-gray-200 tracking-wide opacity-80 select-none">
                        New Note
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Navbar