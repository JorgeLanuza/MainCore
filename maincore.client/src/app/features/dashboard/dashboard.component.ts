import { Component, OnInit, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DashboardStore } from './dashboard.store';
import { StatCardComponent } from '../../shared/ui/stat-card/stat-card.component';
import { ActivityFeedComponent } from './activity-feed.component';
import { EfficiencyChartComponent } from './efficiency-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, ButtonModule, StatCardComponent, ActivityFeedComponent, EfficiencyChartComponent],
  providers: [DashboardStore],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  readonly store = inject(DashboardStore);

  ngOnInit() {
    this.store.loadDashboardData();
  }
}
