export interface StudentProfile {
  name: string;
  idNumber: string;
  program: string;
  yearLevel: string;
  guangPassId: string;
  campus: string;
  avatarUrl?: string;
}
export interface StatusBadgeProps {
  isActive: boolean;
}