
import React from 'react';

const Referrals: React.FC = () => {
  return (
    <div class="flex flex-col w-full">
      <section class="px-6 md:px-20 lg:px-40 flex flex-1 justify-center py-16 bg-white">
        <div class="layout-content-container flex flex-col max-w-[1024px] flex-1">
          <div class="flex flex-col gap-10 lg:flex-row items-center">
            <div class="flex flex-col gap-6 lg:w-1/2">
              <div class="flex flex-col gap-4">
                <span class="text-primary font-bold uppercase tracking-wider text-sm">Professional Support</span>
                <h1 class="text-[#0d1b19] text-4xl font-black leading-tight tracking-tight md:text-5xl">Rehabilitation Referral Guidance</h1>
                <p class="text-[#0d1b19] text-lg font-normal leading-relaxed">
                  Navigating the path to recovery can be overwhelming. We provide professional guidance to ensure individuals receive the right level of clinical care in trusted centers.
                </p>
              </div>
              <div class="flex gap-4">
                <button class="bg-primary text-white px-8 py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all">Speak with a Specialist</button>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <img alt="Supportive clinical environment" class="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKUrZjcG1zi3phbBpTUGeZpFsYXuF2K88T_XD30HtQVbYHdSBuAeyYCVnDK3LrhV3XnoMCpd3bCg9E2_wnmt0KDNh33L3HTjwdeZZ76M4r3udKRzjKF6my36cFxQr5sm52oemB2eQiGAAhONjyS0DY61JUI0BxbSg4aFkoF41UTr14CEqko2gbK0wDRKWsaX292jn4EvKbE6dGi5cKatHPR-293J7_JEtxgZMYoKvfycBEQJT4cUNWBJ8ZajMpcoJQOlZNV0FrGso"/>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#f0f9f7] py-20 px-6">
        <div class="max-w-[1024px] mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-[#0d1b19] text-3xl md:text-4xl font-bold mb-4">Criteria for Referral</h2>
            <p class="text-[#4c9a8d] text-lg max-w-2xl mx-auto">Referrals are determined based on key clinical factors to ensure the success of the journey.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: 'warning', title: 'Severity of Condition', items: ['High intensity of substance use', 'Frequent relapse history', 'Co-occurring disorders'] },
              { icon: 'medical_services', title: 'Clinical Needs', items: ['Medically supervised detox', 'Specialized therapy', '24/7 psychiatric monitoring'] },
              { icon: 'home_health', title: 'Environment & Safety', items: ['Unstable home environment', 'Risk of self-harm', 'Need for trigger isolation'] },
              { icon: 'trending_up', title: 'Functional Impairment', items: ['Inability to perform work', 'Severe family disruption', 'Physical health deterioration'] },
            ].map((c, i) => (
              <div key={i} class="flex gap-4">
                <span class="material-symbols-outlined text-primary text-3xl flex-shrink-0">{c.icon}</span>
                <div>
                  <h4 class="font-bold mb-2">{c.title}</h4>
                  <ul class="text-sm text-gray-600 space-y-2 list-disc ml-4">
                    {c.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Referrals;
