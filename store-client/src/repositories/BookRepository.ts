import category from "../models/Category";
export interface IRepository<T>{
    getAll():Promise<T[] | null>;
}

export default interface Book {
    id: number;
    title: string;
    price: number;
    stockAmount: number;
    category: Partial<category>
}

export class BookRepository implements IRepository<Book> {
    async getAll(): Promise<Book[] | null> {
        return [
            {
                id: 1, title: 'Harry Potter', price: 560, stockAmount:10 ,category:{id:2, title:'Fantasy'}
            }
        ]
    }
}
