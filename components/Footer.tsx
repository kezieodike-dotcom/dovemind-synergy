import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="/logo.png" alt="DovesMind Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black text-primary tracking-tight leading-none uppercase font-playfair">DovesMind<br />Synergy</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-xs mb-10">
              Nigeria's premier psychological support and substance abuse prevention center. Ethical care, global standards.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm"><span className="material-symbols-outlined !text-[24px]">public</span></a>
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm"><span className="material-symbols-outlined !text-[24px]">group</span></a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-10 uppercase text-[10px] tracking-[0.25em]">Navigation Hub</h4>
            <ul className="space-y-5 text-sm font-bold text-slate-600">
              <li><Link to="/" className="hover:text-primary transition-colors">About DovesMind Synergy</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Services Overview</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Connect with a Psychologist</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Training Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-10 uppercase text-[10px] tracking-[0.25em]">Trust & Compliance</h4>
            <ul className="space-y-5 text-sm font-bold text-slate-600">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Confidentiality & Ethics Statement</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Support Helpline</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-10 uppercase text-[10px] tracking-[0.25em]">Contact Details</h4>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Regional Office</span>
                <p className="text-sm font-bold text-slate-700 leading-relaxed uppercase">Lagos, Nigeria, West Africa</p>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Electronic Mail</span>
                <p className="text-sm font-bold text-primary">hello@dovesmind.ng</p>
              </div>
              <div className="pt-6 border-t border-slate-50">
                <span className="text-[10px] font-black uppercase text-brand-green tracking-widest block mb-2">Live Support Line</span>
                <p className="text-xl font-black text-slate-900 tracking-tight">0800-DOVES-HELP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">
            © {new Date().getFullYear()} DovesMind Synergy. All Professional Standards Reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-green !text-[18px]">verified_user</span>
            <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">
              Clinical Data Protection Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
