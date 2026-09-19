import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 pt-10 sm:pt-14 pb-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/80 mb-6 shadow-2xs"
      >
        <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
        <span>Wanted AI Championship 2026 출전작</span>
        <span className="text-sky-300">|</span>
        <span className="text-slate-500 font-normal">통합 플랫폼 포털</span>
      </motion.div>

      {/* Main Required Title */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      >
        <h1
          id="main-landing-title"
          className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-slate-900 leading-snug sm:leading-tight mb-4"
        >
          <span className="text-sky-600 inline-block mr-2 font-black">DentalTouch AI</span>
          <span className="text-slate-800 block sm:inline font-bold">
            - AI 기반 스마트 치과 접수 & 트리아지 시스템
          </span>
        </h1>
      </motion.div>

      {/* Subtitle & Key Narrative */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mt-3"
      >
        원내 대기실 태블릿을 통한 환자 현장 접수·자가 예진부터 의료진의 실시간 트리아지 및 진료 관리까지,
        <br className="hidden sm:inline" /> 치과 내원 환자의 접수와 진료 워크플로우를 하나로 연결하는 스마트 임상 솔루션입니다.
      </motion.p>

      {/* 3-Step Process Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-7 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-500 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-2xs"
      >
        <div className="flex items-center space-x-1.5 font-medium text-slate-700">
          <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-[10px] font-bold">
            1
          </span>
          <span>원내 태블릿 현장 전자예진</span>
        </div>
        <span className="text-slate-300">➔</span>
        <div className="flex items-center space-x-1.5 font-medium text-slate-700">
          <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-[10px] font-bold">
            2
          </span>
          <span>AI 실시간 트리아지 & 증상 요약</span>
        </div>
        <span className="text-slate-300">➔</span>
        <div className="flex items-center space-x-1.5 font-medium text-slate-700">
          <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-[10px] font-bold">
            3
          </span>
          <span>의료진 진료·접수 관리 연동</span>
        </div>
      </motion.div>
    </section>
  );
};
