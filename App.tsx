
import React from 'react';
import Hero from './components/Hero';
import VSL from './components/VSL';
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
        <div className="bg-stone-50 py-16 px-4 md:px-0">
          <VSL />
        </div>
        <History />
        <CourseSection />
      </main>

      <Footer />
      
      {/* Social Proof Notification */}
      <SalesNotification />
    </div>
  );
};

export default App;
