export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Matheus Puppe",
    slug: "matheus-puppe",
    image: "./src/assets/authors/matheus.png",
    bio: "",
  }
];