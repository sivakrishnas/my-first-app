import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCatalogService } from '../../services/service-catalog.service';
import { MobileNavigationComponent } from '../../components/mobile-navigation/mobile-navigation.component';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, MobileNavigationComponent, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: '../service-ui.css',
})
export class HomePageComponent {
  readonly catalog = inject(ServiceCatalogService);
  readonly services = this.catalog.services;
}
