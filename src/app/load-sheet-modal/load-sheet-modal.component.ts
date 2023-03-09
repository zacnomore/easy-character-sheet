import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export type LoadSheetResponse = null | undefined | number;

@Component({
  selector: 'ecs-load-sheet-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './load-sheet-modal.component.html',
  styleUrls: ['./load-sheet-modal.component.scss'],
})
export class LoadSheetModalComponent {
  protected idControl = new FormControl<number | null>(null);
}
