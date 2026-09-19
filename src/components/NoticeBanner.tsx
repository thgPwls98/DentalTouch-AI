import React from 'react';
import { Award, Info } from 'lucide-react';

export const NoticeBanner: React.FC = () => {
  return (
    <footer id="app-footer" className="w-full max-w-4xl mx-auto px-4 sm:px-6 pb-12 pt-4">
      <div
        id="wanted-competition-notice"
        className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-2xs p-5 sm:p-6 text-center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-700">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
            <Award className="w-4 h-4 text-sky-600" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">※ 본 서비스는 원티드 AI Championship 2026 출전작으로,</span>{' '}
            심사위원 및 평가자를 위해 두 모드를 모두 제공합니다.
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-slate-400">
          <span>DentalTouch AI Architecture</span>
          <span>•</span>
          <span>Next-Gen Dental Triage & Care Platform</span>
          <span>•</span>
          <span>Wanted AI Championship 2026</span>
        </div>
      </div>
    </footer>
  );
};
