
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';


import Home from './pages/Home';
import Programs from './pages/Programs';
import Team from './pages/Team';
import Referrals from './pages/Referrals';
import Privacy from './pages/Privacy';
import BookAppointment from './pages/BookAppointment';
import BookingConfirmation from './pages/BookingConfirmation';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

import Login from './pages/Login';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminBookings from './pages/Admin/Bookings';
import AdminEnquiries from './pages/Admin/Enquiries';
import AdminEnquiryDetail from './pages/Admin/EnquiryDetail';

// Moved PublicLayout outside of App component to resolve TypeScript children property errors
// and follow React best practices for component definition.
interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <ChatBot />
  </div>
);

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/programs" element={<PublicLayout><Programs /></PublicLayout>} />
        <Route path="/team" element={<PublicLayout><Team /></PublicLayout>} />
        <Route path="/referrals" element={<PublicLayout><Referrals /></PublicLayout>} />
        <Route path="/privacy" element={<PublicLayout><Privacy /></PublicLayout>} />
        <Route path="/book" element={<PublicLayout><BookAppointment /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />

        <Route path="/confirmation" element={<PublicLayout><BookingConfirmation /></PublicLayout>} />

        {/* Auth Route */}
        <Route path="/login" element={<Login onLogin={() => setIsAdmin(true)} />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={isAdmin ? <AdminLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<AdminDashboard />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="enquiries" element={<AdminEnquiries />} />
          <Route path="enquiry/:id" element={<AdminEnquiryDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
