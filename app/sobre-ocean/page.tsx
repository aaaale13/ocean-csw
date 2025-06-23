"use client"

import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react"
import { Bell, BarChart3, Wifi, Shield, Clock, Smartphone, Home, Building, Users, MapPin } from "lucide-react"
import Link from "next/link"

export default function SobreOceanPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Chip variant="bordered" className="text-white border-white/20 bg-white/10">
              Sobre el Proyecto
            </Chip>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              ¿Qué es <span className="text-cyan-200">OCEAN</span>?
            </h1>
            <p className="max-w-[700px] text-blue-50 md:text-xl">
              Una solución integral para el monitoreo inteligente de piscinas que combina sensores IoT, conectividad en
              la nube y una aplicación móvil intuitiva.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">¿Cómo Funciona OCEAN?</h2>
              <p className="max-w-[800px] mx-auto text-gray-600 md:text-lg">
                OCEAN puede funcionar con sensores compatibles que miden continuamente el pH y la temperatura del agua
                de tu piscina, o en modo manual para pruebas. Los datos se transmiten en tiempo real a través de Wi-Fi a
                nuestra plataforma en la nube, donde son procesados y enviados a tu smartphone.
              </p>
            </div>

            {/* Interactive Diagram */}
            <img src="/diagrama-ocean.png" alt="Diagrama de OCEAN" className="w-full max-w-xl mx-auto" />


            <div className="grid gap-6 md:grid-cols-3 mt-12">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Sensores Compatibles</h3>
                  <p className="text-gray-600">
                    Conecta tu sensor compatible o usa el modo manual para ingresar datos.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Transmisión de Datos</h3>
                  <p className="text-gray-600">Los datos se envían vía Wi-Fi a la plataforma ThingSpeak.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">App OCEAN</h3>
                  <p className="text-gray-600">Visualiza los datos, recibe alertas y obtén recomendaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-blue-50 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">¿A Quién Está Dirigido?</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              OCEAN está diseñado para satisfacer las necesidades de diferentes tipos de usuarios y organizaciones.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
              </CardHeader>
              <CardBody className="text-center pt-0">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Hogares</h3>
                <p className="text-gray-600 text-sm">
                  Propietarios de piscinas residenciales que buscan automatizar el mantenimiento y garantizar agua
                  segura para su familia.
                </p>
              </CardBody>
            </Card>
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
              </CardHeader>
              <CardBody className="text-center pt-0">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Hoteles</h3>
                <p className="text-gray-600 text-sm">
                  Establecimientos hoteleros que necesitan monitoreo constante para cumplir con regulaciones sanitarias.
                </p>
              </CardBody>
            </Card>
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardHeader>
              <CardBody className="text-center pt-0">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Clubes</h3>
                <p className="text-gray-600 text-sm">
                  Clubes deportivos y recreativos con piscinas de uso público que requieren control riguroso de calidad.
                </p>
              </CardBody>
            </Card>
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
              </CardHeader>
              <CardBody className="text-center pt-0">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Municipios</h3>
                <p className="text-gray-600 text-sm">
                  Gobiernos locales que administran piscinas públicas y necesitan sistemas de monitoreo eficientes.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
              Características Principales
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              OCEAN ofrece un conjunto completo de funcionalidades para el monitoreo y mantenimiento de piscinas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-blue-200">
              <CardHeader>
                <Bell className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="text-lg font-bold text-blue-900">Alertas en Tiempo Real</h3>
                <p className="text-sm text-gray-500">
                  Notificaciones instantáneas cuando los parámetros salen del rango óptimo
                </p>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Alertas por pH fuera de rango (7.2 - 7.6)</li>
                  <li>• Notificaciones de temperatura extrema</li>
                  <li>• Recordatorios de mantenimiento</li>
                </ul>
              </CardBody>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="text-lg font-bold text-blue-900">Datos Históricos</h3>
                <p className="text-sm text-gray-500">Análisis de tendencias y reportes detallados de tu piscina</p>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gráficos de evolución temporal</li>
                  <li>• Reportes semanales y mensuales</li>
                  <li>• Exportación de datos</li>
                </ul>
              </CardBody>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <Wifi className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="text-lg font-bold text-blue-900">Conectividad Wi-Fi</h3>
                <p className="text-sm text-gray-500">Conexión estable y segura para transmisión de datos</p>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Configuración simple vía app</li>
                  <li>• Conexión encriptada WPA2</li>
                  <li>• Alcance de hasta 50 metros</li>
                </ul>
              </CardBody>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="text-lg font-bold text-blue-900">Seguridad de Datos</h3>
                <p className="text-sm text-gray-500">Protección avanzada de tu información personal</p>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Encriptación end-to-end</li>
                  <li>• Servidores seguros en la nube</li>
                  <li>• Cumplimiento GDPR</li>
                </ul>
              </CardBody>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="text-lg font-bold text-blue-900">Monitoreo Continuo</h3>
                <p className="text-sm text-gray-500">Vigilancia continua con sensores compatibles</p>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mediciones automáticas regulares</li>
                  <li>• Modo manual disponible</li>
                  <li>• Resistente a condiciones climáticas</li>
                </ul>
              </CardBody>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="text-lg font-bold text-blue-900">App Móvil</h3>
                <p className="text-sm text-gray-500">Interfaz intuitiva para iOS y Android</p>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dashboard personalizable</li>
                  <li>• Modo offline para consultas</li>
                  <li>• Múltiples piscinas por cuenta</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Listo para Probar OCEAN?</h2>
            <p className="max-w-[600px] text-blue-50 md:text-xl">
              Únete a nuestro programa de acceso anticipado y sé uno de los primeros en experimentar el futuro del
              monitoreo de piscinas.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                as={Link}
                href="/auth/signin"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              >
                Iniciar Sesión
              </Button>
              <Button
                as={Link}
                href="/sensores"
                variant="bordered"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold"
              >
                Ver Sensores
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
