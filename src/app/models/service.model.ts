export type ServiceCategory = 'Electrical' | 'Plumbing' | 'Cleaning' | 'Appliance repair' | 'Painting' | 'AC service';
export interface Service { id: string; category: ServiceCategory; name: string; description: string; price: number; duration: string; rating: number; reviews: number; icon: string; popular?: boolean; }
export interface ServiceCategoryInfo { name: ServiceCategory; icon: string; color: string; tagline: string; }
