import { Injectable } from '@angular/core';
import { Service, ServiceCategoryInfo } from '../models/service.model';
@Injectable({ providedIn: 'root' })
export class ServiceCatalogService {
  readonly categories: ServiceCategoryInfo[] = [
    { name: 'Electrical', icon: '⚡', color: '#fff2d6', tagline: 'Safe repairs, right at home' }, { name: 'Plumbing', icon: '🔧', color: '#e0f2ff', tagline: 'Leaks and fittings, solved' },
    { name: 'Cleaning', icon: '✨', color: '#e3f8ec', tagline: 'A fresher, cleaner space' }, { name: 'Appliance repair', icon: '▣', color: '#f0eaff', tagline: 'Keep essentials working' },
    { name: 'Painting', icon: '▰', color: '#ffe8eb', tagline: 'Refresh every room' }, { name: 'AC service', icon: '❄', color: '#e4f6fb', tagline: 'Cool comfort, all year' },
  ];
  readonly services: Service[] = [
    { id: 'switchboard', category: 'Electrical', name: 'Switchboard repair', description: 'Fix loose switches, sockets and minor wiring faults.', price: 249, duration: '30–45 min', rating: 4.8, reviews: 321, icon: '⚡', popular: true },
    { id: 'fan-install', category: 'Electrical', name: 'Fan installation', description: 'Install ceiling, exhaust or wall-mounted fans safely.', price: 349, duration: '45–60 min', rating: 4.7, reviews: 182, icon: '◉' },
    { id: 'motor-repair', category: 'Electrical', name: 'Water motor repair', description: 'Inspect motor noise, starters, wiring and pump operation.', price: 399, duration: '45–75 min', rating: 4.8, reviews: 146, icon: '◌' },
    { id: 'home-wiring', category: 'Electrical', name: 'Home wiring check', description: 'Safety check and repair for home wiring and MCBs.', price: 499, duration: '60–90 min', rating: 4.8, reviews: 98, icon: '⌁' },
    { id: 'pipe-leak', category: 'Plumbing', name: 'Leak repair', description: 'Find and repair tap, pipe and basin leaks.', price: 299, duration: '30–60 min', rating: 4.9, reviews: 478, icon: '💧', popular: true },
    { id: 'tap-install', category: 'Plumbing', name: 'Tap & mixer fitting', description: 'Installation and replacement of taps and mixers.', price: 249, duration: '30–45 min', rating: 4.7, reviews: 238, icon: '🚰' },
    { id: 'mixer-repair', category: 'Plumbing', name: 'Kitchen mixer repair', description: 'Repair mixer taps, cartridges and water-pressure issues.', price: 299, duration: '30–45 min', rating: 4.6, reviews: 117, icon: '◒' },
    { id: 'bathroom-clean', category: 'Cleaning', name: 'Bathroom deep clean', description: 'Deep cleaning of tiles, fittings and hard-water stains.', price: 599, duration: '2–3 hr', rating: 4.8, reviews: 541, icon: '✨', popular: true },
    { id: 'kitchen-clean', category: 'Cleaning', name: 'Kitchen deep clean', description: 'Degrease counters, stove area, cabinets and surfaces.', price: 749, duration: '2–3 hr', rating: 4.8, reviews: 187, icon: '✦' },
    { id: 'home-cooking', category: 'Cleaning', name: 'Home cooking help', description: 'Trusted meal-prep assistance for everyday home cooking.', price: 499, duration: '2 hr', rating: 4.7, reviews: 92, icon: '◐' },
    { id: 'washing-machine', category: 'Appliance repair', name: 'Washing machine repair', description: 'Diagnosis and repair for front and top-load machines.', price: 299, duration: '45–90 min', rating: 4.7, reviews: 201, icon: '▣' },
    { id: 'ac-service', category: 'AC service', name: 'AC power jet service', description: 'Deep indoor and outdoor unit cleaning with check-up.', price: 599, duration: '60–90 min', rating: 4.9, reviews: 611, icon: '❄', popular: true },
  ];
  getByCategory(category: string): Service[] { return this.services.filter((item) => item.category === category); }
  getById(id: string): Service | undefined { return this.services.find((item) => item.id === id); }
}
