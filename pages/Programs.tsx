
import React from 'react';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
  const tracks = [
    {
      title: "School Prevention Programs",
      tag: "Education",
      desc: "Comprehensive substance abuse education and mental wellness training for primary and secondary schools. We focus on early intervention.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYFOmvKuNQ2b1anWqSdJhZFMq-1HxSIYWP1AwQ3dEG8yTTsrV3d2Koihb71ThTfNk_-A_ReMPOeaR5azeutxyJy-3O-7wLvy8zb2F41iXLPPE0fqIYVx8aNv42M1KqAB46nzQw5eo37AlSLgMkBKWEw2UU5jVH0kgJ4qkS0_7_trFnZ8nIBZ_LliC2cUMMtk7FHJPIsF44Pi6u9MYQVq_L-mV2HrwLi-V4Y3r8AP33g81gImEHoi1cbPvfAyiwulDhiPQe8Y-p4PI",
      features: ["Drug Abuse Awareness Modules", "Teacher/Counselor Training"]
    },
    {
      title: "Corporate Mental Health",
      tag: "Corporate",
      desc: "Tailored workplace wellness workshops focusing on burnout prevention, stress management, and emotional intelligence for leadership and staff.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVrjlMC7fiMOrDQAwBXdN0MIKsqhIwFsYi7N7fBiRFRLgPPOQ97iBT2cT3QNEcoS2-ZITLeL4egWKgZuWHYt0DEarjeaMa-drVsDgbNjqahX9wi1u5P4HwCRLeMDZEuIyrJJerNaK8DgizZN-vDSaiR0mfpp7dMB82rFV1ZTkNXkBx_Xr2mgqLev2ozjYjfvqmGMeiPLJ5s6nGYtR7yW-WKhoqtRI0tp-QLAooKNUeaUazn1z-UTMpz3wN2fB-7ZIxkBIc7EuWBxM",
      features: ["Burnout & Stress Management", "Emotional Resilience Workshops"]
    },
    {
      title: "Community Awareness",
      tag: "Community",
      desc: "Partnering with NGOs and grassroots organizations to deliver large-scale public health campaigns and advocacy for mental health policy changes.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf42BqYIsm_EhVJP2SgtG-4kYM5nAmvNb8N4Etb-S_tNzT9i8btNo8UCoDqakDlTt23nA2sgukAUFLufYtUN3ongFzGwLCoAigGv2yqI7KYqKbiIxEz_EQjLo0q81IN6QuQFyem_NdM2UiElyPn_YVbUD9TyV1ehg-ZIvZIczleptBIJbOXNsnmxeV08LEQXSW6GqEvVdrycUITgQiN3h0yE5yRApMLWhn4N391mq3xuD7aC1CiyO7S45P-ijeZxtRJ9f5LJ9-nMI",
      features: ["Grassroots Outreach Programs", "NGO Capacity Building"]
    }
  ];

  return (
    <div className="flex flex-col w-full pb-12 md:pb-20">
      <section className="section-padding px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-[1240px] mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-primary min-h-[450px] flex items-center shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6B44WpOUxLY0pgR7eD9pJI9OypjYpeILMJm-lFSTTMb9JYSNPRfCCcKP32L7BmcXQa8C7McAClP77OfJQ_WT7DByx7sVo0yTII8aswe8ZCIq14rGCnq4gy0Q2wjSwv3ZOG2d0XesMqx56Ts4Rwq3pKyXHtmZ-9GPADi64DcPZQ0NK0af7yAgL_tW3PDDG7EUCozXapQeuyTdxT9H5VDpyNpRYvrnFagOxbLxY6QGYrGkpdqQJm3ntgqoeTffa9Z9GsxBcnz21qzU')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
            <div className="relative z-10 px-10 md:px-20 max-w-3xl text-white">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">Training & Prevention</span>
              <h1 className="hero font-extrabold leading-tight mb-6">Empowering Nigeria through <span className="text-white/80 italic">Support</span></h1>
              <p className="prose-p text-white/90 font-medium">Evidence-based substance abuse prevention and mental wellness programs tailored for schools and corporations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="h2 font-black mb-6 tracking-tight text-slate-900">Our Specialized Programs</h2>
          <p className="prose-p text-slate-500 max-w-2xl">We offer curated educational modules designed to address the specific needs of diverse structures.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((t, i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${t.image})` }}></div>
                <div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">{t.tag}</div>
              </div>
              <div className="p-8">
                <h3 className="h3 font-bold mb-4">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{t.desc}</p>
                <ul className="space-y-4 mb-10">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                      <span className="material-symbols-outlined text-primary-teal !text-lg font-black">check_circle</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block w-full bg-primary-teal text-white py-4 rounded-xl font-bold hover:brightness-110 shadow-lg shadow-teal-500/20 transition-all text-center uppercase tracking-widest text-[10px]">
                  Request Training
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
