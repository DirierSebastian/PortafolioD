import { Tag } from "./Tag";

export interface Proyecto{
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}