
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import History from './components/History';
import CourseSection from './components/CourseSection';
import Footer from './components/Footer';
import SalesNotification from './components/SalesNotification';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-stone-100">
        <div className="h-full bg-orange-600 transition-all duration-300" style={{ width: '0%' }}></div>
      </div>

      <main className="flex-grow">
        <Hero />
        <History />
        <CourseSection />
      </main>

      <Footer />
      
      {/* Social Proof Notification */}
      <SalesNotification />
      
      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
};

export default App;
