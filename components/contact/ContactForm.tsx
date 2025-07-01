"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createUserContact } from "@/components/actions/contact"; // importa tu action
import { Button } from "@heroui/button"; // Asumo que @heroui/button es tu componente de botón
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Send, CheckCircle } from "lucide-react";

// Define el esquema de validación para el formulario de contacto
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z
    .string()
    .email({ message: "Por favor ingresa un correo electrónico válido." }),
  consultationType: z.string({
    required_error: "Por favor selecciona un tipo de consulta.",
  }),
  subject: z
    .string()
    .min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(500, { message: "El mensaje no puede exceder los 500 caracteres." }),
});

// Componente principal del formulario de contacto
export function ContactForm() {
  // Estado para controlar si el formulario ha sido enviado con éxito
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Inicializa el hook useForm de react-hook-form con el resolver de Zod
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

  /**
   * Función que se ejecuta al enviar el formulario.
   * Llama a la Server Action para crear un nuevo contacto.
   * @param data Los datos del formulario validados por Zod.
   */
  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      // Llama a la Server Action para guardar el contacto
      await createUserContact({
        fullname: data.name,
        email: data.email,
        typemessage: data.consultationType,
        message: data.message,
      });
      setIsSubmitted(true); // Muestra el mensaje de éxito
      // Después de 5 segundos, oculta el mensaje y resetea el formulario
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 5000);
    } catch (error) {
      console.error("Error al enviar contacto:", error);
      // Puedes agregar aquí una notificación al usuario si el envío falla
    }
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-blue-900">Envíanos un Mensaje</CardTitle>
        <CardDescription>
          Completa el formulario y nos pondremos en contacto contigo lo antes
          posible
        </CardDescription>
      </CardHeader>
      {/* Mensaje de éxito visible después de enviar el formulario */}
      {isSubmitted && (
        <Alert className="bg-green-50 border-green-200 mb-4">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Campo Nombre */}
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
          {/* Campo Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Campo Tipo de consulta */}
          <FormField
            control={form.control}
            name="consultationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de consulta</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    {/* AQUI SE APLICA EL FONDO BLANCO */}
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Selecciona el tipo de consulta" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    <SelectItem value="general">Consulta general</SelectItem>
                    <SelectItem value="collaboration">
                      Interés en colaborar
                    </SelectItem>
                    <SelectItem value="early-access">
                      Acceso anticipado
                    </SelectItem>
                    <SelectItem value="technical">Consulta técnica</SelectItem>
                    <SelectItem value="academic">Consulta académica</SelectItem>
                    <SelectItem value="media">
                      Medios de comunicación
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Campo Asunto */}
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
          {/* Campo Mensaje */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[150px]"
                    placeholder="Escribe tu mensaje aquí..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <p className="text-xs text-gray-500 mt-1">
                  {field.value.length}/500 caracteres
                </p>
              </FormItem>
            )}
          />
          {/* Botón de envío del formulario */}
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            <Send className="mr-2 h-4 w-4" />
            {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>
      </Form>
    </>
  );
}
