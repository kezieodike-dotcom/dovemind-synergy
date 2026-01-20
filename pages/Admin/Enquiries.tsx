
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminEnquiries: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const enquiries = [
    { id: 'TRN-2024-0892', org: 'Lagos State University', type: 'School Program', status: 'New', date: 'Oct 24, 2023' },
    { id: 'TRN-2024-0895', org: 'Afrincorp Ltd', type: 'Corporate Wellness', status: 'Scheduled', date: 'Oct 25, 2023' },
    { id: 'TRN-2024-0901', org: 'Ikeja High School', type: 'School Program', status: 'In Progress', date: 'Oct 26, 2023' },
    { id: 'TRN-2024-0908', org: 'Hope NGO', type: 'Community Partner', status: 'Completed', date: 'Oct 27, 2023' },
  ];

  const filteredEnquiries = filter === 'All' ? enquiries : enquiries.filter(e => e.status === filter);

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Program Enquiries</h1>
          <p className="text-sm text-gray-500">Manage school, corporate, and community training requests.</p>
        </div>
        <div className="flex bg-white rounded-xl border border-gray-100 p-1">
          {['All', 'New', 'Scheduled', 'Completed'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${filter === f ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-5">Ref ID</th>
                <th className="px-6 py-5">Organization</th>
                <th className="px-6 py-5">Type</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Received</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEnquiries.map((e, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono font-bold text-primary">{e.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-slate-900">{e.org}</p>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">
                    {e.type}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      e.status === 'New' ? 'bg-blue-50 text-blue-600' :
                      e.status === 'Scheduled' ? 'bg-amber-50 text-amber-600' :
                      e.status === 'Completed' ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-600'
                    }`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400 font-bold">{e.date}</td>
                  <td className="px-6 py-4 text-right">
                    <Link to={`/admin/enquiry/${e.id}`} className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all">
                      Review <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminEnquiries;
