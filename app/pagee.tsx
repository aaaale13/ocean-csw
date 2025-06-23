import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";


export default function OceanLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Mantené tu piscina en equilibrio con <span className="text-cyan-200">OCEAN</span>
                  </h1>
                  <p className="max-w-[600px] text-blue-50 md:text-xl">
                    La primera app argentina para el monitoreo inteligente de piscinas. Sensores IoT conectados que
                    miden pH y temperatura en tiempo real.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button 
                    as={Link} 
                    href="/sobre-ocean" 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    Conocer Más
                  </Button>
                  <Button 
                    as={Link} 
                    href="/auth/signin" 
                    variant="bordered" 
                    size="lg" 
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Iniciar Sesión
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img src="/logo-icon.png" alt="Logo de Ocean" className="w-90 h-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}