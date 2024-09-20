import Blogs from "@/components/Blogs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-olive-50">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-olive-50/80 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <Image className="w-6 h-6" src="/logo.png" alt="Logo" width={24} height={24} />
          <span className="ml-2 text-xl font-bold text-olive-900">Net Zero</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-olive-700 transition-colors"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium hover:text-olive-700 transition-colors"
            href="#"
          >
            Our Vision
          </Link>
          <Link
            className="text-sm font-medium hover:text-olive-700 transition-colors"
            href="#"
          >
            What we do
          </Link>
          <Link
            className="text-sm font-medium hover:text-olive-700 transition-colors"
            href="#"
          >
            Contact us
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full min-h-screen py-20 md:py-24 lg:py-32 overflow-hidden">
          <div className="container relative z-10 h-full flex flex-col justify-center px-4 md:px-6">
            <div className="max-w-3xl flex flex-col md:items-end ml-auto">
              <h1 className="text-4xl md:text-right font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-olive-900 mb-4">
                Innovating for a
                <span className="text-green-600"> Sustainable </span>
                Future
              </h1>
              <p className="max-w-[600px] md:text-right text-olive-700 md:text-xl mb-8">
                Net Zero Solutions is a dedicated entity of Terrasols Solutions
                Private Limited, created with the sole purpose of leading the
                global transition towards sustainability
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 text-white hover:bg-green-700 transition-colors">
                  Explore Solutions
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-100 transition-colors"
                >
                  Learn Our Impact
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 w-2/3 h-2/3 md:w-1/2 md:h-1/2">
            <div className="relative w-full h-full">
              <Image
                alt="Earth"
                className="object-cover hidden md:block rounded-full animate-float"
                width={600}
                height={600}
                src="/earth.png?height=500&width=500"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-olive-50 via-olive-50/80 to-transparent pointer-events-none" />
        </section>

        <Blogs/>
      </main>
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="Boncap Logo"
                width={100}
                height={40}
                className="w-12 mb-4"
              />
              <p className="text-sm text-gray-400">
                &copy; 2023 BonCap. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Projects</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Renewable Energy</li>
                <li>Reforestation</li>
                <li>Clean Cooking</li>
                <li>Urban Greening</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Partnership</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Investors</li>
                <li>Project Developers</li>
                <li>Corporate Partners</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Compony</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}