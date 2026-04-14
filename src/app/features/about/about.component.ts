import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { Profile } from '../../core/models/portfolio.models';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, DialogModule, ButtonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private dataService = inject(DataService);

  profile: Profile | null = null;

  stats = [
    { label: 'Years Experience', value: this.profile?.yearsExperience, icon: 'pi pi-calendar' },
    { label: 'Projects Completed', value: this.profile?.projectsCompleted, icon: 'pi pi-briefcase' },
    { label: 'Happy Clients', value: this.profile?.happyClients, icon: 'pi pi-users' },
    { label: 'Awards Won', value: 0, icon: 'pi pi-trophy' }
  ];

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
      this.stats = [
        { label: 'Years Experience', value: this.profile?.yearsExperience, icon: 'pi pi-calendar' },
        { label: 'Projects Completed', value: this.profile?.projectsCompleted, icon: 'pi pi-briefcase' },
        { label: 'Happy Clients', value: this.profile?.happyClients, icon: 'pi pi-users' },
        { label: 'Awards Won', value: 0, icon: 'pi pi-trophy' }
      ];
    });
  }

  downloadResume(): void {
    if (this.profile?.resumeUrl) {
      window.open(this.profile.resumeUrl, '_blank');
    }
  }
}