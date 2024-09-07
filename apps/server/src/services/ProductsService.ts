import { prisma } from "../lib/prismaClient";


export class ProductsService {
    async getAllProducts() {
      //return prismaClient.product.findMany();
      return prisma.product.findMany();
    }
  
    async getProductById(id: number) {
      return prisma.product.findUnique({ where: { id } });
    }
  
    async createProduct(data: any) {
      return prisma.product.create({ data });
    }
  
    async updateProduct(id: number, data: any) {
      return prisma.product.update({ where: { id }, data });
    }
  
    async deleteProduct(id: number) {
      return prisma.product.delete({ where: { id } });
    }
  }

// Class made by laserants instructor:

/*
export class ProductsService {

    async getProducts(): Promise<ProductType[]> {
        const products = await prisma.product.findMany()

        return products.map((product) => ({
            name: product.name,
            description: product.description
        }) )
        
    }
} 
*/