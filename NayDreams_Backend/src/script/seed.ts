import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedAdminUser() {
  try {
    const adminEmail = process.env.EMAIL_SUPER_ADMIN || "admin@naysdreams.com";
    const adminPassword = process.env.PASSWORD_SUPER_ADMIN || "admin123";
    const adminName = process.env.NAME_SUPER_ADMIN || "Super Admin";

    // Check if admin user already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (existingAdmin) {
      console.log("Admin user already exists");
    } else {
      // Hash password
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      // Create admin user
      const adminUser = await prisma.user.create({
        data: {
          email: adminEmail,
          password: hashedPassword,
          name: adminName,
          role: "ADMIN",
        },
      });

      console.log("Admin user created successfully:", adminUser.email);
    }

    // Seed categories
    const categories = [
      { name: "Tazas", description: "Tazas personalizadas" },
      { name: "Pullovers", description: "Pullovers personalizados" },
      { name: "Accesorios", description: "Accesorios personalizados" },
    ];

    for (const cat of categories) {
      const existingCat = await prisma.category.findUnique({
        where: { name: cat.name },
      });
      if (!existingCat) {
        await prisma.category.create({
          data: cat,
        });
        console.log(`Category ${cat.name} created`);
      } else {
        console.log(`Category ${cat.name} already exists`);
      }
    }
  } catch (error) {
    console.error("Error seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedAdminUser();
