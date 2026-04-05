import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import SoulPP from '../assets/SoulPP.png';

const MobileHeader = () => {
    return (
        <header className="flex md:hidden justify-between items-center mb-3 shrink-0">
            <div className="flex items-center gap-2.5">
                <img src={SoulPP} alt="SoulTrack Logo" className="w-8 h-8 rounded-full" />
                <h1 className="text-[1.15rem] font-[800] tracking-[1px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8AA499]">
                    SOULTRACK
                </h1>
            </div>
            <Link to="/profil-eglise">
                <button className="w-11 h-11 bg-bg-card border border-border-color rounded-full flex items-center justify-center relative transition-colors hover:bg-bg-card-hover text-white">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2.5 right-3 w-2 h-2 bg-accent-green rounded-full border-2 border-bg-card"></span>
                </button>
            </Link>
        </header>
    );
};

export default MobileHeader;
