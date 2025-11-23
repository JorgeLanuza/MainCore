import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CardModule, ButtonModule],
    template: `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <p-card header="Digital Passports" subheader="Active Units" styleClass="h-full">
        <p class="m-0">
          Overview of all active digital passports in the system.
        </p>
        <ng-template pTemplate="footer">
            <p-button label="View All" icon="pi pi-arrow-right" [text]="true"></p-button>
        </ng-template>
      </p-card>
      
      <p-card header="Quality Issues" subheader="Pending Actions" styleClass="h-full">
        <p class="m-0">
          Critical quality alerts requiring immediate attention.
        </p>
        <ng-template pTemplate="footer">
            <p-button label="Review" severity="danger" icon="pi pi-exclamation-triangle" [text]="true"></p-button>
        </ng-template>
      </p-card>

      <p-card header="System Status" subheader="Operational" styleClass="h-full">
        <p class="m-0">
          All systems are running within normal parameters.
        </p>
        <ng-template pTemplate="footer">
            <p-button label="Details" severity="success" icon="pi pi-check-circle" [text]="true"></p-button>
        </ng-template>
      </p-card>
    </div>
  `
})
export class DashboardComponent { }
