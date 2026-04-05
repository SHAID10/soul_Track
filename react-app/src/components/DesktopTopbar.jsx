import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesktopTopbar = ({ greeting = "Bonjour" }) => {
    return (
        <header className="hidden md:flex justify-between items-start mb-10 w-full">
            <div className="flex flex-col">
                <h2 className="text-[1.75rem] font-[1000] mb-1.5">{greeting}</h2>
                <p className="text-white text-[0.95rem] font-medium">Voici l'état de votre communauté aujourd'hui.</p>
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

export default DesktopTopbar;
