"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Church, Clock, Heart, Users, Mail, Phone, MapPin, Calendar, Target, BookOpen, Cross, X } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import Navigation from "@/components/Navigation"

export default function Home() {
  const [showImpressum, setShowImpressum] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      >
        {/* Modern gradient background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600"></div>
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Soft light effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"></div>
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
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black bg-white hover:bg-gray-100 hover:text-black"
              onClick={() => scrollToSection('vision')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section id="vision" className="py-20 px-4 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Target className="w-16 h-16 mx-auto text-sky-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">OUR VISION AND MISSION</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-12">
            {/* Vision Statement */}
            <Card className="bg-white/80 backdrop-blur-sm border-sky-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Cross className="w-12 h-12 text-sky-600" />
                </div>
                <CardTitle className="text-2xl text-sky-700 mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 text-center font-medium leading-relaxed">
                  Living the gospel of our Lord Jesus Christ. Caring for those in Need.
                </p>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <Card className="bg-white/80 backdrop-blur-sm border-sky-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-sky-600" />
                </div>
                <CardTitle className="text-2xl text-sky-700 mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-500">
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    <strong className="text-sky-700">Romans 5:17</strong> highlights that those who receive the abundance of God&apos;s grace and the gift of righteousness through Jesus Christ will reign in life. This means that through faith in Jesus, believers are reconciled to God, freed from the dominion of sin and death.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    So our mission is to emphasize the contrast between the consequences of Adam&apos;s sin and the benefits of the sacrifice of Christ, which is grace and righteousness, freely given by God, to overcome the effects of sin and death. And to reign in life which is victory over sin, death, and the power of the enemy, enjoying the blessings and the benefits of the Kingdom of God.
                  </p>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed font-medium text-center">
                  This is the foundation of our mission and we will let all men in our sphere of contact to know about this gift that Christ has given to us freely.
                </p>
              </CardContent>
            </Card>

            {/* Beliefs and Values */}
            <Card className="bg-white/80 backdrop-blur-sm border-sky-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-sky-600" />
                </div>
                <CardTitle className="text-2xl text-sky-700 mb-4">Our Beliefs and Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our ministry through the help of the Holy Spirit, aims to help mankind to receive the call to sonship according to <strong className="text-sky-700">Galatians 4:5</strong>, that emphasizes Christ&apos;s incarnation and subsequent sacrifice which is of the purpose of freeing believers from the bondage of the law and enabling them to become God&apos;s children through adoption. Highlighting our new relationship with God through Jesus Christ.
                  </p>
                  
                  <p className="text-base text-gray-700 leading-relaxed">
                    Understanding God&apos;s love for you alone and not understanding your Identity in Christ is Not enough to live a fulfilled life as a Child of God. <strong className="text-sky-700">Ephesians 1:18</strong> makes us to understand who we are in Christ.
                  </p>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      <strong className="text-yellow-700">Ephesians 1:19</strong> emphasizes the immense and immeasurable power of God that is available to believers. And it Highlights that this power is not just a general Concept, but God has put his power in you and unless you understand his authority it will not flow.
                    </p>
                    
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Like Jesus Christ in <strong className="text-yellow-700">Mark 11:12-13</strong> cursed the fig tree and it died, the next day Peter called his attention to it that the tree had already died and it died from the roots. That&apos;s the kind of authority we have as children of God. That&apos;s what happens to us regarding healing or any other need that we have. The moment we believe and speak forth, it&apos;s already done, even if sometimes it has not manifested physically.
                    </p>
                    
                    <p className="text-base text-gray-700 leading-relaxed">
                      When asking for healing or any other need we talk to it directly. It&apos;s God&apos;s power but he gave us his authority and power. We have to allow God flow through us as his vessel <strong className="text-yellow-700">Ephesians 3:20</strong>. He can not do anything without you. So take your authority in Christ and speak to the problem. Many of us say nice things in prayers but we don&apos;t address the situation directly.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      In <strong className="text-green-700">Acts 3:6</strong> Peter did not say, oh God we have to heal this person. He took his authority and spoke to the problem. He said such as I have I give unto you. The power came from God but Peter gave the command. He believed the power God has given him and he spoke. So release Gods power through his word. The word has to be directed to the problem and not God.
                    </p>
                    
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                      In our spirit is the resurrection power of our Lord Jesus Christ.
                    </p>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-lg font-semibold text-sky-700 italic">
                      Pastor Enifome
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  We believe in showing God&apos;s love through our actions and service to others in our community.
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
                  Deep dive into God&apos;s word with interactive discussions and prayer time.
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
            <p className="text-xl text-gray-600">We&apos;d love to hear from you and answer any questions</p>
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

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Impressum</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowImpressum(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Legal Information</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    According to European legal requirements, the following information is provided:
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-800">Contact Information</h4>
                  <div className="space-y-2">
                    <p><strong>Name:</strong> Craig Hügli</p>
                    <p><strong>Street:</strong> Zürcherstrasse 115</p>
                    <p><strong>City:</strong> Wetzikon</p>
                    <p><strong>Email:</strong> craighüglie@gmail.com</p>
                  </div>
                </div>
                
                <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-500">
                  <h4 className="font-semibold mb-3 text-sky-800">Church Information</h4>
                  <div className="space-y-2 text-sky-700">
                    <p><strong>Organization:</strong> Divine Trinity Church</p>
                    <p><strong>Location:</strong> Wetzikon, Switzerland</p>
                    <p><strong>Church Email:</strong> divinetrinity.wetzikon@gmail.com</p>
                    <p><strong>Phone:</strong> +41 78 335 66 81</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  <h4 className="font-semibold mb-2 text-gray-800">Disclaimer</h4>
                  <p>
                    The content of this website has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general law. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Church className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h3 className="text-2xl font-bold mb-2">Divine Trinity Church</h3>
          <p className="text-gray-300 mb-4">Wetzikon, Switzerland</p>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowImpressum(true)}
              className="text-gray-400 hover:text-white text-sm underline"
            >
              Impressum
            </Button>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Divine Trinity Church. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}