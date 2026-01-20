
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointment: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    specialist: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const specialists = [
    { name: 'Dr. Amina Okoro', role: 'Clinical Psychologist', price: '₦25,000' },
    { name: 'Dr. Samuel Okafor', role: 'Substance Specialist', price: '₦20,000' },
    { name: 'Bose Adebayo', role: 'Health Counselor', price: '₦15,000' },
    { name: 'Dr. Olumide Adebayo', role: 'Senior Psychiatrist', price: '₦30,000' }
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => navigate('/confirmation'), 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Book Your Session</h1>
        <div className="flex items-center justify-center gap-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                {s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 rounded ${step > s ? 'bg-primary' : 'bg-slate-100'}`}></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden p-8 md:p-12">
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold">Select Specialist & Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialists.map((s, i) => (
                <label key={i} className={`relative flex flex-col p-6 rounded-2xl border-2 cursor-pointer transition-all ${formData.specialist === s.name ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-slate-200'}`}>
                  <input 
                    type="radio" 
                    name="specialist" 
                    className="hidden" 
                    value={s.name}
                    checked={formData.specialist === s.name}
                    onChange={(e) => setFormData({...formData, specialist: e.target.value})}
                  />
                  <span className="text-lg font-bold text-slate-900">{s.name}</span>
                  <span className="text-xs font-bold text-primary-teal uppercase tracking-widest mt-1">{s.role}</span>
                  <span className="text-primary font-black mt-3">{s.price} <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">/ Session</span></span>
                </label>
              ))}
            </div>
            <button 
              disabled={!formData.specialist}
              onClick={handleNext}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:brightness-110 disabled:grayscale transition-all shadow-xl shadow-primary/20"
            >
              Continue to Schedule
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-bold">Choose Date & Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Pick a Date</label>
                <input 
                  type="date" 
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Available Slots</label>
                <div className="grid grid-cols-3 gap-2">
                  {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((t) => (
                    <button 
                      key={t}
                      onClick={() => setFormData({...formData, time: t})}
                      className={`py-3 text-xs font-bold rounded-lg transition-all ${formData.time === t ? 'bg-primary text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={handleBack} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all">Back</button>
              <button 
                disabled={!formData.date || !formData.time}
                onClick={handleNext}
                className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold hover:brightness-110 disabled:grayscale transition-all shadow-xl shadow-primary/20"
              >
                Confirm Personal Details
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-bold">Your Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Full Legal Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Chukwudi Adamu"
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@email.com"
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+234..."
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            </div>
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-sm mb-3">Booking Summary</h4>
              <div className="flex justify-between items-center text-sm font-medium text-slate-600">
                <span>{formData.specialist} - {formData.time}</span>
                <span className="font-black text-slate-900">{formData.date}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={handleBack} type="button" className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all">Back</button>
              <button 
                type="submit"
                className="flex-[2] bg-brand-green text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl shadow-brand-green/20"
              >
                Secure Booking & Pay
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
