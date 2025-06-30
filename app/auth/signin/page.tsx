"use client";

import type React from "react";

import { useState } from "react";
import {
  Chrome,
  Droplets,
  ArrowRight,
  Shield,
  Users,
  Eye,
  EyeOff,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    // Simulate Google OAuth
    setTimeout(() => {
      router.push("/acceso-anticipado");
    }, 2000);
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      router.push("/acceso-anticipado");
    }, 2000);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => {
      router.push("/acceso-anticipado");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Droplets className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-900">OCEAN</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Accede a OCEAN</h1>
            <p className="text-gray-600">
              Inicia sesión o crea tu cuenta para unirte al Early Access
            </p>
          </div>
        </div>

        {/* Auth Card */}
        <Card className="border-blue-200 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-center text-blue-900">
              Bienvenido
            </CardTitle>
            <CardDescription className="text-center">
              Accede a tu cuenta o crea una nueva para participar en el programa
              Early Access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs className="space-y-4" defaultValue="signin">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="signup">Crear Cuenta</TabsTrigger>
              </TabsList>

              <TabsContent className="space-y-4" value="signin">
                {/* Google Sign In */}
                <Button
                  className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
                  disabled={isLoading}
                  onClick={handleGoogleSignIn}
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  {isLoading ? "Conectando..." : "Continuar con Google"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">O</span>
                  </div>
                </div>

                {/* Email Sign In */}
                <form className="space-y-4" onSubmit={handleEmailSignIn}>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="signin-email"
                    >
                      Correo electrónico
                    </label>
                    <Input
                      required
                      id="signin-email"
                      placeholder="tu@email.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="signin-password"
                    >
                      Contraseña
                    </label>
                    <div className="relative">
                      <Input
                        required
                        id="signin-password"
                        placeholder="Tu contraseña"
                        type={showPassword ? "text" : "password"}
                      />
                      <Button
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        size="sm"
                        type="button"
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        className="rounded"
                        id="remember"
                        type="checkbox"
                      />
                      <label
                        className="text-sm text-gray-600"
                        htmlFor="remember"
                      >
                        Recordarme
                      </label>
                    </div>
                    <Link
                      className="text-sm text-blue-600 hover:text-blue-800"
                      href="#"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent className="space-y-4" value="signup">
                {/* Google Sign Up */}
                <Button
                  className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
                  disabled={isLoading}
                  onClick={handleGoogleSignIn}
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  {isLoading ? "Conectando..." : "Registrarse con Google"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">O</span>
                  </div>
                </div>

                {/* Email Sign Up */}
                <form className="space-y-4" onSubmit={handleSignUp}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="signup-firstname"
                      >
                        Nombre
                      </label>
                      <Input
                        required
                        id="signup-firstname"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium text-gray-700"
                        htmlFor="signup-lastname"
                      >
                        Apellido
                      </label>
                      <Input
                        required
                        id="signup-lastname"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="signup-email"
                    >
                      Correo electrónico
                    </label>
                    <Input
                      required
                      id="signup-email"
                      placeholder="tu@email.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="signup-password"
                    >
                      Contraseña
                    </label>
                    <div className="relative">
                      <Input
                        required
                        id="signup-password"
                        placeholder="Crea una contraseña"
                        type={showPassword ? "text" : "password"}
                      />
                      <Button
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        size="sm"
                        type="button"
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      required
                      className="rounded"
                      id="terms"
                      type="checkbox"
                    />
                    <label className="text-sm text-gray-600" htmlFor="terms">
                      Acepto los{" "}
                      <Link
                        className="text-blue-600 hover:text-blue-800 underline"
                        href="/terminos-condiciones"
                      >
                        términos y condiciones
                      </Link>
                    </label>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardContent className="p-4">
            <div className="text-center space-y-3">
              <h3 className="font-semibold text-blue-900">
                ¿Por qué crear una cuenta?
              </h3>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>Acceso exclusivo al programa Early Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>Participar en el desarrollo de OCEAN</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span>Probar con tu sensor o en modo manual</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center"
            href="/"
          >
            <ArrowRight className="mr-1 h-3 w-3 rotate-180" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
