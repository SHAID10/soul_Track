import { Home, Users, Settings, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
    // We use standard react-router-dom logic for active states.
    const getNavClass = ({ isActive }) => {
        const baseClass = "flex flex-col gap-1.5 items-center justify-center flex-1 transition-transform";
        // If active, hide the span completely.
        return isActive ? `${baseClass} text-white` : `${baseClass} text-white`;
    };

    const IconWrapper = ({ Icon, isActive }) => {
        if (isActive) {
            return (
                <Icon className="bg-accent-green text-white w-6 h-6 p-[14px] box-content rounded-full -translate-y-6 border-[6px] border-[#f2f7f5] transition-all duration-[900ms] ease-in-out" />
            );
        }
        return <Icon className="w-6 h-6 text-white" />;
    };

    return (
        <nav className="flex md:hidden fixed bottom-4 left-4 right-4 h-[70px] bg-[#1a222c] rounded-[35px] justify-around items-center z-[100] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <NavLink to="/" className={getNavClass} end>
                {({ isActive }) => (
                    <>
                        <IconWrapper Icon={Home} isActive={isActive} />
                        {!isActive && <span className="text-[0.65rem] font-semibold text-white">Accueil</span>}
                    </>
                )}
            </NavLink>
            <NavLink to="/membres" className={getNavClass}>
                {({ isActive }) => (
                    <>
                        <IconWrapper Icon={Users} isActive={isActive} />
                        {!isActive && <span className="text-[0.65rem] font-semibold text-white">Membres</span>}
                    </>
                )}
            </NavLink>
            <NavLink to="/parametres" className={getNavClass}>
                {({ isActive }) => (
                    <>
                        <IconWrapper Icon={Settings} isActive={isActive} />
                        {!isActive && <span className="text-[0.65rem] font-semibold text-white">Paramètres</span>}
                    </>
                )}
            </NavLink>
            <NavLink to="/profil-eglise" className={getNavClass}>
                {({ isActive }) => (
                    <>
                        <IconWrapper Icon={User} isActive={isActive} />
                        {!isActive && <span className="text-[0.65rem] font-semibold text-white">Profil</span>}
                    </>
                )}
            </NavLink>
        </nav>
    );
};

export default BottomNav;
