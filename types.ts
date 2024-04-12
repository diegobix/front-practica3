export type PerfilType = {
  _id: string;
  name: string;
  age: number;
  sex: "Female" | "male";
  description: string;
  hobbies: string[];
  photo: string;
  comments: string[];
};
