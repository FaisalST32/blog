import { Comment } from './comment';

export interface Blog {
  Id: string;
  Heading: string;
  SubHeading: string;
  DatePublished: Date;
  Body: string;
  HeaderImagePath: string;
  Comments: Comment[];
  IsPublished: boolean;
}
