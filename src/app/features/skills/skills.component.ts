import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Skill, SkillCategory } from '../../core/models/portfolio.models';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private dataService = inject(DataService);
  
  skills: Skill[] = [];
  activeCategory: SkillCategory | 'all' = 'all';

  categories: { label: string; value: SkillCategory | 'all' }[] = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Database', value: 'database' },
    { label: 'DevOps', value: 'devops' },
    { label: 'Tools', value: 'tools' }
  ];

  ngOnInit(): void {
    this.dataService.getSkills().subscribe((skills: Skill[]) => {
      this.skills = skills;
    });
  }

  setCategory(category: SkillCategory | 'all'): void {
    this.activeCategory = category;
  }

  getFilteredSkills(): Skill[] {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(s => s.category === this.activeCategory);
  }
}