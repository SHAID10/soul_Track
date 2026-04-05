import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Login = () => {
    const [showPwd, setShowPwd] = useState(false);

    return (
        <div className="min-h-[100dvh] flex items-center justify-center bg-[#071912] px-4"
            style={{
                backgroundImage: 'radial-gradient(ellipse 80% 60% at 20% 20%, rgba(46,204,138,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(13,31,26,0.9) 0%, transparent 70%)'
            }}
        >
            <div className="w-full max-w-[380px] bg-[#0D1F1A] border border-[rgba(46,204,138,0.15)] rounded-[20px] p-[44px_36px_36px] shadow-[0_32px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.03)] animate-fade-up">

                <div className="flex justify-center mb-[30px]">
                    <div className="w-16 h-16">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                </div>

                <h1 className="font-sans text-[26px] text-white mb-1.5">Connexion</h1>
                <p className="text-[13px] text-[#7A9088] mb-7">Heureux de vous revoir parmi nous.</p>

                <label className="block text-[12px] font-medium text-[#A8B5B0] mb-2 tracking-[0.3px]">Email</label>
                <div className="flex items-center bg-[#162420] border border-[#2A3D36] rounded-xl px-3.5 h-12 gap-2.5 mb-4 focus-within:border-[rgba(46,204,138,0.5)] focus-within:shadow-[0_0_0_3px_rgba(46,204,138,0.08)] transition-all">
                    <Mail className="text-[#4A6B60] w-4 h-4 shrink-0" />
                    <input type="email" placeholder="votre@email.com" className="flex-1 border-none bg-transparent text-[#E2EDE9] text-[14px] outline-none placeholder-[#4A6B60]" />
                </div>

                <label className="block text-[12px] font-medium text-[#A8B5B0] mb-2 tracking-[0.3px]">Mot de passe</label>
                <div className="flex items-center bg-[#162420] border border-[#2A3D36] rounded-xl px-3.5 h-12 gap-2.5 mb-4 focus-within:border-[rgba(46,204,138,0.5)] focus-within:shadow-[0_0_0_3px_rgba(46,204,138,0.08)] transition-all">
                    <Lock className="text-[#4A6B60] w-4 h-4 shrink-0" />
                    <input type={showPwd ? "text" : "password"} placeholder="••••••••" className="flex-1 border-none bg-transparent text-[#E2EDE9] text-[14px] outline-none placeholder-[#4A6B60]" />
                    <button type="button" onClick={() => setShowPwd(!showPwd)} className="text-[#4A6B60] hover:text-[#2ECC8A] transition-colors shrink-0">
                        {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>

                <div className="flex justify-end mt-[-8px] mb-6">
                    <a href="#" className="text-[12px] text-[#2ECC8A] font-medium hover:underline">Mot de passe oublié ?</a>
                </div>

                <Link to="/">
                    <button className="w-full h-12 bg-[#2ECC8A] text-[#071912] rounded-xl font-semibold text-[15px] hover:bg-[#35aa77] transition-all tracking-[0.2px] mb-[15px] shadow-[0_0_10px_0_rgba(46,204,138,0.25)] active:scale-[0.98]">
                        Se connecter
                    </button>
                </Link>

                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-[#1E3530]" />
                    <span className="text-[11px] text-[#4A6B60] tracking-[0.5px] uppercase">ou</span>
                    <div className="flex-1 h-px bg-[#1E3530]" />
                </div>

                <p className="text-center text-[13px] text-[#7A9088]">
                    Vous n'avez pas de compte ?{' '}
                    <Link to="/sign-up" className="text-[#2ECC8A] font-semibold hover:underline">Créer un compte église</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;
