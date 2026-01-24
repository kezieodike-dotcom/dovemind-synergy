
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
    <div className="section-padding px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 md:mb-24">
        <div className="max-w-2xl">
          <h1 className="hero font-black leading-tight tracking-tight text-slate-900">
            Our Dedicated <span className="text-primary italic">Experts</span>
          </h1>
          <p className="prose-p text-slate-600 font-medium mt-6">
            Meet the professionals committed to ethical, confidential, and evidence-based psychological support for Nigeria.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn btn-secondary text-slate-700 bg-slate-50 hover:bg-slate-100 border-slate-200">View Certifications</button>
          <button className="btn btn-primary bg-primary-teal border-transparent">Join Our Team</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {experts.map((e, i) => (
          <div key={i} className="group bg-white p-5 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <div className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${e.image})` }}></div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-primary-teal text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
                <span className="material-symbols-outlined !text-[14px]">verified</span> VERIFIED
              </div>
            </div>
            <h3 className="h4 font-bold mb-1 text-slate-900">{e.name}</h3>
            <p className="text-primary-teal text-[10px] font-black uppercase tracking-widest mb-3">{e.role}</p>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">{e.desc}</p>
            <div className="flex flex-wrap gap-2">
              {e.tags.map((t, j) => (
                <span key={j} className="px-3 py-1.5 bg-slate-50 text-[10px] font-black text-slate-600 rounded-lg border border-slate-100 uppercase tracking-wider">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
