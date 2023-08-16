export class Product{
    id:number;
    name:string;
    price:number;
    description:string;
    brand:string;
    category:string;
    size:number[];
    color:string[];
    gender:string;
    discountPrice?:number;
    is_in_inventory:boolean;
    items_left:number;
    imageURL:string;
    slug:string;
}