import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../core/models/portfolio.models';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private dataService = inject(DataService);

  projects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter = 'all';

  technologies = ['all', 'Angular', 'React', 'Node.js', 'Java'];

  ngOnInit(): void {
    this.dataService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  setFilter(tech: string): void {
    this.activeFilter = tech;
    if (tech === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter((p: Project) =>
        p.technologies.some((t: string) => t.toLowerCase() === tech.toLowerCase())
      );
    }
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}