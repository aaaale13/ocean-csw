
// import { Button, Card, CardHeader} from "@heroui/react"
// import { Calendar, ArrowRight, BookOpen, CheckCircle, Clock, Users, Lightbulb } from "lucide-react"
// import Link from "next/link"

// export default function AvanceTesisPage() {
//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <span className="inline-flex items-center px-2.5 py-0.5 rounded text-sm font-medium border border-white/20 bg-white/10 text-white">
//                 Proyecto de Tesis
//             </span>
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//               Avances del <span className="text-cyan-200">Proyecto</span>
//             </h1>
//             <p className="max-w-[700px] text-blue-50 md:text-xl">
//               Seguimiento detallado del desarrollo de OCEAN como proyecto de tesis universitaria en Analista de
//               Sistemas.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
//               Línea de Tiempo del Proyecto
//             </h2>
//             <p className="max-w-[700px] text-gray-600 md:text-xl">
//               Desde la investigación inicial hasta la implementación final, cada hito del desarrollo de OCEAN.
//             </p>
//           </div>
//           <div className="mx-auto max-w-4xl">
//             <div className="space-y-8">
//               {/* Hito 1 - Completado */}
//               <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
//                 <div className="absolute left-[-8px] top-0 bg-green-500 w-4 h-4 rounded-full"></div>
//                 <Card className="bg-white border-blue-200 shadow-sm">
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <Calendar className="h-4 w-4" />
//                         <span>Octubre 2024</span>
//                       </div>
//                       <span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
//   Completado
// </span>
//                     </div>
//                     <CardTitle className="text-blue-900">Investigación y Marco Teórico</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <p className="text-gray-600">
//                       Análisis exhaustivo del mercado actual de monitoreo de piscinas, definición del alcance del
//                       proyecto y estudio de los parámetros óptimos para el mantenimiento de piscinas.
//                     </p>
//                     <div className="grid gap-2 md:grid-cols-2">
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Estado del arte completado</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Análisis de competencia</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Definición de requerimientos</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Marco teórico establecido</span>
//                       </div>
//                     </div>
//                     <Button className="p-0 h-auto text-blue-600">
//                       Leer informe completo <ArrowRight className="ml-1 h-3 w-3" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Hito 2 - Completado */}
//               <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
//                 <div className="absolute left-[-8px] top-0 bg-green-500 w-4 h-4 rounded-full"></div>
//                 <Card className="bg-white border-blue-200 shadow-sm">
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <Calendar className="h-4 w-4" />
//                         <span>Noviembre 2024</span>
//                       </div>
//                       <span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
//   Completado
// </span>
//                     </div>
//                     <CardTitle className="text-blue-900">Diseño de la Interfaz de Usuario</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <p className="text-gray-600">
//                       Creación de wireframes, prototipos interactivos y diseño de la experiencia de usuario de la
//                       aplicación OCEAN. Implementación del sistema de alertas y dashboard principal.
//                     </p>
//                     <div className="grid gap-2 md:grid-cols-2">
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Wireframes completados</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Prototipo interactivo</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Sistema de alertas diseñado</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Pruebas de usabilidad</span>
//                       </div>
//                     </div>
//                     <Button className="p-0 h-auto text-blue-600">
//                       Ver prototipos <ArrowRight className="ml-1 h-3 w-3" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Hito 3 - En Progreso */}
//               <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
//                 <div className="absolute left-[-8px] top-0 bg-blue-500 w-4 h-4 rounded-full animate-pulse"></div>
//                 <Card className="bg-white border-blue-200 shadow-sm">
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <Calendar className="h-4 w-4" />
//                         <span>Diciembre 2024</span>
//                       </div>
//                       <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
//   En Progreso
// </span>
//                     </div>
//                     <CardTitle className="text-blue-900">Desarrollo del Sistema de Compatibilidad</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <p className="text-gray-600">
//                       Desarrollo del sistema de compatibilidad con sensores existentes y implementación del modo manual.
//                       Pruebas de integración con diferentes tipos de sensores IoT del mercado.
//                     </p>
//                     <div className="grid gap-2 md:grid-cols-2">
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">API de compatibilidad</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <CheckCircle className="h-4 w-4 text-green-500" />
//                         <span className="text-sm text-gray-600">Modo manual implementado</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Clock className="h-4 w-4 text-blue-500" />
//                         <span className="text-sm text-gray-600">Pruebas de sensores</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Clock className="h-4 w-4 text-blue-500" />
//                         <span className="text-sm text-gray-600">Validación de protocolos</span>
//                       </div>
//                     </div>
//                     <Button className="p-0 h-auto text-blue-600">
//                       Ver avances técnicos <ArrowRight className="ml-1 h-3 w-3" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Hito 4 - Planificado */}
//               <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
//                 <div className="absolute left-[-8px] top-0 bg-gray-300 w-4 h-4 rounded-full"></div>
//                 <Card className="bg-gray-50 border-gray-200 shadow-sm">
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <Calendar className="h-4 w-4" />
//                         <span>Enero 2025</span>
//                       </div>
// <span className="inline-flex items-center rounded-md border border-gray-300 px-2.5 py-0.5 text-sm font-medium text-gray-600">
//   Planificado
// </span>
//                     </div>
//                     <CardTitle className="text-gray-700">Desarrollo del Backend y API</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <p className="text-gray-600">
//                       Implementación del servidor backend, integración con ThingSpeak, desarrollo de la API REST y
//                       configuración de la base de datos para almacenamiento de datos históricos.
//                     </p>
//                     <div className="grid gap-2 md:grid-cols-2">
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Arquitectura del backend</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Integración ThingSpeak</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">API REST</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Base de datos</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Hito 5 - Planificado */}
//               <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
//                 <div className="absolute left-[-8px] top-0 bg-gray-300 w-4 h-4 rounded-full"></div>
//                 <Card className="bg-gray-50 border-gray-200 shadow-sm">
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <Calendar className="h-4 w-4" />
//                         <span>Febrero 2025</span>
//                       </div>
// <span className="inline-flex items-center rounded-md border border-gray-300 px-2.5 py-0.5 text-sm font-medium text-gray-600">
//   Planificado
// </span>
//                     </div>
//                     <CardTitle className="text-gray-700">Desarrollo de la Aplicación Móvil</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <p className="text-gray-600">
//                       Implementación de la aplicación móvil nativa para iOS y Android, integración con el backend,
//                       sistema de notificaciones push y funcionalidades de visualización de datos.
//                     </p>
//                     <div className="grid gap-2 md:grid-cols-2">
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">App React Native</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Notificaciones push</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Gráficos y dashboards</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Configuración de alertas</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Hito 6 - Planificado */}
//               <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
//                 <div className="absolute left-[-8px] top-0 bg-gray-300 w-4 h-4 rounded-full"></div>
//                 <Card className="bg-gray-50 border-gray-200 shadow-sm">
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <Calendar className="h-4 w-4" />
//                         <span>Marzo 2025</span>
//                       </div>
// <span className="inline-flex items-center rounded-md border border-gray-300 px-2.5 py-0.5 text-sm font-medium text-gray-600">
//   Planificado
// </span>
//                     </div>
//                     <CardTitle className="text-gray-700">Pruebas y Validación</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <p className="text-gray-600">
//                       Pruebas exhaustivas del sistema completo, validación con usuarios reales, ajustes finales y
//                       preparación de la documentación técnica para la defensa de tesis.
//                     </p>
//                     <div className="grid gap-2 md:grid-cols-2">
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Pruebas de campo</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Validación con usuarios</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Documentación técnica</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
//                         <span className="text-sm text-gray-500">Preparación defensa</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Statistics Section */}
//       <section className="bg-blue-50 py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Progreso del Proyecto</h2>
//             <p className="max-w-[700px] text-gray-600 md:text-xl">
//               Métricas y estadísticas del desarrollo de OCEAN hasta la fecha.
//             </p>
//           </div>
//           <div className="grid gap-6 md:grid-cols-4">
//             <Card className="border-blue-200 bg-white text-center">
//               <CardContent className="p-6">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">2/6</div>
//                 <div className="text-sm text-gray-600">Hitos Completados</div>
//               </CardContent>
//             </Card>
//             <Card className="border-blue-200 bg-white text-center">
//               <CardContent className="p-6">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">33%</div>
//                 <div className="text-sm text-gray-600">Progreso General</div>
//               </CardContent>
//             </Card>
//             <Card className="border-blue-200 bg-white text-center">
//               <CardContent className="p-6">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">120</div>
//                 <div className="text-sm text-gray-600">Horas Invertidas</div>
//               </CardContent>
//             </Card>
//             <Card className="border-blue-200 bg-white text-center">
//               <CardContent className="p-6">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
//                 <div className="text-sm text-gray-600">Usuarios Beta</div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Next Steps */}
//       <section className="py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Próximos Pasos</h2>
//             <p className="max-w-[700px] text-gray-600 md:text-xl">
//               Los siguientes hitos críticos en el desarrollo de OCEAN.
//             </p>
//           </div>
//           <div className="grid gap-6 md:grid-cols-3">
//             <Card className="border-blue-200 hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
//                   <Lightbulb className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <CardTitle className="text-center text-blue-900">Expandir Compatibilidad</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 text-center">
//                   Ampliar la compatibilidad con más tipos de sensores y mejorar el sistema de integración automática.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-blue-200 hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
//                   <Users className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <CardTitle className="text-center text-blue-900">Expandir Beta Testing</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 text-center">
//                   Incorporar más usuarios al programa de pruebas para obtener feedback diverso y mejorar el producto.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-blue-200 hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto">
//                   <BookOpen className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <CardTitle className="text-center text-blue-900">Documentación</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 text-center">
//                   Preparar la documentación técnica completa y el informe final de tesis para la defensa.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-12 md:py-24">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Quieres Ser Parte del Proyecto?</h2>
//             <p className="max-w-[600px] text-blue-50 md:text-xl">
//               Únete a nuestro programa de acceso anticipado y ayúdanos a perfeccionar OCEAN con tu feedback.
//             </p>
//             <div className="flex flex-col gap-2 min-[400px]:flex-row">
//               <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
//                 <Link href="/auth/signin">
//                   Iniciar Sesión
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//               <Button size="lg" className="border-white/20 text-white hover:bg-white/10">
//                 <Link href="/contacto">Contactar al Autor</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
