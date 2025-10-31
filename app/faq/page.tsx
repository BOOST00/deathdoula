import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Common questions about death doula services and how I can support your family.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                What exactly do you do as a death doula?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                As a death doula, I provide non-medical support to individuals and families during the end-of-life
                journey. This includes helping with advance care planning, facilitating difficult conversations,
                providing emotional support, assisting with legacy projects, coordinating vigils, and offering guidance
                on practical matters. I work alongside medical professionals to ensure your emotional, spiritual, and
                practical needs are met while honoring your values and wishes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                Do you provide medical care?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                No, I do not provide medical care. I am not a nurse, doctor, or medical professional. My role is to
                complement medical care by focusing on the emotional, spiritual, and practical aspects of the
                end-of-life experience. I work closely with your medical team, including doctors, nurses, and hospice
                professionals, to ensure comprehensive support. If you have medical concerns, I will help you
                communicate with your healthcare providers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                When should I contact a death doula?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                There's no "wrong" time to reach out. Many people benefit from death doula support during advance
                planning, even when they're healthy. Others contact me after receiving a terminal diagnosis, when
                entering hospice care, or when facing imminent loss. The earlier we connect, the more time we have to
                plan and prepare, but I'm here to help regardless of where you are in the process. Even if death is
                imminent, there's still meaningful support I can provide.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                How do you work with hospice care?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                I work collaboratively with hospice teams and consider them valuable partners in providing comprehensive
                end-of-life care. While hospice focuses on medical comfort care and pain management, I focus on
                emotional support, family dynamics, legacy work, and spiritual needs. Many hospice teams welcome death
                doula involvement because we complement their services. I can help you navigate hospice enrollment,
                understand your options, and advocate for your needs within the hospice system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                What if my family has different religious or cultural beliefs?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                I deeply respect all religious, cultural, and spiritual traditions. My approach is non-denominational
                and culturally sensitive. I work to understand your specific beliefs, traditions, and practices, and I
                help ensure they are honored throughout the process. Whether you're Christian, Jewish, Muslim, Buddhist,
                Hindu, or hold other spiritual beliefs—or if you're not religious at all—I adapt my support to align
                with your values. I can also help connect you with appropriate religious or cultural leaders when
                desired.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                How much do your services cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                My services range from $150 per session for foundational planning to $300 per month for comprehensive
                support packages. Imminent care intensive support is $200 per day. I also offer additional services like
                virtual consultations, document preparation, and home visits. I understand that end-of-life expenses can
                be overwhelming, so I offer flexible payment plans and sliding scale fees for families with financial
                constraints. We can discuss payment options during your initial consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                Do you only work with people who are dying?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                Not at all! I work with anyone who wants to plan ahead for end-of-life, regardless of their current
                health status. Many of my clients are healthy individuals who want to create advance directives, discuss
                their wishes with family, or simply feel more prepared for the future. I also support family members who
                are caring for a dying loved one, helping them navigate their own emotions and needs during this
                difficult time. Planning ahead often brings peace of mind and strengthens family relationships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                What happens during our first meeting?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                Our first meeting is a free 30-minute consultation where we get to know each other and discuss your
                needs. I'll ask about your current situation, concerns, and goals. We'll talk about your values,
                beliefs, and any specific wishes you have. I'll explain how I can support you and answer any questions
                you have about death doula services. There's no pressure or commitment—this is simply an opportunity for
                us to see if we're a good fit to work together. The conversation is confidential and conducted with
                compassion and respect.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                Can you help with funeral or memorial planning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                Yes, I can help with memorial and celebration of life planning as part of my comprehensive support
                services. This includes discussing your wishes for services, helping you communicate these to family
                members, and assisting with planning meaningful tributes. However, I am not a funeral director and do
                not handle the business aspects of funeral arrangements. I can help you think through what kind of
                service would be meaningful to you and your family, and I can support the planning process emotionally
                and practically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                How do I know if death doula services are right for my family?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pb-6 leading-relaxed">
                Death doula services can benefit any family facing end-of-life issues, but they're especially helpful if
                you're feeling overwhelmed, uncertain about decisions, struggling with family communication, or simply
                want additional support beyond medical care. If you value having someone to guide you through the
                process, help with planning, or provide emotional support, death doula services might be right for you.
                The best way to know is to schedule a initial consultation where we can discuss your specific situation and
                needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every situation is unique, and I'm here to address your specific concerns. Let's talk about how I can
            support you and your family.
          </p>
          <Button size="lg" asChild className="text-lg px-8 py-3 ">
            <Link href="/book-consultation">Book a Session</Link>
          </Button>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Quick Contact Information</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Serving the Dallas-Fort Worth Area</p>
              <p>Virtual consultations available nationwide</p>
              <p>Response time: Within 24 hours</p>
              <p className="text-sm mt-4 text-muted-foreground/80">
                All consultations are confidential and conducted with compassion and respect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
