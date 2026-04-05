import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import DesktopTopbar from './DesktopTopbar';
import BottomNav from './BottomNav';

const Layout = () => {
    const location = useLocation();

    // Custom greeting logic based on path
    let greeting = "Bonjour";
    if (location.pathname.includes("membres")) {
        greeting = "Membres";
    } else if (location.pathname.includes("parametres")) {
        greeting = "Paramètres";
    } else if (location.pathname.includes("profil")) {
        greeting = "Profil";
    }

    return (
        <div className="flex flex-col md:flex-row bg-transparent min-h-[100dvh] text-text-main w-full overflow-hidden md:overflow-x-hidden md:overflow-y-auto">
            <Sidebar />

            <div className="flex-1 flex flex-col md:ml-[260px] p-4 md:py-10 md:px-14 md:max-w-[1400px] w-full mx-auto md:mx-0 h-[100dvh] md:h-auto overflow-hidden md:overflow-visible pb-0 md:pb-10">
                <MobileHeader />

                {/* On mobile: specific page header */}
                <div className="flex md:hidden shrink-0 mb-3 flex-col">
                    <h2 className="text-[1.35rem] font-bold mb-0.5">{greeting}</h2>
                    <p className="text-text-muted text-[0.8rem] mb-3">Voici l'état de votre communauté aujourd'hui.</p>
                </div>

                <DesktopTopbar greeting={greeting} />

                {/* Scrollable container for page content on mobile, relative on desktop */}
                <div className="flex-1 overflow-hidden flex flex-col pb-[80px] md:pb-0">
                    <div className="flex-1 overflow-y-auto w-full pr-1">
                        <Outlet />
                    </div>
                </div>
            </div>

            <BottomNav />
        </div>
    );
};

export default Layout;
