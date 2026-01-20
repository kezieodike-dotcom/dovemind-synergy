
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const enquiries = [
    { id: 'TRN-2024-0892', org: 'Lagos State University', status: 'New', date: 'Oct 24, 2023' },
    { id: 'TRN-2024-0895', org: 'Afrincorp Ltd', status: 'Scheduled', date: 'Oct 25, 2023' },
  ];

  return (
    <div class="p-8">
      <div class="mb-8">
        <h1 class="text-2xl font-black text-primary">Overview Dashboard</h1>
        <p class="text-sm text-gray-500">Welcome back, Administrator.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'Total Bookings', val: '248', icon: 'event', color: 'blue' },
          { label: 'Active Enquiries', val: '12', icon: 'chat', color: 'teal' },
          { label: 'Completed Sessions', val: '1,420', icon: 'verified', color: 'green' }
        ].map((s, i) => (
          <div key={i} class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{s.label}</p>
              <p class="text-3xl font-black mt-1">{s.val}</p>
            </div>
            <span class="material-symbols-outlined text-4xl text-primary/20">{s.icon}</span>
          </div>
        ))}
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <h3 class="font-bold">Recent Enquiries</h3>
          <button class="text-xs font-bold text-primary">View All</button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th class="px-6 py-4">Ref ID</th>
                <th class="px-6 py-4">Organization</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4">Date</th>
                <th class="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              {enquiries.map((e, i) => (
                <tr key={i} class="hover:bg-gray-50 transition-colors">
                  <td class="px-6 py-4 text-sm font-mono font-bold text-primary">{e.id}</td>
                  <td class="px-6 py-4 text-sm font-bold">{e.org}</td>
                  <td class="px-6 py-4">
                    <span class={`px-2 py-1 rounded-full text-[10px] font-bold ${e.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                      {e.status}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">{e.date}</td>
                  <td class="px-6 py-4 text-right">
                    <Link to={`/admin/enquiry/${e.id}`} class="text-xs font-bold text-primary hover:underline">Details</Link>
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

export default AdminDashboard;
