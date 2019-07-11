import { Component } from '@angular/core';
import { UiService } from 'src/app/_services/ui.service';

@Component({
  selector: 'app-content',
  template: `<div class="pre-loader" *ngIf="uiService.loaderShown">
                <div class="loader-content">

                  <div class="loader-text">
                    {{uiService.loaderText}}<br>
                    <small><em>One moment...</em></small>
                  </div>

                  <div class="loader-progress transition">

                  </div>
                </div>
              </div>
            <div class="body-content">
                <router-outlet ></router-outlet>
            </div>`,
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(public uiService: UiService) {}
}
