import { Component, OnInit, HostListener, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../../core/services/theme.service';
import { DataService } from '../../../core/services/data.service';
import { Profile } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private router = inject(Router);
  private themeService = inject(ThemeService);
  private dataService = inject(DataService);

  profile: Profile | null = null;
  isDarkMode = false;
  isScrolled = false;
  isMobileMenuOpen = false;
  activeRoute = '';

  navItems = [
    { label: 'Home', route: '/home', icon: 'pi pi-home' },
    { label: 'About', route: '/about', icon: 'pi pi-user' },
    { label: 'Skills', route: '/skills', icon: 'pi pi-star' },
    { label: 'Projects', route: '/projects', icon: 'pi pi-briefcase' },
    { label: 'Experience', route: '/experience', icon: 'pi pi-history' },
    { label: 'Education', route: '/education', icon: 'pi pi-book' },
    { label: 'Contact', route: '/contact', icon: 'pi pi-envelope' }
  ];

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
    });

    this.themeService.darkMode$.subscribe((isDark: boolean) => {
      this.isDarkMode = isDark;
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.activeRoute = event.urlAfterRedirects;
    });
    this.activeRoute = this.router.url;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.isMobileMenuOpen = false;
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }
}