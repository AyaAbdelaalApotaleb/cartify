import { Controller ,Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService  } from './products.service';
@Controller('products')
export class ProductsController {
    constructor(private readonly productsServices: ProductsService){}
   
@Get()
getProducts () {
     return this.productsServices.findAll();      
}



@Get(':id')
getProduct(@Param('id',ParseIntPipe)
id:number,) {
    
   return this.productsServices.getProduct(id)
    
}
}