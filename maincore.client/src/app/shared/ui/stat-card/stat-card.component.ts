import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css'
})
export class StatCardComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string | number;
  @Input() icon: string = 'pi-chart-line';
  @Input() trend: string = '+0%';
  @Input() trendDirection: 'up' | 'down' | 'neutral' = 'neutral';

  get trendColor(): string {
    return this.trendDirection === 'up' ? 'text-green-500' :
      this.trendDirection === 'down' ? 'text-red-500' : 'text-gray-500';
  }

  get trendIcon(): string {
    return this.trendDirection === 'up' ? 'pi pi-arrow-up' :
      this.trendDirection === 'down' ? 'pi pi-arrow-down' : 'pi pi-minus';
  }
}
