export type UserType = {
  _id: string;
  name: string;
  age: number;
  sex: string;
  description: string;
  hobbies: string[];
  photo: string;
  comments: CommentType[];
};

export type CommentType = {
  user: string;
  message: string;
};
