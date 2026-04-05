import { Phone, ChevronDown, Image as ImageIcon, ChevronRight, UserPlus } from 'lucide-react';
import { useState } from 'react';

const NewVisitor = () => {
    const [stayChecked, setStayChecked] = useState(true);

    return (
        <div className="flex flex-col max-w-xl mx-auto w-full md:pt-4">

            <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                    <label className="block text-[0.85rem] font-semibold mb-2">Nom</label>
                    <input type="text" className="w-full bg-[#1E293B]/50 border border-white/5 rounded-xl py-3.5 px-4 text-text-main text-[0.95rem] outline-none focus:border-accent-green transition-colors" placeholder="Ex: Diop" />
                </div>
                <div>
                    <label className="block text-[0.85rem] font-semibold mb-2">Prénom</label>
                    <input type="text" className="w-full bg-[#1E293B]/50 border border-white/5 rounded-xl py-3.5 px-4 text-text-main text-[0.95rem] outline-none focus:border-accent-green transition-colors" placeholder="Ex: Jean" />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-[0.85rem] font-semibold mb-2">Téléphone</label>
                <div className="relative flex items-center">
                    <Phone className="absolute left-4 text-text-muted w-5 h-5" />
                    <input type="tel" className="w-full bg-[#1E293B]/50 border border-white/5 rounded-xl py-3.5 pl-12 pr-4 text-text-main text-[0.95rem] outline-none focus:border-accent-green transition-colors" placeholder="Ex: +237 620 154 897" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                    <label className="block text-[0.85rem] font-semibold mb-2">Sexe</label>
                    <div className="relative flex items-center">
                        <select className="w-full bg-[#1E293B]/50 border border-white/5 rounded-xl py-3.5 px-4 pr-10 appearance-none text-text-main text-[0.95rem] outline-none focus:border-accent-green transition-colors">
                            <option value="">Choisir...</option>
                            <option value="H">Homme</option>
                            <option value="F">Femme</option>
                        </select>
                        <ChevronDown className="absolute right-4 text-text-muted w-5 h-5 pointer-events-none" />
                    </div>
                </div>
                <div>
                    <label className="block text-[0.85rem] font-semibold mb-2">Quartier</label>
                    <input type="text" className="w-full bg-[#1E293B]/50 border border-white/5 rounded-xl py-3.5 px-4 text-text-main text-[0.95rem] outline-none focus:border-accent-green transition-colors" placeholder="Ex: Odza" />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-[0.85rem] font-semibold mb-2">Sujet de prière</label>
                <textarea className="w-full h-[120px] resize-none bg-[#1E293B]/50 border border-white/5 rounded-xl py-3.5 px-4 text-text-main text-[0.95rem] outline-none focus:border-accent-green transition-colors" placeholder="Comment pouvons-nous prier pour vous ?"></textarea>
            </div>

            <label className="bg-[#1E293B] border border-accent-green/10 rounded-2xl p-4 flex items-center gap-3 cursor-pointer mt-2 mb-4 w-full">
                <input
                    type="checkbox"
                    checked={stayChecked}
                    onChange={(e) => setStayChecked(e.target.checked)}
                    className="hidden"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${stayChecked ? 'bg-white border-white' : 'border-text-muted bg-transparent'}`}>
                    {stayChecked && <span className="w-2.5 h-2.5 bg-[#1E293B] rounded-full shrink-0 block" />}
                </div>
                <span className="text-[0.95rem] font-medium">J'aimerais rester</span>
            </label>

            <button className="bg-bg-dark border border-white/5 rounded-2xl p-4 flex items-center gap-4 mb-4 hover:bg-white/5 transition-colors w-full text-left">
                <div className="w-10 h-10 bg-accent-yellow-dim text-accent-yellow rounded-full flex items-center justify-center shrink-0">
                    <ImageIcon className="w-5 h-5" />
                </div>
                <span className="flex-1 text-[0.95rem] font-semibold">Ajouter une photo</span>
                <ChevronRight className="w-5 h-5 text-text-muted" />
            </button>

            <button className="bg-accent-green text-[#070D0A] font-semibold p-4 rounded-xl w-full h-[60px] flex items-center justify-center gap-2 mt-2">
                <UserPlus className="w-5 h-5" /> Enregistrer
            </button>

        </div>
    );
};

export default NewVisitor;
