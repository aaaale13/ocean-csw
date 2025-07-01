"use client";

import Link from "next/link";
import { Droplets, Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto py-8 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-blue-900">OCEAN</span>
            </div>
            <p className="text-sm text-gray-600">
              Monitoreo inteligente de piscinas mediante sensores IoT
              conectados.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/sobre-ocean"
                >
                  Sobre OCEAN
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/sensores"
                >
                  Sensores
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Proyecto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/acceso-anticipado"
                >
                  Early Access
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/avance-tesis"
                >
                  Avance de la Tesis
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/contacto"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Contacto</h3>
            <div className="flex space-x-4">
              <Mail className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  href="/terminos-condiciones"
                >
                  Terminos y Condiciones del proyecto
                </Link>
              </li>
          <p>© 2024 OCEAN Project. Proyecto de Tesis Universitaria.</p>
        </div>
      </div>
    </footer>
  );
}
