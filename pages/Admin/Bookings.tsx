
import React from 'react';

const AdminBookings: React.FC = () => {
  const bookings = [
    { name: 'Chukwudi Okon', type: '60m Individual Session', specialist: 'Dr. Amina Okoro', time: 'Oct 24, 10:30 AM', status: 'Paid' },
    { name: 'Funke Ezedinma', type: '30m Quick Consult', specialist: 'Dr. Samuel Okafor', time: 'Oct 24, 01:00 PM', status: 'Pending' },
    { name: 'Bisi Ibrahim', type: '60m Adolescent Support', specialist: 'Bose Adebayo', time: 'Oct 25, 09:00 AM', status: 'Paid' },
  ];

  return (
    <div class="p-8">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-2xl font-black text-primary">Manage Bookings</h1>
        <button class="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all">
          <span class="material-symbols-outlined !text-[18px]">add</span> Add New Booking
        </button>
      </div>

      <div class="flex gap-4 mb-6">
        <select class="text-sm border-gray-100 rounded-lg px-4 py-2 bg-white min-w-[180px]">
          <option>This Week</option>
          <option>This Month</option>
        </select>
        <select class="text-sm border-gray-100 rounded-lg px-4 py-2 bg-white min-w-[180px]">
          <option>All Types</option>
          <option>Consultation</option>
          <option>Therapy</option>
        </select>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                <th class="px-6 py-4">Patient Name</th>
                <th class="px-6 py-4">Type</th>
                <th class="px-6 py-4">Specialist</th>
                <th class="px-6 py-4">Time</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              {bookings.map((b, i) => (
                <tr key={i} class="hover:bg-primary/5 transition-colors">
                  <td class="px-6 py-4 font-bold text-sm">{b.name}</td>
                  <td class="px-6 py-4 text-sm text-gray-600">{b.type}</td>
                  <td class="px-6 py-4 text-sm font-medium">{b.specialist}</td>
                  <td class="px-6 py-4 text-xs font-bold text-gray-400">{b.time}</td>
                  <td class="px-6 py-4">
                    <span class={`px-2.5 py-1 rounded-full text-[10px] font-bold ${b.status === 'Paid' ? 'bg-teal-50 text-teal-600' : 'bg-orange-50 text-orange-600'}`}>
                      {b.status}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <div class="flex items-center justify-end gap-3 text-gray-400">
                      <button class="hover:text-primary transition-colors"><span class="material-symbols-outlined text-xl">edit</span></button>
                      <button class="hover:text-red-500 transition-colors"><span class="material-symbols-outlined text-xl">delete</span></button>
                    </div>
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

export default AdminBookings;
