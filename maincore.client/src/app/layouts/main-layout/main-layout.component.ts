import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, MenubarModule],
    template: `
    <div class="layout-wrapper">
      <p-menubar [model]="items">
        <ng-template pTemplate="start">
            <div class="font-bold text-xl ml-2">MainCore DPS</div>
        </ng-template>
      </p-menubar>
      <div class="layout-content p-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
    styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class MainLayoutComponent {
    items: MenuItem[] = [
        { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
        { label: 'Passport', icon: 'pi pi-id-card', routerLink: '/passport' },
        { label: 'Traceability', icon: 'pi pi-map', routerLink: '/traceability' }
    ];
}
