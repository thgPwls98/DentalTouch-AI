import { AppLinks } from './types';

/**
 * DentalTouch AI 화면 고정 링크 설정
 * 외부 방문자가 임의로 변경할 수 없도록 고정 발행된 공식 링크입니다.
 */
export const APP_LINKS: AppLinks = {
  // [ DentalTouch - 스마트 전자예진 시스템(환자용) 체험하기 ]
  patientUrl: 'https://dt-kiosk.vercel.app/',

  // [ DentalTouch - 진료/접수 관리 시스템(의료진용) 대시보드 입장 ]
  staffUrl: 'https://dt-portal.vercel.app/',

  // 링크 클릭 시 새 탭으로 열기
  openInNewTab: true,
};
