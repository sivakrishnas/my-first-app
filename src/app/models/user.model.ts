export type Gender = 'Female' | 'Male' | 'Prefer not to say';
export interface UserProfile { name: string; mobile: string; gender: Gender | ''; }
