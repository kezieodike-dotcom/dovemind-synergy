import React from 'react';

const Clients: React.FC = () => {
    return (
        <div className="pt-20 pb-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8"><span className="text-primary-teal italic">Happy</span> Clients</h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                Read about the journeys of resilience and recovery from the individuals and institutions we've had the privilege to support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white border border-slate-100 p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all">
                        <span className="material-symbols-outlined text-primary mb-6">format_quote</span>
                        <p className="text-slate-600 font-medium mb-8 leading-relaxed italic">
                            "The support I received from DovesMind Synergy was life-changing. Their professional and non-judgmental approach made all the difference."
                        </p>
                        <div className="font-black text-slate-900 uppercase tracking-widest text-[10px]">Anonymous Client</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
