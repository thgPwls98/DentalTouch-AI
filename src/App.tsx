import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EntryCards } from './components/EntryCards';
import { NoticeBanner } from './components/NoticeBanner';
import { APP_LINKS } from './config';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleNavigate = (mode: 'patient' | 'staff') => {
    const destinationUrl = mode === 'patient' ? APP_LINKS.patientUrl : APP_LINKS.staffUrl;
    const modeName = mode === 'patient' ? '스마트 전자예진 시스템(환자용)' : '진료/접수 관리 시스템(의료진용)';

    showToast(`[${modeName}] 페이지로 이동합니다.`);

    if (APP_LINKS.openInNewTab) {
      window.open(destinationUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = destinationUrl;
    }
  };

  return (
    <div
      id="landing-page-root"
      className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900"
    >
      {/* Background Subtle Modern Ambience */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 -z-10"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Header without URL configuration buttons */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col justify-center">
        {/* Hero Section with Title */}
        <HeroSection />

        {/* 2 Central Entry Cards with Fixed Permanent URLs */}
        <EntryCards onNavigate={handleNavigate} />
      </main>

      {/* Bottom Notice Banner with Wanted AI Championship Notice */}
      <NoticeBanner />

      {/* Action Toast */}
      {toastMessage && (
        <div
          id="action-toast"
          role="status"
          className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm px-4 py-3 rounded-xl shadow-lg border border-slate-700/60 flex items-center space-x-2 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
