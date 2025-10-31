import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Users, Clock, Phone, FileText, Home } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6">
            End-of-Life Doula Services
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Compassionate support tailored to your family's unique needs and circumstances.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Foundational Planning */}
            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Foundational Planning</CardTitle>
                <CardDescription className="text-base">
                  Essential preparation for those beginning their end-of-life planning journey
                </CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  Starting at $150/session
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Perfect for:</h4>
                  <p className="text-muted-foreground text-sm">
                    Individuals and families who want to start planning ahead, establish their wishes, and create a
                    foundation for future decisions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Initial consultation and assessment</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Advance directive guidance</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Values clarification exercises</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Basic legacy project planning</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Resource recommendations</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Follow-up support (30 days)</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full " asChild>
                  <Link href="/book-consultation">Book a Planning Session</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Comprehensive Support */}
            <Card className="relative hover:shadow-lg transition-shadow border-primary/30 shadow-md">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Comprehensive Support</CardTitle>
                <CardDescription className="text-base">
                  Complete guidance and ongoing support throughout the end-of-life journey
                </CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  $300/month package
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Perfect for:</h4>
                  <p className="text-muted-foreground text-sm">
                    Families who want thorough preparation, ongoing support, and comprehensive guidance throughout the
                    entire process.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Everything in Foundational Planning</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Monthly check-in sessions</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Family meeting facilitation</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Creating vigil plans</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Memorial service planning</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">24/7 phone support</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Grief support resources</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full " asChild>
                  <Link href="/book-consultation">Book a Planning Session</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Imminent Care */}
            <Card className="relative hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Imminent Care</CardTitle>
                <CardDescription className="text-base">
                  Immediate, compassionate support when time is limited
                </CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  $200/day intensive
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Perfect for:</h4>
                  <p className="text-muted-foreground text-sm">
                    Families facing imminent loss who need immediate support, guidance, and comfort during the most
                    difficult times.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Immediate bedside support</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Family communication facilitation</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Comfort measures guidance</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Vigil coordination</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">After-death care guidance</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Immediate grief support</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full " asChild>
                  <Link href="/book-consultation">Book a Planning Session</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Additional Services Available</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Virtual Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All services available remotely for clients nationwide. Perfect for initial planning or ongoing
                  support when distance is a factor.
                </p>
                <p className="text-sm font-medium text-primary">Same rates apply</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Document Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Assistance with advance directives, living wills, and other important end-of-life documents. Includes
                  review and guidance.
                </p>
                <p className="text-sm font-medium text-primary">$75 per document</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Home className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Home Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  In-person support in the comfort of your own home within the Dallas-Fort Worth area. Travel fees may
                  apply.
                </p>
                <p className="text-sm font-medium text-primary">+$50 travel fee</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Service Questions & Answers</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                How do I know which service level is right for me?
              </h3>
              <p className="text-muted-foreground">
                During our free consultation, we'll discuss your specific needs, timeline, and goals. I'll help you
                determine which level of support would be most beneficial for your situation. You can always upgrade or
                adjust as needs change.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Do you work with hospice care teams?</h3>
              <p className="text-muted-foreground">
                Yes, I collaborate closely with hospice teams, medical professionals, and other care providers. My role
                complements medical care by focusing on the emotional, spiritual, and practical aspects of the
                end-of-life experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">What if I need to cancel or reschedule?</h3>
              <p className="text-muted-foreground">
                I understand that end-of-life situations are unpredictable. I offer flexible scheduling and will work
                with you to adjust our sessions as needed. For planned sessions, I ask for 24-hour notice when possible.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Do you accept insurance?</h3>
              <p className="text-muted-foreground">
                Currently, most insurance plans do not cover death doula services. However, I offer flexible payment
                options and sliding scale fees for families with financial constraints. We can discuss payment
                arrangements during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every journey is unique. Let's discuss your specific needs and how I can best support you and your family
            during this important time.
          </p>
          <Button size="lg" asChild className="text-lg px-8 py-3 ">
            <Link href="/book-consultation">Book a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
