"use client";

import { startTransition } from "react";
import { deleteEarlyAccessRequest } from "@/components/actions/EarlyAccessRequest";

export function DeleteButtonEarlyAccess({ id }: { id: string }) {
  const handleDelete = () => {
    if (!confirm("¿Querés eliminar esta solicitud de acceso anticipado?")) return;

    startTransition(() => {
      deleteEarlyAccessRequest(id);
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
