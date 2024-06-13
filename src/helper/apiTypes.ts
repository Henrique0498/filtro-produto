export type GetAllProducts = {
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  thumbnail: string;
  images: string[];
  reviews: TypeReviews[];
};

export type TypeReviews = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};
