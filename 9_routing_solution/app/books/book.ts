export interface IBook {
  bookTitle: string;
  bookAuthor: string;
  productCode?: string;
  publishedOn: Date;
  bookDescription: string;
  genre?: string;
  specifications?: string;
  inStock: string;
  bookPrice: number;
  bookReviews: number;
  bookImageUrl: string;
}

// export interface IBook {
//   id: string;
//   name: string;
//   productCode: string;
//   releaseDate: Date;
//   description: string;
//   author: string;
//   genre: string;
//   specifications: string;
//   inStock: boolean;
//   price: number;
//   starRating: number;
//   imageUrl: string;
// }
