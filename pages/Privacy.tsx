
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div class="flex flex-col w-full">
      <section class="bg-white py-12 px-10 border-b border-[#e7f3f1]">
        <div class="max-w-[1024px] mx-auto">
          <h1 class="text-[#0d1b19] text-4xl font-black mb-6">Privacy Policy & Ethics Statement</h1>
          <div class="bg-brand-teal/10 border border-brand-teal/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div class="size-16 rounded-full bg-brand-teal flex items-center justify-center flex-shrink-0 text-[#0d1b19]">
              <span class="material-symbols-outlined text-4xl fill-1">verified</span>
            </div>
            <div>
              <h2 class="text-xl font-bold mb-2 text-primary">Our Commitment to Ethical Excellence</h2>
              <p class="text-gray-700">DovesMind Synergy is strictly committed to the Nigerian Data Protection Regulation (NDPR) and international clinical ethics.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-[1024px] mx-auto px-10 py-16 flex flex-col lg:flex-row gap-12">
        <aside class="lg:w-1/4">
          <div class="sticky top-24 space-y-1">
            <p class="text-xs font-bold uppercase tracking-wider text-[#4c9a8d] mb-4 px-4">Navigation</p>
            <a class="block py-2 px-4 text-sm font-bold border-l-2 border-primary bg-primary/5 text-primary" href="#data">Data Protection</a>
            <a class="block py-2 px-4 text-sm font-medium border-l-2 border-transparent hover:text-primary" href="#ethics">Ethical Standards</a>
            <a class="block py-2 px-4 text-sm font-medium border-l-2 border-transparent hover:text-primary" href="#rights">Patient Rights</a>
          </div>
        </aside>
        <article class="lg:w-3/4 space-y-12">
          <div id="data">
            <h2 class="text-2xl font-bold mb-4">Data Protection & Privacy</h2>
            <p class="text-gray-700 leading-relaxed mb-4">We take the security of your personal and health information seriously. In compliance with Nigerian laws, we implement rigorous technical and organizational measures to prevent unauthorized access.</p>
            <h3 class="text-xl font-bold mb-3">Information We Collect</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Identity Data:</strong> Name, age, gender, and National Identity Number.</li>
              <li><strong>Clinical Data:</strong> Psychological assessments and treatment history.</li>
              <li><strong>Contact Information:</strong> Phone number and emergency details.</li>
            </ul>
          </div>
          <div id="ethics">
            <h2 class="text-2xl font-bold mb-4">Ethical Pillars</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Beneficence', desc: 'Acting in the best interest of the patient.' },
                { title: 'Non-Maleficence', desc: 'Committing to the principle of "First, do no harm".' },
                { title: 'Autonomy', desc: "Respecting the patient's right to choose." },
                { title: 'Justice', desc: 'Ensuring fair treatment for all Nigerians.' }
              ].map((p, i) => (
                <div key={i} class="p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                  <h4 class="font-bold text-sm mb-1">{p.title}</h4>
                  <p class="text-xs text-gray-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Privacy;
