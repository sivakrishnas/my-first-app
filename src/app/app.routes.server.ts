import { RenderMode, ServerRoute } from '@angular/ssr';
import { ServiceCatalogService } from './services/service-catalog.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const catalogService = new ServiceCatalogService();
      return catalogService.categories.map(cat => ({
        category: cat.name
      }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
