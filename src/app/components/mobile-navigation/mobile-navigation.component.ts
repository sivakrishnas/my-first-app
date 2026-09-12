import { AfterViewInit, Component, HostListener, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-navigation',
  imports: [RouterLink],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.css',
})
export class MobileNavigationComponent implements AfterViewInit {
  @Input({ required: true }) active: 'home' | 'services' = 'home';
  readonly footerOffset = signal(0);

  ngAfterViewInit(): void { this.updateFooterOffset(); }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateFooterOffset(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const footer = document.querySelector<HTMLElement>('.site-footer');
    const distanceToFooter = footer ? window.innerHeight - footer.getBoundingClientRect().top : 0;
    this.footerOffset.set(Math.max(0, distanceToFooter));
  }
}
