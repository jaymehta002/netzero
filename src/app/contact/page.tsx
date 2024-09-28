"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendContactForm } from "./actions";

// Frontend schema (for form validation)
const frontendSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(1, "Message is required"),
});

type FrontendFormData = z.infer<typeof frontendSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FrontendFormData>({
    resolver: zodResolver(frontendSchema),
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (frontendData: FrontendFormData) => {
    try {
      // Combine firstName and lastName into a single name field
      const backendData = {
        name: `${frontendData.firstName} ${frontendData.lastName}`,
        email: frontendData.email,
        phone: frontendData.phone,
        message: frontendData.message,
      };

      const data = await sendContactForm(backendData);
      if (data.success) {
        reset();
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Failed to send email:", data.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-green-800">Contact Us</h1>
            <p className="text-gray-600">
              Email, call, or complete the form to learn how Eco-Friendly can solve your sustainability challenges.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">info@eco-friendly.com</p>
              <p className="text-gray-600">123-456-7890</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-700">Customer Support</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-green-600">Customer Support</h3>
                  <p className="text-sm text-gray-600">Our support team is available to assist with any questions or issues you may have.</p>
                </div>
                <div>
                  <h3 className="font-medium text-green-600">Feedback and Suggestions</h3>
                  <p className="text-sm text-gray-600">We&apos;re always looking to improve our services. Your feedback is valuable to us.</p>
                </div>
                <div>
                  <h3 className="font-medium text-green-600">Media Inquiries</h3>
                  <p className="text-sm text-gray-600">For press-related questions, please contact us at media@eco-friendly.com.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">You can reach us anytime</p>
            {isSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your message has been sent. We&apos;ll get back to you soon.</span>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    {...register("firstName")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="First name"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
                </div>
                <div>
                  <Input
                    {...register("lastName")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Last name"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                </div>
              </div>
              <div>
                <Input
                  {...register("email")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your email"
                  type="email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <Input
                  {...register("phone")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Phone number"
                  type="tel"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
              </div>
              <div>
                <textarea
                  {...register("message")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="How can we help?"
                  rows={4}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  By continuing you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}