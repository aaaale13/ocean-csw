import { Droplets, ArrowLeft, FileText, AlertTriangle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TerminosCondicionesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-cyan-200" />
              <span className="text-2xl font-bold">OCEAN</span>
            </div>
            <Badge
              className="text-white border-white/20 bg-white/10"
              variant="outline"
            >
              Documento Legal
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Términos y <span className="text-cyan-200">Condiciones</span>
            </h1>
            <p className="max-w-[700px] text-blue-50 md:text-xl">
              Programa de Acceso Anticipado - App OCEAN
            </p>
            <p className="text-sm text-blue-200">
              Última actualización: 16 de junio de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-6 border-b bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <Button
            asChild
            className="text-blue-600 hover:text-blue-800"
            variant="ghost"
          >
            <Link href="/auth/signin">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al registro
            </Link>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-4xl">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Importante
                    </h3>
                    <p className="text-blue-800">
                      Por favor, lea detenidamente este documento antes de
                      participar en el Programa de Acceso Anticipado
                      (&quot;Programa&quot;) de la aplicación OCEAN
                      (&quot;App&quot;). Al aceptar participar como usuario beta
                      tester (&quot;Usuario&quot;), usted acepta estar
                      legalmente obligado por los siguientes términos y
                      condiciones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Section 1 - Objeto */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  OBJETO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  El Programa de Acceso Anticipado permite a un grupo limitado
                  de usuarios probar la App OCEAN antes de su lanzamiento
                  oficial con el objetivo de obtener retroalimentación, detectar
                  errores, validar funcionalidades en un entorno real y mejorar
                  la calidad general del producto antes de su distribución
                  pública.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 - Condiciones de Participación */}
            <Card className="border-blue-200 mx-auto">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  CONDICIONES DE PARTICIPACIÓN
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>2.1.</strong> La participación en el Programa es
                    voluntaria y gratuita.
                  </p>
                  <p className="text-gray-700">
                    <strong>2.2.</strong> El acceso está limitado y sujeto a la
                    aprobación del equipo desarrollador de OCEAN.
                  </p>
                  <p className="text-gray-700">
                    <strong>2.3.</strong> El Usuario declara ser mayor de 18
                    años o contar con autorización expresa y verificable de su
                    tutor legal.
                  </p>
                  <p className="text-gray-700">
                    <strong>2.4.</strong> El Usuario entiende que la versión en
                    acceso anticipado puede contener errores, fallos,
                    interrupciones o funciones incompletas, y acepta estos
                    riesgos.
                  </p>
                  <p className="text-gray-700">
                    <strong>2.5.</strong> El Usuario no deberá utilizar la App
                    en situaciones críticas donde una falla pudiera generar
                    daños a personas o bienes.
                  </p>
                  <p className="text-gray-700">
                    <strong>2.6.</strong> El Usuario se compromete a mantener
                    sus credenciales de acceso seguras y no compartirlas con
                    terceros.
                  </p>
                  <p className="text-gray-700">
                    <strong>2.7.</strong> OCEAN se reserva el derecho de excluir
                    a cualquier Usuario del Programa por incumplimiento de estos
                    términos o por conducta inapropiada.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3 - Uso de la App */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    3
                  </span>
                  USO DE LA APP
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>3.1.</strong> El Usuario se compromete a utilizar la
                    App únicamente con fines de prueba y evaluación.
                  </p>
                  <p className="text-gray-700">
                    <strong>3.2.</strong> Está prohibido compartir capturas de
                    pantalla, videos, comentarios o cualquier material sobre la
                    App fuera del canal oficial de retroalimentación, salvo
                    autorización por escrito.
                  </p>
                  <p className="text-gray-700">
                    <strong>3.3.</strong> El Usuario no podrá modificar,
                    descompilar, desensamblar, aplicar ingeniería inversa ni
                    intentar obtener el código fuente de la App.
                  </p>
                  <p className="text-gray-700">
                    <strong>3.4.</strong> Queda prohibida cualquier acción que
                    interfiera con el funcionamiento normal de la App, los
                    servidores, APIs o sistemas relacionados.
                  </p>
                  <p className="text-gray-700">
                    <strong>3.5.</strong> El uso de herramientas automatizadas
                    para pruebas sin consentimiento está prohibido.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 4 - Confidencialidad */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    4
                  </span>
                  CONFIDENCIALIDAD
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>4.1.</strong> Toda la información a la que el
                    Usuario acceda durante el Programa será considerada
                    confidencial.
                  </p>
                  <p className="text-gray-700">
                    <strong>4.2.</strong> El Usuario se compromete a no divulgar
                    ningún aspecto técnico, visual o funcional de la App sin
                    consentimiento escrito.
                  </p>
                  <p className="text-gray-700">
                    <strong>4.3.</strong> Esta obligación de confidencialidad se
                    mantiene aún luego de finalizada la participación en el
                    Programa.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 5 - Retroalimentación */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    5
                  </span>
                  RETROALIMENTACIÓN
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>5.1.</strong> El Usuario podrá enviar comentarios,
                    sugerencias, ideas, mejoras y reportes de errores.
                  </p>
                  <p className="text-gray-700">
                    <strong>5.2.</strong> Todo material enviado por el Usuario
                    podrá ser utilizado libremente por OCEAN, sin reconocimiento
                    ni compensación económica.
                  </p>
                  <p className="text-gray-700">
                    <strong>5.3.</strong> El Usuario cede expresamente cualquier
                    derecho de propiedad intelectual sobre el contenido generado
                    en relación con la App.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 6 - Propiedad Intelectual */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    6
                  </span>
                  PROPIEDAD INTELECTUAL
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>6.1.</strong> Todos los derechos sobre la App, su
                    contenido, diseño, nombre comercial, código fuente y
                    funcionalidades pertenecen exclusivamente a OCEAN.
                  </p>
                  <p className="text-gray-700">
                    <strong>6.2.</strong> La participación en el Programa no
                    otorga ningún derecho de propiedad ni de uso comercial sobre
                    la App.
                  </p>
                  <p className="text-gray-700">
                    <strong>6.3.</strong> Está prohibido utilizar logos, marcas
                    o signos distintivos de OCEAN sin autorización.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 7 - Datos Personales */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    7
                  </span>
                  DATOS PERSONALES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>7.1.</strong> El Usuario acepta que ciertos datos
                    personales (como correo electrónico, ubicación aproximada y
                    datos de uso) serán recolectados para fines de mejora del
                    producto.
                  </p>
                  <p className="text-gray-700">
                    <strong>7.2.</strong> Estos datos serán tratados conforme a
                    la Política de Privacidad de OCEAN y a la legislación
                    vigente en materia de protección de datos.
                  </p>
                  <p className="text-gray-700">
                    <strong>7.3.</strong> El Usuario puede solicitar en
                    cualquier momento la eliminación de sus datos personales, lo
                    cual implicará su exclusión del Programa.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 8 - Limitación de Responsabilidad */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    8
                  </span>
                  LIMITACIÓN DE RESPONSABILIDAD
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>8.1.</strong> OCEAN no será responsable por daños
                    directos, indirectos, incidentales o consecuentes derivados
                    del uso de la App en acceso anticipado.
                  </p>
                  <p className="text-gray-700">
                    <strong>8.2.</strong> El Usuario comprende y acepta que está
                    utilizando una versión preliminar bajo su propia
                    responsabilidad.
                  </p>
                  <p className="text-gray-700">
                    <strong>8.3.</strong> OCEAN no garantiza la disponibilidad,
                    estabilidad ni funcionalidad completa de la App durante el
                    Programa.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 9 - Modificaciones */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    9
                  </span>
                  MODIFICACIONES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <strong>9.1.</strong> OCEAN se reserva el derecho de modificar
                  estos términos en cualquier momento. Las modificaciones serán
                  notificadas y deberán ser aceptadas nuevamente por el Usuario
                  para continuar participando.
                </p>
              </CardContent>
            </Card>

            {/* Section 10 - Finalización del Programa */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    10
                  </span>
                  FINALIZACIÓN DEL PROGRAMA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>10.1.</strong> OCEAN podrá suspender, modificar o
                    finalizar el Programa sin necesidad de justificar la causa
                    ni de notificar con antelación.
                  </p>
                  <p className="text-gray-700">
                    <strong>10.2.</strong> El Usuario podrá abandonar el
                    Programa en cualquier momento notificando su decisión por
                    los canales habilitados.
                  </p>
                  <p className="text-gray-700">
                    <strong>10.3.</strong> En caso de finalización, el Usuario
                    deberá desinstalar la App y eliminar cualquier copia que
                    haya guardado.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 11 - Legislación Aplicable */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    11
                  </span>
                  LEGISLACIÓN APLICABLE Y JURISDICCIÓN
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>11.1.</strong> Estos Términos y Condiciones se rigen
                    por las leyes de la República Argentina.
                  </p>
                  <p className="text-gray-700">
                    <strong>11.2.</strong> Cualquier controversia será sometida
                    a los tribunales ordinarios de la Ciudad de Córdoba,
                    renunciando el Usuario a cualquier otro fuero o
                    jurisdicción.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 12 - Aceptación */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    12
                  </span>
                  ACEPTACIÓN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 font-medium">
                  Al presionar &quot;Acepto&quot; al momento de solicitar acceso
                  anticipado, el Usuario declara haber leído, entendido y
                  aceptado todos los términos y condiciones aquí detallados.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center">
                  <FileText className="h-6 w-6 mr-2" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800">
                  Para más información, dudas o contacto:{" "}
                  <strong>soporte@ocean-app.com.ar</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
              variant="outline"
            >
              <Link href="/auth/signin">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al registro
              </Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contacto">Contactar soporte</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
