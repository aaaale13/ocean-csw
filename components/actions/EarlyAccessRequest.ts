"use server";

import { PrismaClient } from "@/lib/prisma/generated/prisma";

const prisma = new PrismaClient();

export const createEarlyAccessRequest = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  poolType: string;
  sensorOption: string;
  experience: string;
  motivation: string;
  acceptedTerms: boolean;
}) => {
  await prisma.earlyAccessRequest.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      poolType: data.poolType,
      sensorOption: data.sensorOption,
      experience: data.experience,
      motivation: data.motivation,
      acceptedTerms: data.acceptedTerms,
    },
  });
};
