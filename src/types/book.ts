export interface IBook {
    _id?: string;
    title: string;
    author: string;
    genre: string;
    reviews: string[];
    authorInfo?: string;
    createdAt?: string;
    updatedAt?: string;
}
