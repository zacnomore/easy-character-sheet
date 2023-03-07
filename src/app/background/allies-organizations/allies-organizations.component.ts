import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from 'src/app/image-upload/image-upload.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ecs-allies-organizations',
  standalone: true,
  imports: [
    CommonModule,
    ImageUploadComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './allies-organizations.component.html',
  styleUrls: ['./allies-organizations.component.scss'],
})
export class AlliesOrganizationsComponent {}
