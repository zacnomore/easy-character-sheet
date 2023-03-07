import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from 'src/app/image-upload/image-upload.component';

@Component({
  selector: 'ecs-appearance',
  standalone: true,
  imports: [CommonModule, ImageUploadComponent],
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss'],
})
export class AppearanceComponent {}
