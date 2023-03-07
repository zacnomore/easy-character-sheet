import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecs-image-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  private reader = new FileReader();

  @Input() altText = '';
  @ViewChild('filePicker', { read: ElementRef })
  inputEl!: ElementRef<HTMLInputElement>;
  imageURL = '';

  ngOnInit(): void {
    this.reader.onload = () => {
      if (typeof this.reader.result === 'string')
        this.imageURL = this.reader.result;
    };
  }

  updateImage(): void {
    const files = this.inputEl.nativeElement.files;
    if (files?.length !== 1) return;
    this.reader.readAsDataURL(files[0]);
  }
}
