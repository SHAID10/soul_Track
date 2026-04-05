import { TrendingUp, TrendingDown, UserPlus, ClipboardList, ChevronRight } from 'lucide-react';

const MetricCard = ({ title, value, trend, trendUp, fullWidthMobile }) => (
    <div className={`
    bg-[#1E293B]/80 backdrop-blur-[12px] border border-[#334155] rounded-[24px] 
    p-3.5 md:p-6 flex justify-between min-h-[70px] md:min-h-[120px] relative overflow-hidden 
    transition-all duration-[400ms] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,219,122,0.08)] 
    hover:border-[currentColor] hover:border-accent-green/30
    before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r 
    before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 
    hover:before:opacity-100 before:transition-opacity
    ${fullWidthMobile ? 'col-span-2 md:col-span-1 flex-row md:flex-col items-center md:items-stretch !p-2.5 px-4 md:py-6' : 'flex-col'}
  `}>
        <h3 className={`text-text-muted text-[0.65rem] md:text-xs font-semibold uppercase tracking-wide ${fullWidthMobile ? 'mb-0 md:mb-4' : 'mb-1.5 md:mb-4'}`}>
            {title}
        </h3>
        <div className={`flex justify-between items-end ${fullWidthMobile ? 'gap-3 items-center md:items-end' : ''}`}>
            <span className="text-[1.4rem] md:text-4xl font-bold leading-none">{value}</span>
            <span className={`flex items-center text-[0.85rem] font-semibold gap-0.5 ${trendUp ? 'text-accent-green' : 'text-text-danger'}`}>
                {trendUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {trend}
            </span>
        </div>
    </div>
);

const AlertCard = ({ icon: Icon, title, desc, green, yellow }) => (
    <div className={`
    bg-[#1E293B] border rounded-2xl p-2 md:px-5 md:py-4 shrink-0 flex items-center gap-4 transition-all 
    cursor-pointer hover:bg-white/5 hover:translate-x-1 hover:shadow-lg hover:border-white/10
    ${green ? 'border-accent-green/40 shadow-[0_0_20px_rgba(0,219,122,0.05)]' : 'border-white/5'}
  `}>
        <div className={`
      w-9 md:w-12 h-9 md:h-12 rounded-full flex items-center justify-center shrink-0
      ${green ? 'bg-accent-green-dim text-accent-green' : ''}
      ${yellow ? 'bg-accent-yellow-dim text-accent-yellow' : ''}
    `}>
            <Icon className="w-4 md:w-5 h-4 md:h-5" />
        </div>
        <div className="flex-1">
            <h4 className="text-[0.85rem] md:text-[0.95rem] font-semibold mb-1">{title}</h4>
            <p className="text-[0.8rem] text-text-muted">{desc}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-text-muted" />
    </div>
);

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-3 md:gap-8 flex-1 overflow-hidden h-full">
            {/* Metrics Section */}
            <section className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-5 shrink-0">
                <MetricCard title="VISITEURS (SEMAINE)" value="42" trend="5%" trendUp />
                <MetricCard title="TAUX CONV." value="12%" trend="11%" trendUp />
                <MetricCard title="VISITEURS (MOIS)" value="156" trend="2%" trendUp={false} fullWidthMobile />
            </section>

            {/* Chart and Alerts Grid */}
            <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr] flex-1 gap-3 md:gap-7 overflow-hidden h-full min-h-0">

                {/* Growth Chart Panel */}
                <div className="flex-[0.8] md:flex-auto min-h-0 bg-[#1E293B]/60 backdrop-blur-[12px] border border-white/5 rounded-3xl p-3 md:p-6 flex flex-col transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                    <div className="flex justify-between items-center mb-1 md:mb-6">
                        <h2 className="text-[1.15rem] font-semibold">Croissance — 7 derniers jours</h2>
                        <div className="text-text-muted text-[0.85rem] cursor-pointer bg-white/5 px-3 py-1.5 rounded-lg transition-colors hover:bg-white/10 hover:text-white">
                            Ce mois ▾
                        </div>
                    </div>
                    <div className="w-full flex-1 min-h-[100px]">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 600 160" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#1fdb7a" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#1fdb7a" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <line x1="0" y1="40" x2="600" y2="40" stroke="#2a3f32" strokeWidth="1" />
                            <line x1="0" y1="80" x2="600" y2="80" stroke="#2a3f32" strokeWidth="1" />
                            <line x1="0" y1="120" x2="600" y2="120" stroke="#2a3f32" strokeWidth="1" />
                            <path d="M0,130 C80,100 120,60 180,50 C240,40 280,70 340,55 C400,40 440,20 500,30 C540,36 570,50 600,45 L600,160 L0,160 Z" fill="url(#chartGrad)" />
                            <path d="M0,130 C80,100 120,60 180,50 C240,40 280,70 340,55 C400,40 440,20 500,30 C540,36 570,50 600,45" fill="none" stroke="#1fdb7a" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="0" cy="130" r="4" fill="#1fdb7a" />
                            <circle cx="100" cy="80" r="4" fill="#1fdb7a" />
                            <circle cx="200" cy="50" r="4" fill="#1fdb7a" />
                            <circle cx="300" cy="60" r="4" fill="#1fdb7a" />
                            <circle cx="400" cy="40" r="4" fill="#1fdb7a" />
                            <circle cx="500" cy="30" r="4" fill="#1fdb7a" />
                            <circle cx="600" cy="45" r="5" fill="#1fdb7a" stroke="#0a0f0d" strokeWidth="2" />
                            <text x="5" y="155" fill="#5a7a65" fontSize="11" fontFamily="inherit">Lun</text>
                            <text x="95" y="155" fill="#5a7a65" fontSize="11" fontFamily="inherit">Mar</text>
                            <text x="193" y="155" fill="#5a7a65" fontSize="11" fontFamily="inherit">Mer</text>
                            <text x="293" y="155" fill="#5a7a65" fontSize="11" fontFamily="inherit">Jeu</text>
                            <text x="393" y="155" fill="#5a7a65" fontSize="11" fontFamily="inherit">Ven</text>
                            <text x="492" y="155" fill="#5a7a65" fontSize="11" fontFamily="inherit">Sam</text>
                            <text x="585" y="155" fill="#5a7a65" fontSize="11" fontFamily="inherit">Dim</text>
                        </svg>
                    </div>
                </div>

                {/* Alerts Section */}
                <section className="flex-1 flex flex-col min-h-0">
                    <div className="flex justify-between items-center mb-2 md:mb-5 shrink-0">
                        <h2 className="text-[1.15rem] font-semibold">Alertes récentes</h2>
                        <div className="text-accent-green text-[0.85rem] font-medium cursor-pointer">Voir tout</div>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-4 overflow-y-auto pb-2 flex-1">
                        <AlertCard
                            icon={UserPlus}
                            title="3 nouveaux visiteurs"
                            desc="À contacter pour suivi de bienvenue"
                            green
                        />
                        <AlertCard
                            icon={ClipboardList}
                            title="Rappel pipeline"
                            desc="Marie L. attend une réponse"
                            yellow
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Dashboard;
