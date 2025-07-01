"use client";

import React, { useTransition } from "react";
import { updateEarlyAccessStatusAndNotify } from "@/components/actions/EarlyAccessRequest";

interface StatusButtonsProps {
  id: string;
  // Eliminamos onStatusUpdated ya que la revalidación se hace en el servidor
}

export function StatusButtons({ id }: StatusButtonsProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = (status: "aceptado" | "rechazado") => {
    startTransition(async () => {
      await updateEarlyAccessStatusAndNotify(id, status);
      // No necesitas hacer nada más aquí.
      // revalidatePath se encarga en el server action.
    });
  };

  return (
    <div className="flex gap-2">
      <button
        disabled={isPending}
        onClick={() => handleClick("aceptado")}
        className="bg-green-600 text-white px-2 rounded"
      >
        Aceptar
      </button>
      <button
        disabled={isPending}
        onClick={() => handleClick("rechazado")}
        className="bg-red-600 text-white px-2 rounded"
      >
        Rechazar
      </button>
    </div>
  );
}