"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Users, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  consultationType: z.string({
    required_error: "Por favor selecciona un tipo de consulta.",
  }),
  subject: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  message: z
    .string()
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres.",
    })
    .max(500, {
      message: "El mensaje no puede exceder los 500 caracteres.",
    }),
})

export default function ContactoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      consultationType: "",
      subject: "",
      message: "",
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values)

    // Show success message
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      form.reset()
    }, 5000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="outline" className="text-white border-white/20 bg-white/10">
              Ponte en Contacto
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span className="text-cyan-200">Contacto</span>
            </h1>
            <p className="max-w-[700px] text-blue-50 md:text-xl">
              ¿Tienes preguntas sobre OCEAN, quieres colaborar o necesitas más información sobre el proyecto? Estamos
              aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isSubmitted ? (
                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre</FormLabel>
                              <FormControl>
                                <Input placeholder="Tu nombre" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="tu@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="consultationType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de consulta</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona el tipo de consulta" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="general">Consulta general</SelectItem>
                                <SelectItem value="collaboration">Interés en colaborar</SelectItem>
                                <SelectItem value="early-access">Acceso anticipado</SelectItem>
                                <SelectItem value="technical">Consulta técnica</SelectItem>
                                <SelectItem value="academic">Consulta académica</SelectItem>
                                <SelectItem value="media">Medios de comunicación</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Asunto</FormLabel>
                            <FormControl>
                              <Input placeholder="¿En qué podemos ayudarte?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensaje</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Escribe tu mensaje aquí..." className="min-h-[150px]" {...field} />
                            </FormControl>
                            <FormMessage />
                            <p className="text-xs text-gray-500 mt-1">{field.value.length}/500 caracteres</p>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Información de Contacto</CardTitle>
                  <CardDescription>Formas directas de ponerte en contacto con el equipo de OCEAN</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">ocean.project@universidad.edu.ar</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Teléfono</p>
                      <p className="text-gray-600">+54 11 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Ubicación</p>
                      <p className="text-gray-600">
                        Facultad de Ingeniería
                        <br />
                        Universidad Nacional de Buenos Aires
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Author Information */}
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Sobre el Autor</CardTitle>
                  <CardDescription>Información del estudiante responsable del proyecto OCEAN</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Juan Pérez</h3>
                      <p className="text-gray-600">Estudiante de Ingeniería Electrónica</p>
                      <p className="text-sm text-gray-500">Universidad Nacional de Buenos Aires</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-blue-900">Áreas de Especialización</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        IoT
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        Sensores
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        Desarrollo Móvil
                      </Badge>
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        Sistemas Embebidos
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-blue-900">Redes Sociales</h4>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="icon" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                      <Button variant="outline" size="icon" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                      <Button variant="outline" size="icon" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Institution Information */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Información Institucional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Universidad</h4>
                    <p className="text-gray-600">Universidad Nacional de Buenos Aires (UBA)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Facultad</h4>
                    <p className="text-gray-600">Facultad de Ingeniería</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Carrera</h4>
                    <p className="text-gray-600">Ingeniería Electrónica</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Director de Tesis</h4>
                    <p className="text-gray-600">Dr. María González</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Año Académico</h4>
                    <p className="text-gray-600">2024-2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue-50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">Preguntas Frecuentes</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Respuestas a las consultas más comunes sobre el proyecto OCEAN
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">¿Cuándo estará disponible OCEAN comercialmente?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  OCEAN es actualmente un proyecto de tesis universitaria. La disponibilidad comercial dependerá de los
                  resultados de las pruebas y la evaluación posterior a la defensa de tesis, estimada para mediados de
                  2025.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">¿Puedo colaborar con el proyecto?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ¡Por supuesto! Estamos abiertos a colaboraciones académicas, técnicas y de investigación. Contáctanos
                  a través del formulario especificando tu área de interés y experiencia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">¿Cómo puedo acceder a la documentación técnica?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  La documentación técnica completa estará disponible después de la defensa de tesis. Actualmente,
                  puedes solicitar acceso a documentos específicos para fines académicos o de investigación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
