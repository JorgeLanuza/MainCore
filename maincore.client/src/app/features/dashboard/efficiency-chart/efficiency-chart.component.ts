import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-efficiency-chart',
    standalone: true,
    imports: [CommonModule, ChartModule],
    templateUrl: './efficiency-chart.component.html',
    styleUrl: './efficiency-chart.component.css'
})
export class EfficiencyChartComponent implements OnInit {
    data: any;
    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            datasets: [
                {
                    label: 'Efficiency (%)',
                    data: [95, 94, 98, 97, 99, 96, 98],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Load (%)',
                    data: [40, 45, 80, 85, 90, 70, 60],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    borderDash: [5, 5],
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}
