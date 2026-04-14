import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { Profile, SocialLink } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private dataService = inject(DataService);
  private router = inject(Router);

  profile: Profile | null = null;
  typedText = '';
  private textToType = '';
  private charIndex = 0;
  private typingInterval: any;

  taglines = [
    'Building elegant solutions with modern technologies',
    'Creating exceptional user experiences',
    'Full Stack Developer | Angular Expert | Problem Solver'
  ];
  currentTaglineIndex = 0;

  ngOnInit(): void {
    this.dataService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
      this.textToType = this.taglines[0];
      this.startTyping();
    });
  }

  startTyping(): void {
    this.typedText = '';
    this.charIndex = 0;

    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }

    this.typingInterval = setInterval(() => {
      if (this.charIndex < this.textToType.length) {
        this.typedText += this.textToType.charAt(this.charIndex);
        this.charIndex++;
      } else {
        setTimeout(() => {
          this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.taglines.length;
          this.textToType = this.taglines[this.currentTaglineIndex];
          this.startTyping();
        }, 2000);
        clearInterval(this.typingInterval);
      }
    }, 50);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  getSocialLinks(): SocialLink[] {
    return this.profile?.socialLinks || [];
  }
}