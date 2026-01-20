
import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmation: React.FC = () => {
  return (
    <div class="max-w-[800px] mx-auto py-10 px-6">
      <div class="flex flex-col items-center justify-center text-center pb-8">
        <div class="bg-primary/20 p-4 rounded-full mb-4">
          <span class="material-symbols-outlined text-primary text-6xl fill-1">check_circle</span>
        </div>
        <h1 class="text-[#0d1b19] text-3xl md:text-4xl font-bold leading-tight pb-2">Booking Successful!</h1>
        <p class="text-[#4c9a8d] text-lg font-medium leading-normal max-w-lg">
          Your session with Dr. Olumide Adebayo is confirmed. We've sent the meeting link to your email.
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        <div class="w-full md:w-1/3 bg-cover bg-center aspect-square md:aspect-auto" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuD3TMZfiS8FjQ80zi6mVl6f5y1lARNpvprnRGx4jxUv6SPNLN-abz--dvwBHylrmUJ2K53S4cy0TL7EH0MycHce_FV3t_rRRC262jV34lp-h-6zUZpOoRpWLdezKdZbNruU539Tp0ubUTQFx4RybJpaNOOWa_DptUhxjXfLGpCuRepBm8Xct_j9IQSd4bKVWxMeIFvOgiUeoReWi7fuBSwdEQbax18n3v1A-XxT1pcLg0nvlLdyLSwboNkYI93jis7DCaBZG353i6s)'}}></div>
        <div class="p-8 flex-1">
          <div class="flex justify-between items-start mb-6">
            <div>
              <p class="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">Confirmed Appointment</p>
              <p class="text-2xl font-bold">Individual Consultation</p>
            </div>
            <div class="text-right">
              <p class="text-gray-400 text-[10px] font-bold uppercase">Booking ID</p>
              <p class="text-primary font-bold">DMS-992834</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-y-4 gap-x-8 py-4 border-y border-gray-100">
            {[
              { label: 'Date & Time', val: 'Oct 24, 2024 | 10:00 AM', icon: 'calendar_today' },
              { label: 'Specialist', val: 'Dr. Olumide Adebayo', icon: 'person' },
              { label: 'Duration', val: '60-minute Session', icon: 'schedule' },
              { label: 'Session Type', val: 'Virtual Video Call', icon: 'video_camera_front' }
            ].map((d, i) => (
              <div key={i} class="flex gap-3">
                <span class="material-symbols-outlined text-primary text-xl">{d.icon}</span>
                <div>
                  <p class="text-[10px] text-gray-400 font-bold uppercase">{d.label}</p>
                  <p class="text-sm font-bold">{d.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-6">Payment Receipt</h2>
        <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
          <div class="flex justify-between text-sm">
            <span class="text-gray-500">Transaction Reference:</span>
            <span class="font-mono font-bold">PS_99210082347</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-500">Individual Consultation (60m)</span>
            <span class="font-bold">₦25,000.00</span>
          </div>
          <div class="flex justify-between items-center pt-2 border-t border-gray-100">
            <span class="text-lg font-bold">Total Paid</span>
            <span class="text-primary text-2xl font-black">₦25,500.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
