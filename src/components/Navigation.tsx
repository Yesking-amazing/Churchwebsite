"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Church, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Church className="w-8 h-8 text-sky-500" />
            <span className="text-xl font-bold text-gray-800">Divine Trinity</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('vision')}
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-sky-400 hover:bg-sky-500"
            >
              Visit Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-600 hover:text-sky-500 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className="text-left text-gray-600 hover:text-sky-500 transition-colors"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 hover:text-sky-500 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-600 hover:text-sky-500 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-600 hover:text-sky-500 transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-sky-400 hover:bg-sky-500 w-fit"
              >
                Visit Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}