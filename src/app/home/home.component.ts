import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  public imagesCount = 6;
  public hideLoader = false;
  public imagesLoadedCount = 0;


  public blogPosts = [
    {
      heading: 'Let\'s Fight',
      subHeading: 'Aren\'t we always fighting?',
      date: '26-03-2019',
      imgSrc: '../../../assets/images/blog-1.jpg'
    },
    {
      heading: 'Why do we fall, Bruce?',
      subHeading: 'So, we could get back up',
      date: '23-05-2018',
      imgSrc: '../../../assets/images/blog-3.jpg'

    },
    {
      heading: 'Is it a Hazard?',
      subHeading: 'It probably is, but hey, what can you do?',
      date: '15-04-2018',
      imgSrc: '../../../assets/images/blog-4.jpg'

    },
    {
      heading: 'Light the colors!',
      subHeading: 'They will brighten your day!',
      date: '16-11-2017',
      imgSrc: '../../../assets/images/blog-5.jpg'

    },
    {
      heading: 'Capture Life!',
      subHeading: 'What else are we here?',
      date: '14-03-2018',
      imgSrc: '../../../assets/images/blog-6.jpg'

    },
    {
      heading: 'It\'s in your DNA!',
      subHeading: 'I would know!',
      date: '06-01-2017',
      imgSrc: '../../../assets/images/blog-2.jpg'
    }
  ];
  public imageLoaded() {
    // console.log('imageLoaded');
    // this.imagesLoadedCount = this.imagesLoadedCount + 1;
    // if (this.imagesLoadedCount === this.imagesCount) {
    //   this.hideLoader = true;
    // }
  }

  ngAfterViewInit(): void {
    this.hideLoader = true;
  }




}