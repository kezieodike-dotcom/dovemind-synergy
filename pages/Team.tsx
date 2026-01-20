
import React from 'react';

const Team: React.FC = () => {
  const experts = [
    {
      name: "Dr. Amina Okoro",
      role: "Clinical Psychologist",
      desc: "Specializing in trauma-informed care and recovery with over 15 years of experience.",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800",
      tags: ["PhD Psychology", "MCPAN"]
    },
    {
      name: "Dr. Samuel Okafor",
      role: "Substance Specialist",
      desc: "Expert in addiction prevention and holistic rehabilitation programs for urban communities.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
      tags: ["MD Psychiatry", "ICAP"]
    },
    {
      name: "Bose Adebayo",
      role: "Health Counselor",
      desc: "Dedicated to adolescent mental health support and building resilience in schools.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      tags: ["MSc Counseling", "Mentor"]
    },
    {
      name: "Chinedu Ibe",
      role: "Senior Psychiatrist",
      desc: "Clinical lead for psychiatric evaluations and medication management strategies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      tags: ["MBBS, FRCPsych", "20+ Yrs"]
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16">
        <div className="max-w-2xl">
          <h1 className="text-[#1a2b3c] text-3xl md:text-5xl font-black leading-tight tracking-tight">
            Our Dedicated <span className="text-primary">Experts</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed mt-4 md:mt-6">
            Meet the professionals committed to ethical, confidential, and evidence-based psychological support for Nigeria.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-200 transition-all text-xs md:text-sm uppercase tracking-widest whitespace-nowrap">View Certifications</button>
          <button className="bg-primary-teal text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-teal-500/20 hover:brightness-110 transition-all text-xs md:text-sm uppercase tracking-widest whitespace-nowrap">Join Our Team</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {experts.map((e, i) => (
          <div key={i} className="group bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden rounded-2xl mb-5">
              <div className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${e.image})` }}></div>
              <div className="absolute bottom-3 right-3 bg-gradient-to-r from-primary to-primary-teal text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <span className="material-symbols-outlined !text-[14px] fill-1">verified</span> VERIFIED
              </div>
            </div>
            <h3 className="text-[#1a2b3c] text-lg font-bold mb-1">{e.name}</h3>
            <p className="text-primary-teal text-[10px] font-black uppercase tracking-widest mb-3">{e.role}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">{e.desc}</p>
            <div className="flex flex-wrap gap-2">
              {e.tags.map((t, j) => (
                <span key={j} className="px-2.5 py-1 bg-blue-50 text-[10px] font-bold text-primary rounded border border-blue-100 uppercase">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
