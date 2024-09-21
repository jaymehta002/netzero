import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="space-y-24">
      <section className="relative h-[40vh] flex items-center bg-emerald-600">
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl">
            We&apos;d love to hear from you. Contact us for any inquiries or to
            schedule a consultation.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-emerald-600">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-emerald-600" />
                    49, Divine Residency, G Noida, Uttar Pradesh, 201305
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-emerald-600" />
                    +91 1234567890
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-emerald-600" />
                    info@terrasols.earth
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-12 mb-6 text-emerald-600">
                  Connect with Us
                </h2>
                <div className="flex space-x-4">
                  <Link href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                    <Facebook className="w-8 h-8" />
                  </Link>
                  <Link href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                    <Twitter className="w-8 h-8" />
                  </Link>
                  <Link href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                    <Instagram className="w-8 h-8" />
                  </Link>
                </div>
              </CardContent>
            </div>
            <div className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-emerald-600">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Sustainability Journey?
          </h2>
          <p className="text-xl mb-8">
            Our team of experts is here to help you achieve your sustainability
            goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-emerald-600">
            <Link href="/consultation">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}