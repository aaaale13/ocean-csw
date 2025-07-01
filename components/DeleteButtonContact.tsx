"use client";

import { startTransition } from "react";
import { deleteUserContact } from "@/components/actions/contact"; // O desde donde exportes la acción

export function DeleteButtonContact({ id }: { id: string }) {
  const handleDelete = () => {
    if (!confirm("¿Querés eliminar este contacto?")) return;

    startTransition(() => {
      deleteUserContact(id);
    });
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:underline"
    >
      Eliminar
    </button>
  );
}
