export interface IRepository<T>{
    getAll():Promise<T[] | null>;
}
export default interface category {
    id: number;
    title: string;
}
export class CategoryRepository implements IRepository<category> {
    async getAll(): Promise<category[] | null> {
        return [
            {
                id:1, title:'Computer'
            }
        ]
    }
}
