import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServiceCatalogService } from '../../services/service-catalog.service';
import { MobileNavigationComponent } from '../../components/mobile-navigation/mobile-navigation.component';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';

@Component({
  selector: 'app-service-list-page',
  imports: [RouterLink, MobileNavigationComponent, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './service-list-page.component.html',
  styleUrl: '../service-ui.css',
})
export class ServiceListPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly catalog = inject(ServiceCatalogService);
  readonly category = this.route.snapshot.paramMap.get('category') ?? '';
  readonly services = this.catalog.getByCategory(this.category);
}
