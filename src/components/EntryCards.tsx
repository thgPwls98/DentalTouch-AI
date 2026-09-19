import React from 'react';
import { motion } from 'motion/react';
import {
  UserCheck,
  LayoutDashboard,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Stethoscope,
  Smile,
} from 'lucide-react';
import { APP_LINKS } from '../config';

interface EntryCardsProps {
  onNavigate: (mode: 'patient' | 'staff') => void;
}

export const EntryCards: React.FC<EntryCardsProps> = ({ onNavigate }) => {
  return (
    <div
      id="entry-cards-section"
      className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-6 my-8"
    >
      {/* 1. 환자용 카드 (Patient Pre-examination System) */}
      <motion.div
        id="card-patient-mode"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between p-6 sm:p-8"
      >
        <div>
          {/* Card Top Pill Badge */}
          <div className="flex items-center justify-between mb-5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/70">
              <Smile className="w-3.5 h-3.5 text-sky-600" />
              <span>환자용 모드 · 원내 태블릿 전용</span>
            </div>
            <span className="inline-flex items-center text-[11px] font-medium text-slate-400">
              <ExternalLink className="w-3 h-3 mr-1 text-slate-400" />
              공식 체험 링크
            </span>
          </div>

          {/* Card Header & Icon */}
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 shrink-0 group-hover:scale-105 transition-transform">
              <UserCheck className="w-6 h-6 text-sky-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                스마트 전자예진 시스템
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                원내 태블릿 기반 환자 현장 접수 & 문진
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            치과 데스크 및 대기실 태블릿에서 환자가 직접 터치하여 주 증상, 통증 부위, 기저질환을 현장 접수하고 진료 대기 시간을 획기적으로 단축합니다.
          </p>

          {/* Highlights */}
          <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-100 mb-6 space-y-2.5">
            <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              주요 기능
            </div>
            <div className="flex items-center text-xs sm:text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-sky-500 mr-2 shrink-0" />
              <span>원내 태블릿 터치 기반 직관적 현장 접수 문진</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-sky-500 mr-2 shrink-0" />
              <span>치아 번호 및 통증 위치 인터랙티브 터치 선택</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-sky-500 mr-2 shrink-0" />
              <span>복용 약물 및 알레르기 안전 사전 체크</span>
            </div>
          </div>
        </div>

        {/* Action Button: Requested exact label */}
        <div className="pt-2">
          <a
            id="btn-patient-entry"
            href={APP_LINKS.patientUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (APP_LINKS.openInNewTab) {
                // native anchor opens new tab
              } else {
                e.preventDefault();
                onNavigate('patient');
              }
            }}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 cursor-pointer group/btn text-decoration-none"
          >
            <span className="text-center font-medium">
              [ DentalTouch - 스마트 전자예진 시스템(환자용) 체험하기 ]
            </span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </a>
          
          <div className="flex items-center justify-center mt-2.5 px-1">
            <span className="text-[11px] text-slate-400">
              클릭 시 원내 태블릿 전자예진 체험 페이지(dt-kiosk)로 이동합니다.
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. 의료진용 카드 (Medical Staff & Clinical Dashboard) */}
      <motion.div
        id="card-staff-mode"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
        className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between p-6 sm:p-8"
      >
        <div>
          {/* Card Top Pill Badge */}
          <div className="flex items-center justify-between mb-5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/70">
              <Stethoscope className="w-3.5 h-3.5 text-indigo-600" />
              <span>의료진용 모드 · Staff Dashboard</span>
            </div>
            <span className="inline-flex items-center text-[11px] font-medium text-slate-400">
              <ExternalLink className="w-3 h-3 mr-1 text-slate-400" />
              공식 포털 링크
            </span>
          </div>

          {/* Card Header & Icon */}
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shrink-0 group-hover:scale-105 transition-transform">
              <LayoutDashboard className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                진료/접수 관리 시스템 대시보드
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                실시간 환자 접수 현황 및 AI 트리아지 중증도 차트
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            원내 태블릿에서 접수된 예진 데이터를 실시간으로 수신하여 응급도(트리아지)를 즉각 분류하고, 원장 및 스태프를 위한 실시간 진료 현황 대시보드와 원활하게 연동합니다.
          </p>

          {/* Highlights */}
          <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-100 mb-6 space-y-2.5">
            <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              주요 기능
            </div>
            <div className="flex items-center text-xs sm:text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 shrink-0" />
              <span>실시간 내원 환자 대기열 & AI 예진표 요약</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 shrink-0" />
              <span>치과 트리아지(중증도/치료 시급도) 자동 분류</span>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 shrink-0" />
              <span>체어 배정, 주의사항 알림 및 진료 기록 실시간 연동</span>
            </div>
          </div>
        </div>

        {/* Action Button: Requested exact label */}
        <div className="pt-2">
          <a
            id="btn-staff-entry"
            href={APP_LINKS.staffUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (APP_LINKS.openInNewTab) {
                // native anchor opens new tab
              } else {
                e.preventDefault();
                onNavigate('staff');
              }
            }}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 shadow-sm hover:shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 cursor-pointer group/btn text-decoration-none"
          >
            <span className="text-center font-medium">
              [ DentalTouch - 진료/접수 관리 시스템(의료진용) 대시보드 입장 ]
            </span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </a>

          <div className="flex items-center justify-center mt-2.5 px-1">
            <span className="text-[11px] text-slate-400">
              클릭 시 의료진 대시보드 포털(dt-portal)로 이동합니다.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
