
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="w-64 flex-shrink-0 bg-primary text-white flex flex-col">
        <div className="p-6 flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8" fill="white" viewBox="0 0 100 100">
               <path d="M40 40C40 40 45 25 60 25C75 25 80 40 80 40C80 40 75 55 60 55C45 55 40 40 40 40Z" fill="white"></path>
               <path d="M20 40C20 40 25 25 40 25C55 25 60 40 60 40C60 40 55 55 40 55C25 55 20 40 20 40Z" fill="#00C9B7"></path>
            </svg>
            <span className="text-sm font-bold leading-tight">Admin Portal</span>
          </div>
        </div>
        <nav className="flex-1 mt-4">
          <Link to="/admin" className={`flex items-center px-6 py-4 transition-colors ${isActive('/admin') ? 'bg-white/10 border-r-4 border-white font-bold' : 'text-white/70 hover:bg-white/10'}`}>
            <span className="material-symbols-outlined mr-3">dashboard</span>
            <span className="text-sm">Overview</span>
          </Link>
          <Link to="/admin/bookings" className={`flex items-center px-6 py-4 transition-colors ${isActive('/admin/bookings') ? 'bg-white/10 border-r-4 border-white font-bold' : 'text-white/70 hover:bg-white/10'}`}>
            <span className="material-symbols-outlined mr-3">event_available</span>
            <span className="text-sm">Bookings</span>
          </Link>
          <Link to="/admin/enquiries" className={`flex items-center px-6 py-4 transition-colors ${isActive('/admin/enquiries') ? 'bg-white/10 border-r-4 border-white font-bold' : 'text-white/70 hover:bg-white/10'}`}>
            <span className="material-symbols-outlined mr-3">chat_bubble</span>
            <span className="text-sm">Enquiries</span>
            <span className="ml-auto bg-brand-teal text-white text-[10px] px-2 py-0.5 rounded-full font-bold">12</span>
          </Link>
        </nav>
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-cover bg-center ring-2 ring-white/20" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDSqTN7nnFaDkjuFPGxYh2kL-yN4RFrvPhsbzxzVLG6nCAU-HbPnGrLS0MNfxor0Of4qvCT5_XteRYwbAaB3d0cE8djR2vuE6vLe_WGAst0eDINjltA78-_ucNfohus0bcGvUqulXdvZ9yKXMdSNPoPxe1DNhcTi_du8z8ComjoOQ3OpSgWU-eTS9hJSmg8bXq9Q5BoU83h4g7Z42oelxhrv-FSAvTa5mzDvuEe7n6dmJi0t8ZKK1SIEC6on-IdXx6V47gMLiEkpo4)'}}></div>
            <div className="flex flex-col">
              <p className="text-sm font-bold truncate">Admin User</p>
              <p className="text-[10px] text-white/60">admin@dovesmind.ng</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
