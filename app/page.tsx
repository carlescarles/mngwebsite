import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  MapPin,
  Bed,
  Bath,
  Square,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  TrendingUp,
  FileText,
  BarChart3,
  Heart,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Find Your Dream Property with M&G Real Estate
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Discover exceptional properties and expert guidance for all your real estate needs. Your trusted partner
              in finding the perfect home or investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base" asChild>
                <Link href="#properties">Browse Properties</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-muted relative">
                  <Image
                    src="/property-placeholder.jpg"
                    alt={`Property ${i}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold">AED 3,100,000</span>
                    <span className="text-sm text-muted-foreground">For Sale</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Modern Family Home</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Downtown District</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>4 Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>3 Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="h-4 w-4" />
                      <span>2,400 sqft</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden"
      >
        <div className="container mx-auto px-4">
          {/* Hero Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              Redefining Real Estate
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              We're not just another agency. We're your strategic partner in navigating Dubai's dynamic property market
              with innovation, integrity, and intelligence.
            </p>
          </div>

          {/* Bento Grid Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Data-Driven - Large Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Data-Driven Decisions</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every recommendation we make is backed by comprehensive market analytics, trend forecasting, and
                    real-time data. We transform complex market insights into clear, actionable strategies that give you
                    a competitive edge in Dubai's real estate landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Satisfaction - Tall Card */}
            <div className="lg:row-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Your Success, Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We measure our success by yours. From your first inquiry to long after closing, we're dedicated to
                  exceeding expectations at every touchpoint.
                </p>
                <div className="mt-auto pt-6 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground italic">
                    "Client satisfaction isn't just a goal—it's our foundation."
                  </p>
                </div>
              </div>
            </div>

            {/* Not Typical - Wide Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Breaking the Mold</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Forget pushy sales tactics and hidden agendas. We bring transparency, innovation, and a fresh
                    perspective to every transaction. Our approach combines cutting-edge technology with genuine human
                    connection to deliver an experience that's as exceptional as it is efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">Ready to experience real estate differently?</p>
            <Button size="lg" asChild>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Investment Consulting</h3>
                <p className="text-muted-foreground">
                  Strategic advice and market insights to maximize your real estate investment returns in Dubai
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secondary Market Sales</h3>
                <p className="text-muted-foreground">
                  Expert guidance for buying and selling ready properties in Dubai's dynamic secondary market
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Off Plan Purchase</h3>
                <p className="text-muted-foreground">
                  Access exclusive pre-construction opportunities with flexible payment plans and high ROI potential
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Image src="/logo-white.png" alt="M&G Real Estate" width={180} height={60} className="h-12 w-auto mb-4" />
              <p className="text-primary-foreground/80 max-w-md mb-6">
                Your trusted partner in real estate. We help you find the perfect property and provide expert guidance
                every step of the way.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/mng_realestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/mngrealestate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/80 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/mngrealestate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground/80 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="#properties" className="hover:text-primary-foreground transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-primary-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-primary-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>XL Damac Tower, 1908 Business Bay</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-primary-foreground transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:info@mngliving.com" className="hover:text-primary-foreground transition-colors">
                    info@mngliving.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} M&G Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
