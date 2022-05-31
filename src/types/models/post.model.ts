export type _PostModel = {
  id: number;
  image: string;
  text: string;
  date?: string;
  lesson_num: number;
  title: string;
  author: number;
  isLiked?: boolean;
};

export type PostModel = {
  id?: number;
  image?: string;
  body: string;
  date?: string;
  lesson_num?: number;
  title: string;
  author?: number;
  isLiked?: boolean;
  userId?: number;
};
