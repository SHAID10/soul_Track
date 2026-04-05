import { Search, SlidersHorizontal, ChevronRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Chip = ({ text, active }) => (
    <button className={`
    border px-4 py-2 rounded-full text-[0.85rem] whitespace-nowrap transition-all
    ${active ? 'bg-accent-green text-white border-accent-green font-semibold' : 'bg-bg-dark border-[#10563f] text-accent-green hover:bg-white/5'}
  `}>
        {text}
    </button>
);

const MemberCard = ({ img, fallback, name, badge, badgeType, phone }) => {
    const badgeClasses = {
        actif: 'bg-accent-green/15 text-accent-green',
        nouveau: 'bg-blue-500/15 text-blue-500',
        inactif: 'bg-white/10 text-text-muted',
    };

    return (
        <div className="bg-[#1E293B]/50 border border-white/5 rounded-[28px] py-3 px-4 flex items-center gap-4 transition-colors hover:bg-white/5 cursor-pointer">
            {img ? (
                <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover bg-[#222]" />
            ) : (
                <div className="w-12 h-12 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center font-semibold text-[1.1rem]">
                    {fallback}
                </div>
            )}
            <div className="flex-1">
                <h4 className="text-[0.95rem] font-semibold mb-1 flex items-center gap-2">
                    {name}
                    {badge && (
                        <span className={`text-[0.65rem] px-2 py-0.5 rounded-[23px] font-bold tracking-wider ${badgeClasses[badgeType]}`}>
                            {badge}
                        </span>
                    )}
                </h4>
                <p className="text-[0.8rem] text-text-muted">{phone}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-text-muted" />
        </div>
    );
};

const Members = () => {
    return (
        <div className="flex flex-col relative min-h-full">
            {/* Search Bar */}
            <div className="bg-accent-green/5 border border-white/5 rounded-[20px] flex items-center px-4 h-12 mb-6 shrink-0">
                <Search className="text-accent-green/60 w-5 h-5 mr-2" />
                <input
                    type="text"
                    className="bg-transparent border-none text-text-main flex-1 text-[0.95rem] outline-none placeholder-text-muted"
                    placeholder="Rechercher un membre"
                />
                <SlidersHorizontal className="ml-3 p-1 w-7 h-7 bg-accent-green/10 rounded-lg text-accent-green cursor-pointer" />
            </div>

            {/* Filter Chips */}
            <div className="flex gap-3 overflow-x-auto pb-2 mb-4 shrink-0 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
                <Chip text="Tous" active />
                <Chip text="Actifs" />
                <Chip text="Nouveaux" />
                <Chip text="Inactifs" />
            </div>

            {/* Member List */}
            <div className="flex flex-col gap-2.5 pb-[90px]">
                <MemberCard img="https://i.pravatar.cc/150?img=11" name="Pierre Mbomba" badge="ACTIF" badgeType="actif" phone="+237 123 456 789" />
                <MemberCard img="https://i.pravatar.cc/150?img=5" name="Marie Mbomba" badge="NOUVEAU" badgeType="nouveau" phone="+237 123 456 789" />
                <MemberCard fallback="AL" name="Antoine Leroy" badge="INACTIF" badgeType="inactif" phone="+237 123 456 789" />
                <MemberCard img="https://i.pravatar.cc/150?img=12" name="Thomas Bernard" badge="ACTIF" badgeType="actif" phone="+237 123 456 789" />
                <MemberCard img="https://i.pravatar.cc/150?img=47" name="Sophie Morel" badge="ACTIF" badgeType="actif" phone="+237 123 456 789" />
            </div>

            {/* Floating Action Button */}
            <Link to="/nouveau-visiteur" className="fixed bottom-[90px] md:bottom-10 md:right-14 right-5 w-14 h-14 bg-accent-green rounded-full flex items-center justify-center z-50 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-transform">
                <UserPlus className="w-6 h-6" />
            </Link>
        </div>
    );
};

export default Members;
