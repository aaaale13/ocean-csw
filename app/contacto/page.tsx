"use client";
import { ContactForm } from "@/components/contact/ContactForm";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Users,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@heroui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
});

export default function ContactoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  });

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
              Ponte en Contacto
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span className="text-cyan-200">Contacto</span>
            </h1>
            <p className="max-w-[700px] text-blue-50 md:text-xl">
              ¿Tienes preguntas sobre OCEAN, quieres colaborar o necesitas más
              información sobre el proyecto? Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <Card className="flex flex-col space-y-6">
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 mx-auto">
              {/* Contact Details */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Información de Contacto
                  </CardTitle>
                  <CardDescription>
                    Formas directas de ponerte en contacto con el equipo de
                    OCEAN
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">
                        ocean.project@universidad.edu.ar
                      </p>
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
                  <CardTitle className="text-blue-900">
                    Sobre el Autor
                  </CardTitle>
                  <CardDescription>
                    Información del estudiante responsable del proyecto OCEAN
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">
                        Juan Pérez
                      </h3>
                      <p className="text-gray-600">
                        Estudiante de Ingeniería Electrónica
                      </p>
                      <p className="text-sm text-gray-500">
                        Universidad Nacional de Buenos Aires
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-blue-900">
                      Áreas de Especialización
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        className="text-blue-600 border-blue-200"
                        variant="outline"
                      >
                        IoT
                      </Badge>
                      <Badge
                        className="text-blue-600 border-blue-200"
                        variant="outline"
                      >
                        Sensores
                      </Badge>
                      <Badge
                        className="text-blue-600 border-blue-200"
                        variant="outline"
                      >
                        Desarrollo Móvil
                      </Badge>
                      <Badge
                        className="text-blue-600 border-blue-200"
                        variant="outline"
                      >
                        Sistemas Embebidos
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-blue-900">
                      Redes Sociales
                    </h4>
                    <div className="flex space-x-3">
                      <Button className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                      <Button className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                      <Button className="border-blue-200 text-blue-600 hover:bg-blue-50">
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
                  <CardTitle className="text-blue-900">
                    Información Institucional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Universidad</h4>
                    <p className="text-gray-600">
                      Universidad Nacional de Buenos Aires (UBA)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Facultad</h4>
                    <p className="text-gray-600">I R E S M</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Carrera</h4>
                    <p className="text-gray-600">Analista en Sistemas</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Director de Tesis
                    </h4>
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
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
              Preguntas Frecuentes
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Respuestas a las consultas más comunes sobre el proyecto OCEAN
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  ¿Cuándo estará disponible OCEAN comercialmente?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  OCEAN es actualmente un proyecto de tesis universitaria. La
                  disponibilidad comercial dependerá de los resultados de las
                  pruebas y la evaluación posterior a la defensa de tesis,
                  estimada para mediados de 2025.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  ¿Puedo colaborar con el proyecto?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ¡Por supuesto! Estamos abiertos a colaboraciones académicas,
                  técnicas y de investigación. Contáctanos a través del
                  formulario especificando tu área de interés y experiencia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  ¿Cómo puedo acceder a la documentación técnica?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  La documentación técnica completa estará disponible después de
                  la defensa de tesis. Actualmente, puedes solicitar acceso a
                  documentos específicos para fines académicos o de
                  investigación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
