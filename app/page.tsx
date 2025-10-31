import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Clock, Shield, HandHeart, UserCircle, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Text left, image right layout */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground leading-tight">
                Find Peace and Purpose on Life's Final Journey
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-pretty text-[#324A5F]/90 leading-relaxed">
                You don't have to face this alone. Compassionate, certified end-of-life support to help you and your family navigate with clarity, connection, and dignity.
              </p>
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/book-consultation">Find Comfort and Guidance</Link>
              </Button>
            </div>
            
            {/* Image - Right Side with Gradient Overlay */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-2xl lg:max-w-4xl rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#324A5F]/20 via-transparent to-transparent z-10 rounded-lg"></div>
                <Image
                  src="/test.jpg"
                  alt="Compassionate end-of-life support"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Certification Section */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-[#324A5F]/80 font-medium tracking-widest uppercase mb-2">Holding Space with Professional Excellence</p>
            <p className="text-base text-[#324A5F]/70">Certified & Supported By</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-2xl font-semibold text-[#324A5F] hover:text-primary transition-colors">INELDA</div>
            <div className="text-2xl font-semibold text-[#324A5F] hover:text-primary transition-colors">NASW</div>
            <div className="text-2xl font-semibold text-[#324A5F] hover:text-primary transition-colors">NEDA</div>
            <div className="text-2xl font-semibold text-[#324A5F] hover:text-primary transition-colors">IAPO</div>
          </div>
          <p className="text-xs text-center text-[#324A5F]/60 mt-6 italic">Note: Official certification logos will be added here when available</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/professional-woman-death-doula-warm-smile.jpg"
                alt="Compassionate death doula providing supportive care"
                width={500}
                height={600}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                You Don't Have to Navigate This Alone
              </h2>
              <p className="text-lg text-[#324A5F]/90 mb-8 leading-relaxed">
                Facing the end of life, whether for yourself or a loved one, can feel isolating and confusing. I am here to walk alongside you with compassion, understanding, and professional expertise.
              </p>
              <p className="text-lg text-[#324A5F]/90 mb-6 leading-relaxed">
                As a certified death doula, I provide non-medical support to individuals and families during the end-of-life journey. My role is to offer:
              </p>
              <ul className="space-y-4 text-lg text-[#324A5F]/90">
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong className="text-foreground">Emotional and spiritual comfort</strong> during this profound transition</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong className="text-foreground">Practical and logistical planning</strong> to honor your wishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong className="text-foreground">Family guidance and difficult conversations</strong> to foster connection and understanding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Walk Alongside Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who I Walk Alongside</h2>
            <p className="text-lg text-[#324A5F]/90 max-w-2xl mx-auto">
              I provide specialized support tailored to your unique situation and emotional needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 rounded-2xl border-2 border-transparent hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Individuals Planning Ahead</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#324A5F]/90 leading-relaxed">
                  For those seeking to lift the burden of uncertainty from their loved ones by creating a clear, compassionate plan for the future.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all duration-300 rounded-2xl border-2 border-primary/20">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Families Facing a Diagnosis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#324A5F]/90 leading-relaxed">
                  For families who need a compassionate guide to help them navigate overwhelming decisions and find moments of connection amidst the fear and uncertainty.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all duration-300 rounded-2xl border-2 border-transparent hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <HandHeart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-3">Caregivers Needing Respite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#324A5F]/90 leading-relaxed">
                  For dedicated caregivers who need support and relief so they can be truly present—not just busy—and care for themselves while caring for others.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Support Packages Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Support Packages</h2>
            <p className="text-lg text-[#324A5F]/90 max-w-2xl mx-auto">
              Three distinct service packages designed to meet you wherever you are in your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Foundational Planning */}
            <Card className="text-left hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Foundational Planning</CardTitle>
                <CardDescription className="text-base">Essential preparation for the future</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#324A5F]/90 mb-6 leading-relaxed">
                  A single-session deep dive to establish your core end-of-life plans, including advance directives and key wishes. Perfect for those beginning to think about end-of-life planning.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services">Explore Foundational Planning</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Comprehensive Support */}
            <Card className="text-left hover:shadow-xl transition-all duration-300 border-2 border-primary/30">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Comprehensive Support</CardTitle>
                <CardDescription className="text-base">Complete guidance for families</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#324A5F]/90 mb-6 leading-relaxed">
                  Ongoing, thorough preparation and support throughout the end-of-life journey. Ideal for families who want comprehensive guidance from planning through transition.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services">Explore Comprehensive Support</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Imminent Care */}
            <Card className="text-left hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Imminent Care</CardTitle>
                <CardDescription className="text-base">Immediate support when time is limited</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#324A5F]/90 mb-6 leading-relaxed">
                  Compassionate, focused care for families facing imminent loss. Providing comfort, guidance, and presence during the most difficult and urgent times.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services">Explore Imminent Care</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23324A5F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Families Are Saying</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-lg border border-border/50">
              <div className="flex gap-1 mb-4 text-primary">
                <span className="text-xl">★★★★★</span>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-semibold text-primary/90 italic mb-3 leading-tight">
                  "brought such peace to our family"
                </p>
              </div>
              <blockquote className="text-base text-[#324A5F]/90 mb-4 leading-relaxed">
                "Sacred Transitions brought such peace to our family during the most difficult time of our lives. Their guidance helped us honor my mother's wishes and find meaning in our goodbye."
              </blockquote>
              <cite className="text-sm font-medium text-foreground">— Jennifer M., Dallas</cite>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-lg border border-border/50">
              <div className="flex gap-1 mb-4 text-primary">
                <span className="text-xl">★★★★★</span>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-semibold text-primary/90 italic mb-3 leading-tight">
                  "was a gift"
                </p>
              </div>
              <blockquote className="text-base text-[#324A5F]/90 mb-4 leading-relaxed">
                "Having Sacred Transitions as our death doula service was a gift. They helped us navigate conversations we never thought we could have and created space for healing in our family."
              </blockquote>
              <cite className="text-sm font-medium text-foreground">— Michael R., Austin</cite>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-lg border border-border/50">
              <div className="flex gap-1 mb-4 text-primary">
                <span className="text-xl">★★★★★</span>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-semibold text-primary/90 italic mb-3 leading-tight">
                  "honoring my father's dignity every step"
                </p>
              </div>
              <blockquote className="text-base text-[#324A5F]/90 mb-4 leading-relaxed">
                "Sacred Transitions' expertise and compassion made all the difference. They helped us prepare for the inevitable while honoring my father's dignity every step of the way."
              </blockquote>
              <cite className="text-sm font-medium text-foreground">— Lisa K., Houston</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Death Doula Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why a Death Doula?</h2>
            <p className="text-lg text-[#324A5F]/90 leading-relaxed">
              Death is a natural part of life, yet many of us feel unprepared when facing it. A death doula provides the
              support, education, and advocacy that medical professionals often cannot offer due to time constraints. I
              help bridge the gap between medical care and emotional support, ensuring that your values, wishes, and
              dignity are honored throughout the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg">
                <UserCircle className="h-6 w-6 text-primary flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">Personalized Support</h3>
                <p className="text-[#324A5F]/90 leading-relaxed">
                  Every person's journey is unique. I provide individualized care that honors your specific needs,
                  beliefs, and preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">Family Guidance</h3>
                <p className="text-[#324A5F]/90 leading-relaxed">
                  I help families navigate difficult conversations, make informed decisions, and support each other
                  through the process.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">Practical Planning</h3>
                <p className="text-[#324A5F]/90 leading-relaxed">
                  From advance directives to memorial planning, I help with the practical aspects that ensure your
                  wishes are carried out.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="h-6 w-6 text-primary flex-shrink-0" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">Emotional Comfort</h3>
                <p className="text-[#324A5F]/90 leading-relaxed">
                  I provide a compassionate presence during difficult times, offering comfort and understanding when you
                  need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Carry This Weight Together</h2>
          <p className="text-lg text-[#324A5F]/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your journey toward peace and clarity begins with a single, compassionate conversation. I offer a <strong className="text-foreground">free, confidential consultation</strong> to listen to your story and explore how I can support you.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <Link href="/book-consultation">Schedule Your Free Consultation</Link>
            </Button>
            <Link href="/book-consultation" className="text-sm text-[#324A5F]/80 hover:text-primary transition-colors underline underline-offset-4">
              Or simply send me a message →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
