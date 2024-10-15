import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
@Injectable()
export class PrismaService extends PrismaClient {}
// prisma/seed.ts



const prisma = new PrismaClient();

async function main() {
  const products = Array.from({ length: 10 }).map(() => ({
    title: faker.commerce.productName(),
    descripition: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    stock: faker.number.int ({ min: 1, max: 100 }) ,  // إضافة تحويل النوع
}));

  await prisma.product.createMany({
    data: products,
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });