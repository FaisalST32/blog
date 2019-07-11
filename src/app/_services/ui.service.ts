import { Injectable } from '@angular/core';

@Injectable()
export class UiService {
  public loaderShown: boolean;

  private loaderTexts = ['K.I.S.S - Keep It Simple Stupid',
                        `Truth can only be found in one place: the code - Robert C. Martin`,
                        `D.R.Y - Don't Repeat Yourself`,
                        `T.D.A - Tell Don't Ask`,
                        `It's not enough for code to work - Robert C. Martin`,
                        `Code is like humor. When you have to explain it, it’s bad - Cory House`
                        ];
  public loaderText = 'K.I.S.S Keep It Simple Stupid';
  public showLoader() {
    this.loaderText = this.getRandomLoaderText();
    this.loaderShown = true;
  }

  public hideLoader() {
    this.loaderShown = false;
  }

  getRandomLoaderText() {
    return this.loaderTexts[Math.floor(Math.random() * this.loaderTexts.length)];
  }


}
