"use client";

import type React from "react";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Tabs,
  Tab,
  Divider,
  Checkbox,
} from "@heroui/react";
import {
  Chrome,
  ArrowLeft,
  Shield,
  Users,
  Eye,
  EyeOff,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState("signin");
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
      <div className="w-full max-w-md space-y-6 mx-auto">
        {/* Header */}

        {/* Auth Card */}
        <Card className="border-blue-200 shadow-lg mx-auto">
          <CardHeader className="flex flex-col items-center text-center space-y-1 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 my-4">
              Bienvenido
            </h2>
            <p className="text-gray-600">
              Accede a tu cuenta o crea una nueva para participar en el programa
              Early Access
            </p>
          </CardHeader>
          <CardBody className="mx-auto w-full">
            <Tabs
              className="w-full mx-auto"
              color="primary"
              selectedKey={selected}
              onSelectionChange={(key) => setSelected(key as string)}
            >
              <Tab key="signin" title="Iniciar Sesión">
                <div className="space-y-4">
                  {/* Google Sign In */}
                  <Button
                    className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
                    isLoading={isLoading}
                    startContent={!isLoading && <Chrome className="h-4 w-4" />}
                    onClick={handleGoogleSignIn}
                  >
                    {isLoading ? "Conectando..." : "Continuar con Google"}
                  </Button>

                  <div className="relative">
                    <Divider className="my-4" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white px-2 text-xs uppercase text-gray-500">
                        O
                      </span>
                    </div>
                  </div>

                  {/* Email Sign In */}
                  <form className="space-y-4" onSubmit={handleEmailSignIn}>
                    <Input
                      isRequired
                      classNames={{
                        input: "text-gray-900",
                        label: "text-gray-700",
                      }}
                      label="Correo electrónico"
                      placeholder="tu@email.com"
                      type="email"
                      variant="bordered"
                    />
                    <Input
                      isRequired
                      classNames={{
                        input: "text-gray-900",
                        label: "text-gray-700",
                      }}
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      }
                      label="Contraseña"
                      placeholder="Tu contraseña"
                      type={showPassword ? "text" : "password"}
                      variant="bordered"
                    />
                    <div className="flex items-center justify-between">
                      <Checkbox color="primary" size="sm">
                        <span className="text-sm text-gray-600">
                          Recordarme
                        </span>
                      </Checkbox>
                      <Link
                        className="text-sm text-blue-600 hover:text-blue-800"
                        href="#"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      color="primary"
                      isLoading={isLoading}
                      type="submit"
                    >
                      {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                    </Button>
                  </form>
                </div>
              </Tab>

              <Tab key="signup" title="Crear Cuenta">
                <div className="space-y-4">
                  {/* Google Sign Up */}
                  <Button
                    className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
                    isLoading={isLoading}
                    startContent={!isLoading && <Chrome className="h-4 w-4" />}
                    onClick={handleGoogleSignIn}
                  >
                    {isLoading ? "Conectando..." : "Registrarse con Google"}
                  </Button>

                  <div className="relative">
                    <Divider className="my-4" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white px-2 text-xs uppercase text-gray-500">
                        O
                      </span>
                    </div>
                  </div>

                  {/* Email Sign Up */}
                  <form className="space-y-4" onSubmit={handleSignUp}>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        isRequired
                        classNames={{
                          input: "text-gray-900",
                          label: "text-gray-700",
                        }}
                        label="Nombre"
                        placeholder="Tu nombre"
                        variant="bordered"
                      />
                      <Input
                        isRequired
                        classNames={{
                          input: "text-gray-900",
                          label: "text-gray-700",
                        }}
                        label="Apellido"
                        placeholder="Tu apellido"
                        variant="bordered"
                      />
                    </div>
                    <Input
                      isRequired
                      classNames={{
                        input: "text-gray-900",
                        label: "text-gray-700",
                      }}
                      label="Correo electrónico"
                      placeholder="tu@email.com"
                      type="email"
                      variant="bordered"
                    />
                    <Input
                      isRequired
                      classNames={{
                        input: "text-gray-900",
                        label: "text-gray-700",
                      }}
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      }
                      label="Contraseña"
                      placeholder="Crea una contraseña"
                      type={showPassword ? "text" : "password"}
                      variant="bordered"
                    />
                    <Checkbox isRequired color="primary" size="sm">
                      <span className="text-sm text-gray-600">
                        Acepto los{" "}
                        <Link
                          className="text-blue-600 hover:text-blue-800 underline"
                          href="/terminos-condiciones"
                        >
                          términos y condiciones
                        </Link>
                      </span>
                    </Checkbox>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      color="primary"
                      isLoading={isLoading}
                      type="submit"
                    >
                      {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                    </Button>
                  </form>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>

        {/* Benefits */}
        <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardBody className="p-4">
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
          </CardBody>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center"
            href="/"
          >
            <ArrowLeft className="mr-1 h-3 w-3" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
