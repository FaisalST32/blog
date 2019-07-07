import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: '<div class="body-content"><router-outlet></router-outlet></div>',
  styles: [`
  .body-content{
    min-height: calc(100vh - 120px);
  }`]
})
export class ContentComponent {}
