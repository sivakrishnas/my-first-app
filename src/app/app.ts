import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly searchQuery = signal('');
  protected readonly selectedCity = signal('Hyderabad');
  protected readonly activeBanner = signal(0);
  protected readonly selectedCategory = signal('Movies');
  protected readonly likedMovies = signal<string[]>([]);
  protected readonly banners = [
    { eyebrow: 'LIVE EVENTS', title: 'The sounds\nof summer', detail: 'Discover unforgettable nights with the artists you love.', date: '27 NOV', place: 'BENGALURU', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=85' },
    { eyebrow: 'CINEMA FESTIVAL', title: 'Stories worth\nwatching', detail: 'Big screens, new worlds, and the magic of a shared movie night.', date: 'NOW SHOWING', place: 'YOUR CITY', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=85' },
    { eyebrow: 'STAGE & PLAY', title: 'Make it a\nnight out', detail: 'Music, theatre, comedy, and every reason to go out tonight.', date: 'THIS WEEK', place: 'HYDERABAD', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1800&q=85' },
  ];
  protected readonly movieRows = [
    { title: 'Recommended Movies', action: 'See All', movies: [
      { title: 'The Last Festival', language: 'Telugu', genre: 'Drama', rating: '8.7', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=85' },
      { title: 'Agni: The Beginning', language: 'Hindi', genre: 'Action', rating: '8.1', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=85' },
      { title: 'Romanchakam', language: 'Malayalam', genre: 'Romance', rating: '8.4', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85' },
      { title: 'Bethlehem Kudumba Unit', language: 'Malayalam', genre: 'Family', rating: '7.9', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=85' },
      { title: 'Hanuman', language: 'Telugu', genre: 'Fantasy', rating: '9.0', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=600&q=85' },
    ] },
    { title: 'Popular Events', action: 'Explore All', movies: [
      { title: 'Live at the Arena', language: 'English', genre: 'Music', rating: '9.2', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=600&q=85' },
      { title: 'The Comedy Club', language: 'English', genre: 'Comedy', rating: '8.8', image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=600&q=85' },
      { title: 'A Night of Jazz', language: 'English', genre: 'Music', rating: '8.6', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=85' },
      { title: 'Broadway Nights', language: 'English', genre: 'Theatre', rating: '9.1', image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=85' },
      { title: 'The Grand Illusion', language: 'English', genre: 'Magic', rating: '8.5', image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=600&q=85' },
    ] },
  ];

  protected nextBanner(): void { this.activeBanner.update((index) => (index + 1) % this.banners.length); }
  protected previousBanner(): void { this.activeBanner.update((index) => (index - 1 + this.banners.length) % this.banners.length); }
  protected toggleLike(title: string): void { this.likedMovies.update((movies) => movies.includes(title) ? movies.filter((movie) => movie !== title) : [...movies, title]); }
  protected isLiked(title: string): boolean { return this.likedMovies().includes(title); }
  protected setCity(): void { this.selectedCity.update((city) => city === 'Hyderabad' ? 'Bengaluru' : 'Hyderabad'); }
}
