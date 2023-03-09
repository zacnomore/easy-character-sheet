/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({ template: '' })
export class ObservedLifecycle implements OnDestroy {
  protected destroy$ = new Subject<void>();

  // TODO: Deal with subclasses also implementing?
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
