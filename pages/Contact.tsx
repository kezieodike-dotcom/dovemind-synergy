
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-primary py-20 px-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Contact DovesMind</h1>
          <p className="text-xl text-white/80 font-medium">Whether you're a school, a corporation, or an individual, we're here to help.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-10 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
            <h2 className="text-2xl font-bold mb-8">Send an Enquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Your Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Email</label>
                  <input type="email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Request Type</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                  <option>Individual Support</option>
                  <option>School Prevention Program</option>
                  <option>Corporate Wellness Workshop</option>
                  <option>Community Advocacy Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Message</label>
                <textarea rows={5} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="Tell us more about your needs..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:brightness-110 transition-all uppercase tracking-widest text-sm">
                Submit Request
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Lagos Office</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Victoria Island, Lagos, Nigeria.<br/>
                Mon-Fri: 9am - 6pm
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <span className="material-symbols-outlined">call</span>
                +234 806 344 5268
              </div>
            </div>
            <div className="bg-brand-green rounded-3xl p-8 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">Emergency?</h3>
              <p className="text-white/80 text-sm mb-4">If you are in immediate crisis, please call our 24/7 dedicated helpline.</p>
              <div className="text-2xl font-black">0800-DOVES-HELP</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
