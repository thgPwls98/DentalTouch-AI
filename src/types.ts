export interface AppLinks {
  patientUrl: string;
  staffUrl: string;
  openInNewTab: boolean;
}

export interface CardActionPayload {
  mode: 'patient' | 'staff';
  title: string;
  defaultLabel: string;
}
