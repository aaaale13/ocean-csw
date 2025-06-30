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
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Únete al Programa
              </h2>
              <p className="text-gray-600 md:text-lg">
                Completa el formulario y nos pondremos en contacto contigo para
                coordinar el acceso a la app.
              </p>
            </div>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Formulario de Registro
                </CardTitle>
                <CardDescription>
                  Todos los campos son obligatorios para procesar tu solicitud
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="firstName"
                    >
                      Nombre
                    </label>
                    <Input id="firstName" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="lastName"
                    >
                      Apellido
                    </label>
                    <Input id="lastName" placeholder="Tu apellido" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input id="email" placeholder="tu@email.com" type="email" />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="phone"
                  >
                    Teléfono
                  </label>
                  <Input id="phone" placeholder="+54 11 1234-5678" />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="city"
                  >
                    Ciudad
                  </label>
                  <Input id="city" placeholder="Tu ciudad" />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="poolType"
                  >
                    Tipo de piscina
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    id="poolType"
                  >
                    <option value="">Selecciona el tipo</option>
                    <option value="residential">Residencial</option>
                    <option value="commercial">Comercial</option>
                    <option value="community">Comunitaria</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="sensorOption"
                  >
                    ¿Cómo planeas usar OCEAN?
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    id="sensorOption"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="own-sensor">
                      Tengo mi propio sensor compatible
                    </option>
                    <option value="manual-mode">
                      Quiero probarlo en modo manual
                    </option>
                    <option value="interested-sensor">
                      Me interesa adquirir un sensor
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="experience"
                  >
                    Experiencia con tecnología IoT
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    id="experience"
                  >
                    <option value="">Selecciona tu nivel</option>
                    <option value="null">nulo</option>
                    <option value="beginner">Principiante</option>
                    <option value="intermediate">Intermedio</option>
                    <option value="advanced">Avanzado</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="motivation"
                  >
                    ¿Por qué quieres participar?
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    id="motivation"
                    placeholder="Cuéntanos tu motivación para unirte al programa Early Access..."
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input className="rounded" id="terms" type="checkbox" />
                  <label className="text-sm text-gray-700" htmlFor="terms">
                    Acepto los{" "}
                    <Link
                      className="text-blue-600 hover:text-blue-800 underline"
                      href="/terminos-condiciones"
                    >
                      términos y condiciones
                    </Link>{" "}
                    del programa Early Access
                  </label>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  Enviar Solicitud
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
