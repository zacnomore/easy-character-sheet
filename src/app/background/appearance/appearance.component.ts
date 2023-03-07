import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { firstValueFrom, fromEvent } from 'rxjs';

@Component({
  selector: 'ecs-appearance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss'],
})
export class AppearanceComponent {
  private reader = new FileReader();
  @ViewChild('filePicker', { read: ElementRef })
  inputEl!: ElementRef<HTMLInputElement>;
  imageURL = '';

  constructor(private changeDetector: ChangeDetectorRef) {
    this.reader.onload = () => {
      if (typeof this.reader.result === 'string')
        this.imageURL = this.reader.result;
      // this.changeDetector.markForCheck();
    };
  }

  updateImage(): void {
    const files = this.inputEl.nativeElement.files;
    if (files?.length !== 1) return;
    this.reader.readAsDataURL(files[0]);
  }
}
