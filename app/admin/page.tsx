import { getAllUserContacts } from "@/components/actions/contact";
import { getAllEarlyAccessRequests } from "@/components/actions/EarlyAccessRequest";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

export default async function ContactoPage() {
  const contacts = await getAllUserContacts();
  const earlyAccess = await getAllEarlyAccessRequests();

  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold">
            Panel de Administración - OCEAN
          </h1>
          <p className="text-2xl mt-2">Gestión de formularios</p>
        </div>
      </div>

      <div className="p-4 space-y-8 container mx-auto px-4">
        {/* Tabla Contactos */}
        <Card>
          <CardHeader>
            <CardTitle>Formularios de Contacto</CardTitle>
            <CardDescription>
              Lista de formularios de contacto recibidos
            </CardDescription>
            <p className="text-sm text-gray-600 mt-1">
              Total: <strong>{contacts.length}</strong>
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Tipo Consulta</TableHead>
                  <TableHead>Mensaje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4">
                      No hay formularios de contacto.
                    </TableCell>
                  </TableRow>
                )}
                {contacts.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>
                      {new Date(c.createdAt).toLocaleDateString("es-AR")}
                    </TableCell>
                    <TableCell>{c.fullname}</TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{c.typemessage}</Badge>
                    </TableCell>
                    <TableCell
                      className="max-w-xs truncate"
                      title={c.message ?? ""}
                    >
                      {c.message}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Tabla Early Access */}
        <Card>
          <CardHeader>
            <CardTitle>Solicitudes de Acceso Anticipado</CardTitle>
            <CardDescription>
              Lista de solicitudes de acceso anticipado recibidas
            </CardDescription>
            <p className="text-sm text-gray-600 mt-1">
              Total: <strong>{earlyAccess.length}</strong>
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Teléfono</TableHead>
                  <TableHead>Ciudad</TableHead>
                  <TableHead>Tipo de piscina</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Motivación</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {earlyAccess.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-4">
                      No hay solicitudes de acceso anticipado.
                    </TableCell>
                  </TableRow>
                )}
                {earlyAccess.map((req) => (
                  <TableRow key={req.id}>
                    <TableCell>
                      {new Date(req.createdAt).toLocaleDateString("es-AR")}
                    </TableCell>
                    <TableCell>{`${req.firstName} ${req.lastName}`}</TableCell>
                    <TableCell>{req.email}</TableCell>
                    <TableCell>{req.phone}</TableCell>
                    <TableCell>{req.city}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {req.poolType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {req.acceptedTerms ? (
                        <Badge
                          variant="outline"
                          className="bg-green-500 text-white"
                        >
                          Aceptado
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-yellow-400 text-black"
                        >
                          Pendiente
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell
                      className="max-w-xs truncate"
                      title={req.motivation}
                    >
                      {req.motivation}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
