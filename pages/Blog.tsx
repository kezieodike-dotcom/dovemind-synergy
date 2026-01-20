import React from 'react';

const Blog: React.FC = () => {
    return (
        <div className="pt-20 pb-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">DovesMind <span className="text-brand-green italic">Blog</span></h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mb-12">
                Latest insights into mental health, substance abuse prevention, and psychological wellness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                    {
                        title: "Understanding Substance Abuse in Modern Workspaces",
                        desc: "A deep dive into how corporate environments can foster resilience and support mental health.",
                        img: "/blog/corporate.png"
                    },
                    {
                        title: "Youth Resilience: Prevention as a Clinical Standard",
                        desc: "Exploring the impact of early detection and educational awareness in schools and communities.",
                        img: "/blog/youth.png"
                    }
                ].map((post, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-slate-100 rounded-[40px] mb-6 overflow-hidden border border-slate-100 shadow-sm relative">
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-slate-500 font-medium mb-6">{post.desc}</p>
                        <span className="text-[10px] font-black uppercase text-primary tracking-widest">Read Article</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
