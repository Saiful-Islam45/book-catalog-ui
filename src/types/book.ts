export interface IBook {
    _id?: string;
    title: string;
    author: string;
    genre: string;
    publicationYear: string;
    reviews: string[];
    authorInfo?: string;
    createdAt?: string;
    updatedAt?: string;
}

export const defaultImg = "https://dummyimage.com/720x400"
export const dummyImg = "https://dummyimage.com/1205x505"
