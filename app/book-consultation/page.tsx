"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Phone, Video, MapPin, CheckCircle, Calendar as CalendarIcon, CreditCard, User } from "lucide-react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function BookConsultationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState("")
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationType: "virtual",
    serviceType: "foundational",
    message: "",
    agreedToTerms: false,
    // Payment fields
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ]

  const serviceTypes = [
    { value: "foundational", label: "Foundational Planning", price: "$150" },
    { value: "comprehensive", label: "Comprehensive Support", price: "$300/month" },
    { value: "imminent", label: "Imminent Care", price: "$200/day" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="py-16 lg:py-24 bg-muted/30 flex-1 flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-foreground mb-4">Thank You for Reaching Out</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your session has been successfully booked! You'll receive a confirmation email shortly.
              </p>
            </div>

            <Card className="text-left">
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Personal Response</p>
                    <p className="text-muted-foreground text-sm">
                      I'll personally review your request and send you a thoughtful response within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Session Confirmation</p>
                    <p className="text-muted-foreground text-sm">
                      You'll receive a confirmation email with session details and meeting link.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Compassionate Conversation</p>
                    <p className="text-muted-foreground text-sm">
                      We'll discuss your needs and how I can best support you and your family.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-muted-foreground mt-8">
              If you have urgent needs, please don't hesitate to call me directly.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6">
            Book a Session
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Schedule your consultation and begin your journey with compassionate end-of-life support.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-blue-600' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-muted'}`}>
                1
              </div>
              <span className="font-medium">Service & Info</span>
            </div>
            <div className={`w-16 h-0.5 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-muted'}`}></div>
            <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-blue-600' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-muted'}`}>
                2
              </div>
              <span className="font-medium">Schedule</span>
            </div>
            <div className={`w-16 h-0.5 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-muted'}`}></div>
            <div className={`flex items-center space-x-2 ${currentStep >= 3 ? 'text-blue-600' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-muted'}`}>
                3
              </div>
              <span className="font-medium">Payment</span>
            </div>
          </div>
        </div>
      </section>


      {/* Multi-Step Booking Form */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {currentStep === 1 && "Service Selection & Contact Information"}
                {currentStep === 2 && "Schedule Your Session"}
                {currentStep === 3 && "Payment Information"}
              </CardTitle>
              <CardDescription className="text-center">
                {currentStep === 1 && "Choose your service type and provide your contact details."}
                {currentStep === 2 && "Select your preferred date and time for the session."}
                {currentStep === 3 && "Complete your booking with secure payment information."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Service Selection & Contact Info */}
                {currentStep === 1 && (
                  <>
                    {/* Service Type Selection */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Select Service Type *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {serviceTypes.map((service) => (
                          <Card 
                            key={service.value}
                            className={`cursor-pointer transition-all ${
                              formData.serviceType === service.value 
                                ? 'ring-2 ring-blue-600 border-blue-600' 
                                : 'hover:shadow-md'
                            }`}
                            onClick={() => handleInputChange("serviceType", service.value)}
                          >
                            <CardContent className="p-4 text-center">
                              <h3 className="font-semibold mb-2">{service.label}</h3>
                              <p className="text-blue-600 font-bold">{service.price}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Consultation Type */}
                    <div className="space-y-3">
                      <Label className="text-lg font-semibold">Preferred Session Method *</Label>
                      <RadioGroup
                        value={formData.consultationType}
                        onValueChange={(value) => handleInputChange("consultationType", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="virtual" id="virtual" />
                          <Label htmlFor="virtual" className="flex items-center cursor-pointer">
                            <Video className="h-4 w-4 mr-2" />
                            Virtual (Video Call)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-call" />
                          <Label htmlFor="phone-call" className="flex items-center cursor-pointer">
                            <Phone className="h-4 w-4 mr-2" />
                            Phone Call
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="in-person" id="in-person" />
                          <Label htmlFor="in-person" className="flex items-center cursor-pointer">
                            <MapPin className="h-4 w-4 mr-2" />
                            In-Person (Dallas-Fort Worth area)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell me about your situation (optional)</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Share anything you'd like me to know before our session. This helps me prepare to better support you."
                        rows={4}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        disabled={!formData.name || !formData.email || !formData.serviceType}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Next: Schedule
                      </Button>
                    </div>
                  </>
                )}

                {/* Step 2: Calendar & Time Selection */}
                {currentStep === 2 && (
                  <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Select Date</h3>
                        <Calendar
                          onChange={setSelectedDate}
                          value={selectedDate}
                          minDate={new Date()}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Select Time</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={selectedTime === time ? "default" : "outline"}
                              className={selectedTime === time ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        disabled={!selectedDate || !selectedTime}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Next: Payment
                      </Button>
                    </div>
                  </>
                )}

                {/* Step 3: Payment Information */}
                {currentStep === 3 && (
                  <>
                    <div className="space-y-6">
                      {/* Service Summary */}
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">Session Summary</h3>
                          <div className="space-y-1 text-sm">
                            <p><strong>Service:</strong> {serviceTypes.find(s => s.value === formData.serviceType)?.label}</p>
                            <p><strong>Date:</strong> {selectedDate?.toLocaleDateString()}</p>
                            <p><strong>Time:</strong> {selectedTime}</p>
                            <p><strong>Method:</strong> {formData.consultationType === 'virtual' ? 'Virtual (Video Call)' : formData.consultationType === 'phone' ? 'Phone Call' : 'In-Person'}</p>
                            <p className="text-lg font-bold text-blue-600">
                              <strong>Total:</strong> {serviceTypes.find(s => s.value === formData.serviceType)?.price}
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Payment Form */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Payment Information</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card *</Label>
                          <Input
                            id="cardName"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange("cardName", e.target.value)}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange("cvv", e.target.value)}
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="billingAddress">Billing Address *</Label>
                          <Input
                            id="billingAddress"
                            value={formData.billingAddress}
                            onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                            placeholder="123 Main Street"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City *</Label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) => handleInputChange("city", e.target.value)}
                              placeholder="Dallas"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State *</Label>
                            <Input
                              id="state"
                              value={formData.state}
                              onChange={(e) => handleInputChange("state", e.target.value)}
                              placeholder="TX"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zipCode">ZIP Code *</Label>
                            <Input
                              id="zipCode"
                              value={formData.zipCode}
                              onChange={(e) => handleInputChange("zipCode", e.target.value)}
                              placeholder="75201"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Terms Agreement */}
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreedToTerms}
                          onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                          I agree to the terms of service and understand that this session will be charged according to the selected service type. All information shared will be kept confidential.
                        </Label>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        disabled={!formData.cardName || !formData.cardNumber || !formData.expiryDate || !formData.cvv || !formData.billingAddress || !formData.city || !formData.state || !formData.zipCode || !formData.agreedToTerms}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Complete Booking
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Need to Reach Me Directly?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            If you have urgent needs or prefer to speak immediately, I'm here to help.
          </p>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Response Time:</strong> Within 24 hours for all consultation
                requests
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Service Area:</strong> Dallas-Fort Worth (in-person) | Nationwide
                (virtual)
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Availability:</strong> Flexible scheduling including evenings and
                weekends
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
