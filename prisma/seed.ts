import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  
  const hospital1 = await prisma.hospital.upsert({
    where: { name: 'Hospital Central' },
    update: {},
    create: {
      name: 'Hospital Central',
      description: 'Hospital líder en servicios de salud.',
      location: 'Calle Principal 123',
      capacity: 500,
      isOpen: true,
    },
  });

  const hospital2 = await prisma.hospital.upsert({
    where: { name: 'Clínica sur' },
    update: {},
    create: {
      name: 'Clínica Sur',
      description: 'Clínica especializada en cuidado de la salud mental.',
      location: 'Avenida Saludable 456',
      capacity: 200,
      isOpen: false,
    },
  });

  console.log({ hospital1, hospital2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
