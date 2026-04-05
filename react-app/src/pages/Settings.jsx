import { Bell, Mail, Lock, Fingerprint, HelpCircle, MessageSquare, ExternalLink, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Toggle = ({ isOn, onToggle }) => (
    <div
        onClick={onToggle}
        className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${isOn ? 'bg-accent-green' : 'bg-white/10'}`}
    >
        <div className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform ${isOn ? 'translate-x-5' : ''}`} />
    </div>
);

const SettingItem = ({ icon: Icon, title, desc, rightElement, hasGreenIcon }) => (
    <div className="bg-[#1E293B]/50 rounded-2xl p-4 flex items-center justify-between hover:bg-[#1E293B]/70 transition-colors cursor-pointer">
        <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${hasGreenIcon ? 'bg-accent-green/15 text-accent-green' : 'bg-white/5 text-accent-green'}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="text-[0.95rem] font-medium">{title}</h4>
                {desc && <p className="text-[0.75rem] text-text-muted mt-1">{desc}</p>}
            </div>
        </div>
        {rightElement}
    </div>
);

const Settings = () => {
    const [pushEnabled, setPushEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(true);
    const [bioEnabled, setBioEnabled] = useState(true);

    return (
        <div className="flex flex-col max-w-xl mx-auto w-full md:pt-4">

            <div className="mb-8">
                <div className="text-[0.75rem] text-text-muted uppercase tracking-[1px] mb-3 font-semibold">NOTIFICATIONS</div>
                <div className="flex flex-col gap-2">
                    <SettingItem
                        icon={Bell} title="Alertes Push" desc="Activités en temps réel" hasGreenIcon
                        rightElement={<Toggle isOn={pushEnabled} onToggle={() => setPushEnabled(!pushEnabled)} />}
                    />
                    <SettingItem
                        icon={Mail} title="Rapports Hebdo" desc="Résumé par e-mail" hasGreenIcon
                        rightElement={<Toggle isOn={emailEnabled} onToggle={() => setEmailEnabled(!emailEnabled)} />}
                    />
                </div>
            </div>

            <div className="mb-8">
                <div className="text-[0.75rem] text-text-muted uppercase tracking-[1px] mb-3 font-semibold">SÉCURITÉ</div>
                <div className="flex flex-col gap-2">
                    <SettingItem
                        icon={Lock} title="Changer le mot de passe"
                        rightElement={<ChevronRight className="w-5 h-5 text-text-muted" />}
                    />
                    <SettingItem
                        icon={Fingerprint} title="Authentification Biométrique"
                        rightElement={<Toggle isOn={bioEnabled} onToggle={() => setBioEnabled(!bioEnabled)} />}
                    />
                </div>
            </div>

            <div className="mb-8">
                <div className="text-[0.75rem] text-text-muted uppercase tracking-[1px] mb-3 font-semibold">SUPPORT</div>
                <div className="flex flex-col gap-2">
                    <SettingItem
                        icon={HelpCircle} title="Centre d'aide"
                        rightElement={<ExternalLink className="w-5 h-5 text-text-muted" />}
                    />
                    <SettingItem
                        icon={MessageSquare} title="Contacter l'équipe"
                        rightElement={<ChevronRight className="w-5 h-5 text-text-muted" />}
                    />
                </div>
            </div>

            <Link to="/login" className="w-full">
                <button className="bg-transparent border border-[#da4e4e67] text-text-danger font-semibold py-4 rounded-[182px] w-full text-center mt-2 hover:bg-[#da4e4e67] transition-colors">
                    Déconnexion
                </button>
            </Link>

            <p className="text-center text-text-muted text-[0.75rem] mt-6 pb-8">Version 1.0 (SoulTrack)</p>

        </div>
    );
};

export default Settings;
