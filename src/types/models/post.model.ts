export type PostModel = {
  id: number;
  image: string;
  text: string;
  date?: string;
  lesson_num: number;
  title: string;
  author: number;
  isLiked?: boolean;
};
