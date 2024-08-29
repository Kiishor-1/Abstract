import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';

export default function Navbar() {
    return (
        <div className="bg-black text-white sticky top-0 z-[100]">
            <nav className="max-w-[1450px] mx-auto py-2 flex justify-between mx-2 items-center">
                <Link to={"/"} className="flex items-center gap-0"> 
                    <div className="px-3 lg:border-r-2 flex items-center gap-2">
                        <div className="rounded-md overflow-hidden">
                        <img src={Logo} className="h-[25px] w-[25px]" alt="" />
                        </div>
                        <span className="hidden lg:block">Abstract</span></div>
                    <div className="px-3 hidden lg:block">Help Center</div>
                </Link>
                <Link to="/create-card">
                    <button className="border border-slate-400 rounded-md text-sm py-1 px-4 min-w-[140px]">
                        Submit a request
                    </button>
                </Link>
            </nav>
        </div>
    );
}

