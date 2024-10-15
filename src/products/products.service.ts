import { Injectable} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
export interface Product{
    id:number;
    name: string;
    price:number;
}

@Injectable()
export class ProductsService {
    private products: Product[] =[
        {  id:1 ,
          name: "trrr",
          price:100,},
          { id:2 ,
          name: "pppp",
          price:200,}
      ];
      findAll(){
        return this.products;
      }
    
 getProduct(id: number) {
    const product =  this.products.find((product)=> product.id ===id); // تأكد من أن هذه الطريقة صحيحة
    if (!product) {
        throw new Error('product not found'); // يمكنك استخدام استثناء مخصص هنا
    }
    return product;
}
createProduct(product: CreateProductDto){
    const { name ,price}=product;
const products= this.products.push({
    id:this.products.length +1,
    name,
    price,
});
return this.products;
}
}
