"use client";

import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import {
  Thermometer,
  Droplets,
  Wifi,
  CheckCircle,
  ArrowRight,
  Settings,
} from "lucide-react";
import Image from "next/image"; // Asegúrate de que Image de next/image esté importado
import Link from "next/link";

export default function SensoresPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Chip
              className="text-white border-white/20 bg-white/10"
              variant="bordered"
            >
              Tecnología IoT
            </Chip>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Sensores <span className="text-cyan-200">Compatibles</span>
            </h1>
            <p className="max-w-[700px] text-blue-50 md:text-xl">
              OCEAN es compatible con diversos sensores IoT para el monitoreo
              preciso y continuo de los parámetros críticos de tu piscina.
            </p>
          </div>
        </div>
      </section>

      {/* Compatibility Info */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-xl blur-xl opacity-20 -z-10" />
              {/* CAMBIO AQUI: Usando tu imagen sensor-ocean.jpg */}
              <Image
                alt="Sensor OCEAN para monitoreo de piscinas" // Texto alternativo descriptivo
                className="mx-auto rounded-xl border border-blue-100 shadow-2xl"
                height={500} // Altura de la imagen (ajusta si es necesario)
                src="/sensores-ocean.jpg" // Ruta relativa a la carpeta public
                width={600} // Ancho de la imagen (ajusta si es necesario)
                priority // Carga la imagen con alta prioridad si es visible en la carga inicial
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                  Sensores Compatibles con OCEAN
                </h2>
                <p className="text-gray-600 md:text-lg">
                  OCEAN está diseñado para trabajar con una amplia gama de
                  sensores IoT existentes en el mercado. Si ya tienes sensores
                  de pH y temperatura, es probable que sean compatibles con
                  nuestra plataforma.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="border-blue-200">
                  <CardBody className="p-4 text-center">
                    <Thermometer className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-900">Temperatura</h3>
                    <p className="text-sm text-gray-600">Sensores DS18B20</p>
                    <p className="text-xs text-gray-500">y compatibles</p>
                  </CardBody>
                </Card>
                <Card className="border-blue-200">
                  <CardBody className="p-4 text-center">
                    <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-900">pH</h3>
                    <p className="text-sm text-gray-600">Sondas analógicas</p>
                    <p className="text-xs text-gray-500">estándar</p>
                  </CardBody>
                </Card>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Compatible con ESP32 y Arduino
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Protocolo Wi-Fi estándar
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    API REST para integración fácil
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Modo manual disponible para pruebas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Options */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
              Opciones de Uso
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              OCEAN se adapta a diferentes situaciones y necesidades de
              monitoreo.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <Wifi className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 text-center">
                  Con Sensor Propio
                </h3>
              </CardHeader>
              <CardBody className="space-y-4">
                <p className="text-gray-600 text-center">
                  Si ya tienes sensores de pH y temperatura compatibles, puedes
                  conectarlos directamente a OCEAN.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Monitoreo automático 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Alertas en tiempo real</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Historial automático de datos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Configuración personalizable</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 text-center">
                  Modo Manual
                </h3>
              </CardHeader>
              <CardBody className="space-y-4">
                <p className="text-gray-600 text-center">
                  Prueba OCEAN ingresando manualmente los valores de pH y
                  temperatura de tu piscina.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Ingreso manual de datos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Análisis de tendencias</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Recomendaciones personalizadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Ideal para pruebas iniciales</span>
                  </li>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              ¿Listo para Conectar tu Sensor?
            </h2>
            <p className="max-w-[600px] text-blue-50 md:text-xl">
              Únete a nuestro programa de acceso anticipado y conecta tu sensor
              compatible o prueba OCEAN en modo manual.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                as={Link}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                endContent={<ArrowRight className="h-4 w-4" />}
                href="/auth/signin"
                size="lg"
              >
                Iniciar Sesión
              </Button>
              <Button
                as={Link}
                className="border-white/30 text-white hover:bg-white/10 font-semibold"
                href="/contacto"
                size="lg"
                variant="bordered"
              >
                Consultar Compatibilidad
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
