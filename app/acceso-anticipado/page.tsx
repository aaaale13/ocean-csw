import {
  Smartphone,
  Droplets,
  Users,
  MessageSquare,
  Star,
  CheckCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";

import { EarlyAccessForm } from "@/components/acceso-anticipado/EarlyAccessForm";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AccesoAnticipadoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge
              className="text-white border-white/20 bg-white/10"
              variant="outline"
            >
              Programa Exclusivo
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Acceso <span className="text-cyan-200">Anticipado</span>
            </h1>
            <p className="max-w-[700px] text-blue-50 md:text-xl">
              Sé parte de los primeros usuarios en experimentar OCEAN y ayúdanos
              a perfeccionar la mejor solución de monitoreo de piscinas del
              mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
              ¿Por Qué Unirse al Early Access?
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Los participantes del programa de acceso anticipado obtienen
              beneficios exclusivos y la oportunidad de influir en el desarrollo
              final del producto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center text-blue-900">
                  Feedback Directo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Tu opinión será fundamental para mejorar la app y los
                  sensores. Tendrás comunicación directa con el equipo de
                  desarrollo.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center text-blue-900">
                  Acceso Prioritario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Sé de los primeros en probar OCEAN, ya sea con tu propio
                  sensor compatible o en modo manual durante el período de
                  pruebas beta.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center text-blue-900">
                  Reconocimiento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Los participantes más activos serán mencionados en el informe
                  final de tesis y en los materiales de marketing del producto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-blue-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
              ¿Qué Incluye el Programa?
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Los participantes del Early Access tendrán acceso completo a todas
              las funcionalidades de OCEAN durante el período de pruebas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-blue-200 bg-white">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">App OCEAN Beta</CardTitle>
                <CardDescription>
                  Acceso completo a la aplicación móvil en versión beta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dashboard en tiempo real</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Sistema de alertas personalizable</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Historial de datos y gráficos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Recomendaciones de mantenimiento</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white">
              <CardHeader>
                <Droplets className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">Opciones de Uso</CardTitle>
                <CardDescription>
                  Flexibilidad para diferentes tipos de usuarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Conecta tu sensor compatible</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Modo manual para pruebas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Simulación de datos en tiempo real</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Configuración personalizable</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-white">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-900">
                  Soporte Prioritario
                </CardTitle>
                <CardDescription>
                  Atención personalizada durante todo el programa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Canal directo con desarrolladores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Sesiones de feedback mensuales</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Soporte técnico prioritario</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Actualizaciones tempranas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <main className="container mx-auto p-4">
        <EarlyAccessForm />
      </main>
    </div>
  );
}
