
import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div class="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-50 p-6">
      <div class="w-full max-w-[440px] z-10">
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div class="pt-10 pb-6 px-8 flex flex-col items-center">
            <div class="size-16 text-primary mb-4">
              <svg fill="none" viewBox="0 0 100 100">
                <path d="M48 55C48 55 35 50 25 35C25 35 32 30 42 32C42 32 40 45 48 55Z" fill="#007BFF"></path>
                <path d="M52 55C52 55 65 50 75 35C75 35 68 30 58 32C58 32 60 45 52 55Z" fill="#00D2C2"></path>
              </svg>
            </div>
            <h1 class="text-[#0d1b19] text-2xl font-extrabold tracking-tight">DovesMind Synergy</h1>
            <p class="text-[#4c9a8d] text-sm font-medium mt-1">Admin Portal Secure Access</p>
          </div>
          <form class="px-8 pb-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label class="block text-sm font-bold text-[#0d1b19] mb-2">Staff Email</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">alternate_email</span>
                <input class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-primary" defaultValue="staff@dovesmind.ng" type="email" required />
              </div>
            </div>
            <div>
              <label class="block text-sm font-bold text-[#0d1b19] mb-2">Password</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">lock</span>
                <input class="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-primary" defaultValue="password" type="password" required />
              </div>
            </div>
            <button type="submit" class="w-full bg-primary text-white font-bold py-3.5 rounded-lg transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-xl">login</span> Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
