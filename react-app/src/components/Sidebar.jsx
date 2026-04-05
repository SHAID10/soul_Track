import { Home, Users, Settings, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const getNavClass = ({ isActive }) =>
        `flex items-center gap-4 px-5 py-3.5 mx-4 my-1 rounded-xl font-medium text-[0.95rem] transition-all hover:bg-white/5 hover:translate-x-1 ${isActive
            ? 'text-accent-green bg-accent-green-dim shadow-[inset_4px_0_0_#10B981]'
            : 'text-text-muted hover:text-white'
        }`;

    return (
        <aside className="hidden md:flex w-[260px] bg-[#070d0a]/70 backdrop-blur-[20px] border-r border-white/5 flex-col py-6 fixed h-screen z-10 top-0 left-0">
            <div className="flex items-center gap-3 px-6 mb-10">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,219,122,0.4)] bg-gradient-to-br from-accent-green to-[#03a85f]">
                    <div className="w-3.5 h-3.5 bg-bg-dark rounded-full"></div>
                </div>
                <h1 className="text-xl font-[1000] tracking-[1px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8AA499]">
                    SOULTRACK
                </h1>
            </div>

            <nav className="flex flex-col flex-1">
                <NavLink to="/" className={getNavClass}>
                    <Home className="w-5 h-5" />
                    <span>Accueil</span>
                </NavLink>
                <NavLink to="/membres" className={getNavClass}>
                    <Users className="w-5 h-5" />
                    <span>Membres</span>
                </NavLink>
                <NavLink to="/parametres" className={getNavClass}>
                    <Settings className="w-5 h-5" />
                    <span>Paramètres</span>
                </NavLink>
            </nav>

            <div className="pt-6 border-t border-white/5 mx-4">
                <NavLink to="/login" className="flex items-center gap-4 px-5 py-3.5 my-1 rounded-xl font-medium text-[0.95rem] transition-all text-text-danger hover:bg-white/5 hover:translate-x-1">
                    <LogOut className="w-5 h-5" />
                    <span>Déconnexion</span>
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
