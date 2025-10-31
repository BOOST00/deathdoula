import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">My Story & Philosophy</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Photo */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-8">
                <img
                  src="/professional-woman-death-doula-warm-smile.jpg"
                  alt="Sacred Transitions - Certified Death Doula Services"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                />
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">Sacred Transitions</p>
                  <p className="text-sm text-muted-foreground">Serving Dallas-Fort Worth & Beyond</p>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Journey to Sacred Transitions</h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sacred Transitions was born from a deeply personal experience. When our founder's grandmother was
                  dying, we witnessed firsthand how unprepared families can be for the practical and emotional challenges
                  that arise. Despite having excellent medical care, families often feel lost navigating the complex decisions,
                  difficult conversations, and overwhelming grief.
                </p>

                <p>
                  That experience opened our eyes to a profound gap in our healthcare system. While medical professionals
                  focus on treating illness and extending life, there's often little support for the human experience of
                  dying—the fears, hopes, relationships, and meaning-making that are so crucial during this time.
                </p>

                <p>
                  After spending fifteen years as a social worker specializing in family therapy, our founder felt called to
                  dedicate her career to filling this gap. She completed her certification through the International End of
                  Life Doula Association and has since supported dozens of individuals and families through their
                  end-of-life journeys.
                </p>

                <p>
                  What we've learned is that death, while inevitable, doesn't have to be traumatic or isolating. With
                  proper support, preparation, and compassionate guidance, it can be a time of profound connection,
                  healing, and even peace. Our role is to help families discover their own strength and wisdom during
                  this sacred transition.
                </p>

                <p>
                  We believe that everyone deserves to die with dignity, surrounded by love, and in alignment with their
                  values. Our approach is non-judgmental, culturally sensitive, and deeply respectful of each family's
                  unique beliefs and traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Philosophy of Care</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Compassionate Presence</h3>
                </div>
                <p className="text-muted-foreground">
                  I believe in the power of simply being present with families during their most vulnerable moments,
                  offering comfort without judgment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Family-Centered Care</h3>
                </div>
                <p className="text-muted-foreground">
                  Every family is unique. I work to understand your specific needs, values, and cultural background to
                  provide truly personalized support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Empowerment Through Education</h3>
                </div>
                <p className="text-muted-foreground">
                  Knowledge reduces fear. I help families understand their options and make informed decisions that
                  align with their values and wishes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Dignity & Respect</h3>
                </div>
                <p className="text-muted-foreground">
                  Every person deserves to live and die with dignity. I advocate for your wishes and help ensure they
                  are honored throughout the process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Credentials & Training</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Certified End-of-Life Doula (INELDA)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Licensed Clinical Social Worker (LCSW)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Certified Grief Counselor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced Directive Facilitator</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Education & Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Master of Social Work, UT Arlington</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">15+ years in family therapy and counseling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Specialized training in trauma-informed care</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Continuing education in palliative care principles</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">Professional Memberships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-muted-foreground">• International End of Life Doula Association (INELDA)</p>
              <p className="text-muted-foreground">• National Association of Social Workers (NASW)</p>
              <p className="text-muted-foreground">• Texas Society of Clinical Social Workers</p>
              <p className="text-muted-foreground">• Association for Death Education and Counseling</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
