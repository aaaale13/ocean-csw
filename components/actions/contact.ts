"use server";

import { PrismaClient } from "@/lib/prisma/generated/prisma";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getAllUserContacts = async () => {
  const contacts = await prisma.userContact.findMany({
    orderBy: { createdAt: "desc" }, // ordena por fecha descendente
  });
  return contacts;
};

export const createUserContact = async (data: {
  fullname: string;
  email: string;
  typemessage: string;
  message?: string;
}) => {
  await prisma.userContact.create({
    data: {
      fullname: data.fullname,
      email: data.email,
      typemessage: data.typemessage,
      message: data.message,
    },
  });
};

export const deleteUserContact = async (id: string) => {
  await prisma.userContact.delete({
    where: { id },
  });

  revalidatePath("/admin"); // para recargar la página admin después de eliminar
};
