import { CommonModule } from '@angular/common';
import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="section-title">
      <span class="subtitle">{{ subtitle }}</span>
      <h2 class="title">{{ title }}</h2>
      <p class="description" *ngIf="description">{{ description }}</p>
    </div>
  `,
  imports: [CommonModule],
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

    .section-title {
      text-align: center;
      margin-bottom: 3rem;
    }

    .subtitle {
      display: inline-block;
      font-family: 'Outfit', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .title {
      font-family: 'Outfit', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-color);
      margin: 0 0 1rem;
      line-height: 1.2;
    }

    .description {
      font-family: 'Outfit', sans-serif;
      font-size: 1.0625rem;
      color: var(--text-color-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  `]
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
}