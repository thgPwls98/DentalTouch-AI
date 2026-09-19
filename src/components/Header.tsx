import React from 'react';
import { Activity, Sparkles, Award } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header
      id="app-header"
      className="w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center space-x-3">
          <div
            id="brand-logo-icon"
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-sm ring-4 ring-sky-50"
          >
            <Activity className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg tracking-tight text-slate-900">
                DentalTouch <span className="text-sky-600 font-extrabold">AI</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-sky-50 text-sky-700 border border-sky-200/60">
                <Sparkles className="w-3 h-3 mr-1 text-sky-500" />
                Next-Gen Dental Triage
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden md:block">
              스마트 치과 전자예진 및 AI 트리아지 통합 플랫폼
            </span>
          </div>
        </div>

        {/* Right: Clean Competition Badge */}
        <div className="flex items-center space-x-2">
          <div
            id="competition-badge"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 text-slate-700 border border-slate-200/80"
          >
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>Wanted AI Championship 2026</span>
          </div>
        </div>
      </div>
    </header>
  );
};
