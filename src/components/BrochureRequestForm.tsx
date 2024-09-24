"use client"
import React, { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Leaf } from 'lucide-react'
import { sendEmail } from '@/app/contact/actions'

// Define types
type FormField = 'name' | 'email' | 'phone'


interface FormState {
  name: string;
  email: string;
  phone: string;
  errors: Partial<Record<FormField | 'submit', string>>;
  isSubmitting: boolean;
  success: boolean;
}

// Validation functions
const isValidName = (name: string): boolean => name.trim().length >= 2
const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const isValidPhone = (phone: string): boolean => /^\+?[0-9]{10,14}$/.test(phone)

export default function BrochureRequestForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    errors: {},
    isSubmitting: false,
    success: false
  })

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: undefined
      }
    }))
  }, [])

  const validateForm = useCallback((): Partial<Record<FormField, string>> => {
    const errors: Partial<Record<FormField, string>> = {}
    if (!isValidName(formState.name)) errors.name = 'Name must be at least 2 characters long'
    if (!isValidEmail(formState.email)) errors.email = 'Please enter a valid email address'
    if (!isValidPhone(formState.phone)) errors.phone = 'Please enter a valid phone number'
    return errors
  }, [formState.name, formState.email, formState.phone])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errors = validateForm()

    if (Object.keys(errors).length === 0) {
      setFormState(prev => ({ ...prev, isSubmitting: true, errors: {} }))
      try {
        const { success } = await sendEmail({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: ""
        })
        setFormState(prev => ({ ...prev, isSubmitting: false, success }))
      } catch (error) {
        console.log("🚀 ~ handleSubmit ~ error:", error)
        setFormState(prev => ({ 
          ...prev, 
          isSubmitting: false, 
          errors: { submit: 'An error occurred. Please try again.' }
        }))
      }
    } else {
      setFormState(prev => ({ ...prev, errors }))
    }
  }, [validateForm, formState.name, formState.email, formState.phone])

  const fields: FormField[] = ['name', 'email', 'phone']

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-emerald-300 p-4 py-16">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="bg-green-600 text-white rounded-t-lg">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Grow Your Knowledge</CardTitle>
          <CardDescription className="text-center text-green-100 mt-2">
            Request our eco-friendly brochure and plant the seeds of a sustainable future.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field) => (
              <div key={field}>
                <Label htmlFor={field} className="text-lg text-green-700 capitalize">
                  {field === 'phone' ? 'Phone Number' : field}
                </Label>
                <Input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={formState[field]}
                  onChange={handleInputChange}
                  required
                  placeholder={field === 'phone' ? '+1234567890' : `Enter your ${field}`}
                  className="mt-1 bg-green-50 border-green-300 focus:border-green-500 focus:ring-green-500"
                />
                {formState.errors[field] && (
                  <p className="text-sm text-red-500 mt-1">{formState.errors[field]}</p>
                )}
              </div>
            ))}
            <div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-2"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? 'Planting...' : 'Get Your Eco-Friendly Brochure'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="bg-green-50 rounded-b-lg">
          {formState.success ? (
            <div className="flex items-center space-x-2 text-green-600 w-full justify-center py-2">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">Success! Your eco-friendly brochure is on its way.</span>
            </div>
          ) : formState.errors.submit && (
            <div className="flex items-center space-x-2 text-red-600 w-full justify-center py-2">
              <AlertCircle className="w-6 h-6" />
              <span className="text-lg">{formState.errors.submit}</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}