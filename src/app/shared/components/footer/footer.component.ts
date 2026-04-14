import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { Profile, SocialLink } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private dataService = inject(DataService);
  private router = inject(Router);
  
  profile: Profile | null = null;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }

  getSocialLinks(): SocialLink[] {
    return this.profile?.socialLinks || [];
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}