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

export const defaultImg = "https://i.ibb.co/DYqQzbP/b7c2f1c0889652a666402f0222ae38bc.jpg"
export const dummyImg = "https://dummyimage.com/1205x505"
