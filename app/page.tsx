import { Button } from "@heroui/button"
import { Card, CardBody } from "@heroui/card"
import { Link } from "@heroui/link"
import { Droplets, Smartphone, Wifi, ArrowRight, BarChart3 } from 'lucide-react'

export default function OceanLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Mantené tu piscina en equilibrio con <span className="text-cyan-200">OCEAN</span>
                  </h1>
                  <p className="max-w-[600px] text-blue-50 md:text-xl">
                    La primera app argentina para el monitoreo inteligente de piscinas. Sensores IoT conectados que
                    miden pH y temperatura en tiempo real.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button 
                    as={Link} 
                    href="/sobre-ocean" 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50"
                    startContent={<ArrowRight className="h-4 w-4" />}
                  >
                    Conocer Más
                  </Button>
                  <Button 
                    as={Link} 
                    href="/auth/signin" 
                    variant="bordered" 
                    size="lg" 
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Iniciar Sesión
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img src="/logo-icon.png" alt="Logo de Ocean" className="w-90 h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">
                  Tecnología que Cuida tu Piscina
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  OCEAN combina sensores inteligentes con una app intuitiva para mantener tu piscina siempre en
                  condiciones óptimas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="flex flex-col items-center space-y-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Droplets className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Monitoreo en Tiempo Real</h3>
                  <p className="text-gray-600 text-center">Medición continua de parametros las 24 horas del día.</p>
                </CardBody>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="flex flex-col items-center space-y-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Smartphone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">App Intuitiva</h3>
                  <p className="text-gray-600 text-center">
                    Interfaz simple y clara para visualizar todos los parámetros.
                  </p>
                </CardBody>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="flex flex-col items-center space-y-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Wifi className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Conectividad IoT</h3>
                  <p className="text-gray-600 text-center">
                    Sensores conectados vía Wi-Fi para acceso remoto completo.
                  </p>
                </CardBody>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="flex flex-col items-center space-y-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Datos Históricos</h3>
                  <p className="text-gray-600 text-center">
                    Análisis de tendencias y reportes detallados de tu piscina.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                  ¿Listo para Revolucionar el Cuidado de tu Piscina?
                </h2>
                <p className="max-w-[600px] mx-auto text-gray-600 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a nuestro programa de acceso anticipado y sé parte del futuro del monitoreo de piscinas.
                </p>
              </div>
              <div className="space-x-4">
                <Button 
                  as={Link} 
                  href="/auth/signin" 
                  size="lg" 
                  color="primary"
                  endContent={<ArrowRight className="h-4 w-4" />}
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  as={Link} 
                  href="/sobre-ocean" 
                  variant="bordered" 
                  size="lg" 
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  Conocer Más
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}