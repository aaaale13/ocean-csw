"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { createEarlyAccessRequest } from "@/components/actions/EarlyAccessRequest";
import { Button } from "@heroui/button";
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

const formSchema = z.object({
  firstName: z.string().min(1, "El nombre es requerido"),
  lastName: z.string().min(1, "El apellido es requerido"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(1, "El teléfono es requerido"),
  city: z.string().min(1, "La ciudad es requerida"),
  poolType: z.string().min(1, "Selecciona un tipo de piscina"),
  sensorOption: z.string().min(1, "Selecciona una opción de uso"),
  experience: z.string().min(1, "Selecciona tu nivel de experiencia"),
  motivation: z.string().min(1, "La motivación es requerida"),
  acceptedTerms: z.boolean().refine(val => val === true, {
    message: "Debes aceptar los términos y condiciones",
  }),
});

export function EarlyAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      poolType: "",
      sensorOption: "",
      experience: "",
      motivation: "",
      acceptedTerms: false,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await createEarlyAccessRequest(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 5000);
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="text-blue-900">
          Únete al Programa Early Access
        </CardTitle>
        <CardDescription>
          Completa el formulario y nos pondremos en contacto contigo.
        </CardDescription>
      </CardHeader>

      {isSubmitted && (
        <Alert className="bg-green-50 border-green-200 mb-4">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            ¡Gracias por solicitar acceso anticipado! Te contactaremos pronto.
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="firstName"
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Tu apellido" {...field} />
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
                  <Input placeholder="tu@email.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="+54 11 1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input placeholder="Tu ciudad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo Tipo de piscina */}
          <FormField
            control={form.control}
            name="poolType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de piscina</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    {/* CAMBIO AQUI: !bg-white */}
                    <SelectTrigger className="!bg-white">
                      <SelectValue placeholder="Selecciona el tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="!bg-white">
                    <SelectItem value="residential">Residencial</SelectItem>
                    <SelectItem value="commercial">Comercial</SelectItem>
                    <SelectItem value="community">Comunitaria</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo ¿Cómo planeas usar OCEAN? */}
          <FormField
            control={form.control}
            name="sensorOption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Cómo planeas usar OCEAN?</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    {/* CAMBIO AQUI: !bg-white */}
                    <SelectTrigger className="!bg-white">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="!bg-white">
                    <SelectItem value="own-sensor">
                      Tengo mi propio sensor compatible
                    </SelectItem>
                    <SelectItem value="manual-mode">
                      Quiero probarlo en modo manual
                    </SelectItem>
                    <SelectItem value="interested-sensor">
                      Me interesa adquirir un sensor
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo Experiencia con tecnología IoT */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experiencia con tecnología IoT</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    {/* CAMBIO AQUI: !bg-white */}
                    <SelectTrigger className="!bg-white">
                      <SelectValue placeholder="Selecciona tu nivel" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="!bg-white">
                    <SelectItem value="null">nulo</SelectItem>
                    <SelectItem value="beginner">Principiante</SelectItem>
                    <SelectItem value="intermediate">Intermedio</SelectItem>
                    <SelectItem value="advanced">Avanzado</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo ¿Por qué quieres participar? */}
          <FormField
            control={form.control}
            name="motivation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Por qué quieres participar?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Cuéntanos tu motivación para unirte al programa Early Access..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo Acepto términos y condiciones */}
          <FormField
            control={form.control}
            name="acceptedTerms"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    id="acceptedTerms"
                    className="rounded"
                  />
                </FormControl>
                <label
                  htmlFor="acceptedTerms"
                  className="text-sm text-gray-700"
                >
                  Acepto los términos y condiciones
                </label>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Botón de envío del formulario */}
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Send className="mr-2 h-4 w-4" />
            {form.formState.isSubmitting ? "Enviando..." : "Enviar Solicitud"}
          </Button>
        </form>
      </Form>
    </>
  );
}
