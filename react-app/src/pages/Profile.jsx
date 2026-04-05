import { Pencil, Save, Settings as SettingsIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="flex flex-col max-w-xl mx-auto w-full md:pt-4">

            <div className="flex justify-center my-6 relative w-max mx-auto">
                <img
                    src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                    alt="Church Image"
                    className="w-[140px] h-[140px] rounded-full object-cover border-2 border-accent-green/30"
                />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer hover:scale-110 transition-transform">
                    <Pencil className="w-3.5 h-3.5" />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-[0.85rem] font-semibold mb-2">Nom de l'Église</label>
                <input
                    type="text"
                    className="w-full bg-[#1E293B]/50 border border-white/5 rounded-xl py-3.5 px-4 text-text-main text-[0.95rem] outline-none focus:border-accent-green transition-colors"
                    defaultValue="Living Fire Ministry"
                />
            </div>

            <div className="mb-6">
                <label className="block text-[0.85rem] font-semibold mb-2">Message SMS automatisé</label>
                <textarea
                    className="w-full h-[120px] resize-none bg-[#1E293B]/50 border border-white/5 rounded-xl py-3.5 px-4 text-text-main text-[0.95rem] outline-none focus:border-accent-green transition-colors"
                    placeholder="Écrivez le message de bienvenue pour vos visiteurs..."
                />
                <p className="text-[0.75rem] text-text-muted mt-2 leading-[1.4]">
                    Ce message sera envoyé automatiquement après l'enregistrement d'un nouveau visiteur.
                </p>
            </div>

            <button className="bg-accent-green text-[#070D0A] font-semibold p-4 rounded-xl w-full h-[60px] flex items-center justify-center gap-2 mt-6">
                <Save className="w-5 h-5" /> Sauvegarder les modifications
            </button>

            <Link to="/parametres" className="flex items-center justify-between min-w-[30px] py-3 text-white border-t border-white/5 mt-6 hover:bg-white/5 rounded-lg px-2 transition-colors">
                <div className="flex items-center gap-4">
                    <SettingsIcon className="w-5 h-5 text-text-muted" />
                    <span className="font-medium text-[0.95rem]">Paramètres avancés</span>
                </div>
                <ChevronRight className="w-5 h-5 text-text-muted" />
            </Link>

            <Link to="/login" className="mt-6 mb-6">
                <button className="bg-transparent border border-[#da4e4e67] text-text-danger font-semibold py-4 rounded-[182px] w-full text-center hover:bg-[#da4e4e67] transition-colors">
                    Déconnexion
                </button>
            </Link>

        </div>
    );
};

export default Profile;
