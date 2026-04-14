import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Profile, Skill, Project, Experience, Education } from '../models/portfolio.models';
import { PROFILE_DATA } from '../../data/profile.data';
import { SKILLS_DATA } from '../../data/skills.data';
import { PROJECTS_DATA } from '../../data/projects.data';
import { EXPERIENCE_DATA } from '../../data/experience.data';
import { EDUCATION_DATA } from '../../data/education.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getProfile(): Observable<Profile> {
    return of(PROFILE_DATA).pipe(delay(100));
  }

  getSkills(): Observable<Skill[]> {
    return of(SKILLS_DATA).pipe(delay(150));
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS_DATA).pipe(delay(200));
  }

  getExperience(): Observable<Experience[]> {
    return of(EXPERIENCE_DATA).pipe(delay(150));
  }

  getEducation(): Observable<Education[]> {
    return of(EDUCATION_DATA).pipe(delay(100));
  }

  getProjectsByTechnology(tech: string): Observable<Project[]> {
    const filtered = PROJECTS_DATA.filter((p: Project) => 
      p.technologies.some((t: string) => t.toLowerCase() === tech.toLowerCase())
    );
    return of(filtered).pipe(delay(100));
  }

  getFeaturedProjects(): Observable<Project[]> {
    const featured = PROJECTS_DATA.filter(p => p.featured);
    return of(featured).pipe(delay(100));
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    const filtered = SKILLS_DATA.filter(s => s.category === category);
    return of(filtered).pipe(delay(100));
  }
}