import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarModule, AvatarModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  isHidden = signal(false);
  lastScrollTop = 0;

  items: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
    { label: 'Passport', icon: 'pi pi-id-card', routerLink: '/passport' },
    { label: 'Traceability', icon: 'pi pi-map', routerLink: '/traceability' }
  ];

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const currentScroll = target.scrollTop;

    // Hide on scroll down, Show on scroll up
    // Threshold of 50px to avoid jitter at top
    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isHidden.set(true);
    } else {
      this.isHidden.set(false);
    }

    this.lastScrollTop = currentScroll;
  }
}
