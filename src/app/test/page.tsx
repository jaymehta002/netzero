import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Wind, Zap } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-white">
      <main className="container mx-auto px-4">
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">
            Sustainable and thriving future for our planet.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Aerial view of landscape"
                className="rounded-lg mb-4"
              />
            </div>
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Environmental Benefits
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how our solutions contribute to a cleaner environment
                  and reduced carbon footprint.
                </p>
                <Button variant="outline">
                  Next
                  <ArrowRight className="ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">OUR PROJECTS</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Solar Village Initiative
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Solar panel installation"
                  className="rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Solar panel on house"
                  className="rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=150&width=200"
                  alt="Solar farm"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Completed 2024</span>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Wind Farm Development
              </h3>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Ongoing</span>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">
            Renewable energy innovations and insights.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Mountain landscape"
                className="rounded-lg mb-4"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Sustainable Living Tips
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="mr-2" />
                  <span>Innovative Energy Storage Solutions</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2" />
                  <span>Bioenergy Breakthroughs</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2" />
                  <span>Harnessing Marine Energy</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">© 2024 — SUERGY</div>
            <div className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
