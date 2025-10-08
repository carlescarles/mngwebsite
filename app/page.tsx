import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  MapPin,
  Bed,
  Bath,
  Square,
  Mail,
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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-black.svg"
              alt="M&G Real Estate"
              width={180}
              height={60}
              className="h-12 w-auto dark:hidden"
              priority
            />
            <Image
              src="/logo-white.png"
              alt="M&G Real Estate"
              width={180}
              height={60}
              className="h-12 w-auto hidden dark:block"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#properties" className="text-sm font-medium hover:text-primary transition-colors">
              Properties
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link
              href="https://wa.me/+971525069115?text=Hello%21%20I%20am%20interested%20in%20your%20Real%20Estate%20services%20in%20Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

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
              <Button size="lg" className="text-base">
                Browse Properties
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
                <Link
                  href="https://wa.me/+971525069115?text=Hello%21%20I%20am%20interested%20in%20your%20Real%20Estate%20services%20in%20Dubai"
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
                    src={`/modern-luxury-home-exterior-.jpg?height=400&width=600&query=modern luxury home exterior ${i}`}
                    alt={`Property ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold">$850,000</span>
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
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose M&G Real Estate</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're redefining real estate with a modern, client-focused approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Company</h3>
                <p className="text-muted-foreground">
                  We leverage market analytics and insights to help you make informed decisions backed by real data
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Your Satisfaction First</h3>
                <p className="text-muted-foreground">
                  Your goals are our priority. We're committed to delivering exceptional service and results that exceed
                  expectations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Not Your Typical Real Estate</h3>
                <p className="text-muted-foreground">
                  We break the mold with innovative solutions, transparent processes, and a fresh perspective on
                  property services
                </p>
              </CardContent>
            </Card>
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
                  href="https://wa.me/+971525069115?text=Hello%21%20I%20am%20interested%20in%20your%20Real%20Estate%20services%20in%20Dubai"
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
                  <Link href="#contact" className="hover:text-primary-foreground transition-colors">
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
