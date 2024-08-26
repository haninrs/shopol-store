

export interface Banner {
  id: string;
  label: string;
  imgUrl: string;
}

export interface Category {
  id: string;
  name: string;
  banner: Banner;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: number;
  isFeatured: boolean;
  isArchived: boolean;
  images : Image[]
}

export interface Image {
  id: string;
  url: string;
}