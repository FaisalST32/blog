import { Comment } from './comment';

export class Blog {
  Id: string;
  Heading: string;
  SubHeading: string;
  DatePublished: Date;
  Body: string;
  HeaderImagePath: string;
  Comments: Comment[];

  Url: string;
}
