import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Church, Clock, Heart, Users, Mail, Phone, MapPin, Calendar } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          // REPLACE THIS URL WITH YOUR CHURCH IMAGE
          // Current placeholder: Beautiful church interior from Unsplash
          backgroundImage: `url('https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 via-sky-800/60 to-sky-900/70"></div>
        {/* Fallback gradient background in case image doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-300 via-sky-400 to-sky-300 -z-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Church className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Divine Trinity Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100">
            Welcome to our spiritual family in Wetzikon
          </p>
          <p className="text-lg mb-8 text-sky-50 max-w-2xl mx-auto">
            Join us in worship, fellowship, and service as we grow together in faith and love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
              Join Our Service
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black bg-white hover:bg-gray-100 hover:text-black">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Church</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Divine Trinity Church has been serving the Wetzikon community with love, faith, and dedication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 mx-auto text-red-500 mb-4" />
                <CardTitle>Love & Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We believe in showing God's love through our actions and service to others in our community.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-sky-400 mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our church family welcomes everyone with open arms, creating lasting bonds and friendships.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Church className="w-12 h-12 mx-auto text-green-500 mb-4" />
                <CardTitle>Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experience meaningful worship through music, prayer, and biblical teaching every Sunday.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Times</h2>
            <p className="text-xl text-gray-600">Join us for worship and fellowship</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-8 h-8 text-sky-500 mb-2" />
                <CardTitle>Sunday Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-sky-500 mb-2">11:30 AM - 1:00 PM</p>
                <CardDescription className="text-base">
                  Our main worship service featuring contemporary music, inspiring messages, and communion.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-8 h-8 text-sky-500 mb-2" />
                <CardTitle>Thursday Bible Study</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-sky-500 mb-2">5:00 PM - 6:00 PM</p>
                <CardDescription className="text-base">
                  Deep dive into God's word with interactive discussions and prayer time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you and answer any questions</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-sky-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">Guyer-Zeller-Strasse 2<br />Wetzikon, Switzerland</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-sky-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">divinetrinity.wetzikon@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-sky-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+41 78 335 66 81</p>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg mb-3">Find Us</h3>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.971740042698!2d8.791580411853788!3d47.314890607955874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479abbc9b7d8720d%3A0x9f268bd2b92339e9!2sGuyer-Zeller-Strasse%202%2C%208620%20Wetzikon!5e0!3m2!1sde!2sch!4v1749722315115!5m2!1sde!2sch" 
                    width="100%" 
                    height="300" 
                    style={{border: 0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>
              
              <Card className="bg-sky-50 border-sky-200">
                <CardHeader>
                  <CardTitle className="text-sky-700">Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sky-600">
                    We welcome visitors and new members! Come as you are and experience the warmth of our community.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Church className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-2xl font-bold mb-2">Divine Trinity Church</h3>
          <p className="text-gray-300 mb-4">Wetzikon, Switzerland</p>
          <p className="text-gray-400 text-sm">
            © 2025 Divine Trinity Church. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}