
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AdminEnquiryDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div class="p-8 max-w-[1200px] mx-auto">
      <Link to="/admin" class="flex items-center gap-2 text-sm text-gray-500 mb-6 hover:text-primary transition-colors group">
        <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
        Back to Dashboard
      </Link>
      
      <div class="flex justify-between items-end mb-8">
        <div>
          <h1 class="text-3xl font-black tracking-tight">Training Enquiry Details</h1>
          <p class="text-gray-500 text-sm">Reference ID: #{id}</p>
        </div>
        <div class="flex gap-3">
          <span class="bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold rounded-full border border-blue-100">New Request</span>
          <span class="text-xs text-gray-400 self-center">Received: Oct 24, 2023 at 14:30</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-8">
          <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">corporate_fare</span> Client Details
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Organization</label>
                <p class="font-bold text-lg">Lagos State University (LASU)</p>
              </div>
              <div>
                <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Contact Person</label>
                <p class="font-bold text-lg">Dr. Samuel Adeyemi</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">description</span> Enquiry Message
            </h3>
            <p class="bg-gray-50 p-6 rounded-xl text-gray-700 leading-relaxed border border-gray-100">
              Interested in a 2-day workshop for student union leaders on substance use disorders. Requested date: Nov 15-16. Estimated participants: 200.
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
            <h3 class="font-bold mb-6">Admin Actions</h3>
            <div class="space-y-4">
              <button class="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                <span class="material-symbols-outlined">mail</span> Send Follow-up
              </button>
              <button class="w-full border border-red-100 text-red-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                <span class="material-symbols-outlined">delete</span> Archive Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEnquiryDetail;
