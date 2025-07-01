"use server";

import { PrismaClient } from "@/lib/prisma/generated/prisma";


const prisma = new PrismaClient()

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