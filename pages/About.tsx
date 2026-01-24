import React from 'react';

const About: React.FC = () => {
    return (
        <div className="section-padding px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
            <h1 className="hero font-playfair font-black text-slate-900 mb-10">About <span className="text-primary italic">DovesMind Synergy</span></h1>

            <div className="space-y-8 max-w-4xl">
                <p className="prose-p text-slate-600 font-medium">
                    DovesMind Synergy is dedicated to providing comprehensive mental health and drug abuse support services to individuals and families. Our mission is to create a warm and welcoming environment where individuals can find the support they need to overcome their challenges. We offer a wide range of services aimed at promoting mental wellness and preventing substance abuse. Our team is committed to making a positive impact in the community by providing compassionate care and support.
                </p>

                <p className="prose-p text-slate-600 font-medium">
                    At DovesMind Synergy, we believe in the power of collaboration and support. Our team consists of experienced professionals who are passionate about helping others. We offer personalized care and evidence-based treatment approaches to address the unique needs of each individual. Our goal is to empower individuals to lead fulfilling and healthy lives.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
                    <h3 className="h3 font-black mb-4">Our Vision</h3>
                    <p className="text-slate-500 font-medium">To be the leading catalyst for mental wellness and drug-free living in Africa, leveraging clinical excellence and institutional partnerships.</p>
                </div>
                <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10">
                    <h3 className="h3 font-black mb-4 text-primary">Our Mission</h3>
                    <p className="text-slate-500 font-medium">To create an environment where emotional safety, professional integrity, and clinical precision meet to restore hope and build resilient families.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
