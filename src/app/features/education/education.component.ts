import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Education } from '../../core/models/portfolio.models';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  private dataService = inject(DataService);
  
  education: Education[] = [];

  ngOnInit(): void {
    this.dataService.getEducation().subscribe((education: Education[]) => {
      this.education = education;
    });
  }
}