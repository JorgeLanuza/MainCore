import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface DashboardState {
    totalTransformers: number;
    activeAlerts: number;
    efficiency: number;
    recentEvents: Array<{ id: string; type: 'alert' | 'info' | 'warning'; message: string; timestamp: Date }>;
    loading: boolean;
}

const initialState: DashboardState = {
    totalTransformers: 0,
    activeAlerts: 0,
    efficiency: 0,
    recentEvents: [],
    loading: false
};

@Injectable()
export class DashboardStore {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:5000/api/dashboard';

    private state = signal<DashboardState>(initialState);

    readonly stats = computed(() => ({
        total: this.state().totalTransformers,
        alerts: this.state().activeAlerts,
        efficiency: this.state().efficiency,
        loading: this.state().loading
    }));

    readonly recentEvents = computed(() => this.state().recentEvents);

    async loadDashboardData() {
        this.state.update(s => ({ ...s, loading: true }));

        try {
            const data: any = await firstValueFrom(this.http.get(this.apiUrl));

            this.state.update(s => ({
                ...s,
                loading: false,
                totalTransformers: data.stats.totalTransformers,
                activeAlerts: data.stats.activeAlerts,
                efficiency: data.stats.systemEfficiency,
                recentEvents: data.recentEvents.map((e: any) => ({
                    id: e.id,
                    type: e.severity === 'critical' ? 'alert' : e.severity === 'warning' ? 'warning' : 'info',
                    message: e.message,
                    timestamp: new Date(e.timestamp)
                }))
            }));
        } catch (error) {
            console.error('Failed to load dashboard data', error);
            this.state.update(s => ({ ...s, loading: false }));
        }
    }
}
