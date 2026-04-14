import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Experience } from '../../core/models/portfolio.models';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  private dataService = inject(DataService);
  
  experiences: Experience[] = [];

  ngOnInit(): void {
    this.dataService.getExperience().subscribe((experiences: Experience[]) => {
      this.experiences = experiences;
    });
  }
}