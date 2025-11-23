import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-activity-feed',
    standalone: true,
    imports: [CommonModule, TimelineModule, CardModule],
    templateUrl: './activity-feed.component.html',
    styleUrl: './activity-feed.component.css'
})
export class ActivityFeedComponent {
    @Input() events: any[] = [];

    getIcon(type: string): string {
        switch (type) {
            case 'alert': return 'pi pi-exclamation-triangle';
            case 'info': return 'pi pi-info-circle';
            case 'warning': return 'pi pi-exclamation-circle';
            default: return 'pi pi-circle';
        }
    }
}
