import React from 'react';
import { MapPin, Phone, Calendar } from 'lucide-react';
export function VisitSection() {
  return <section id="visit" className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-4">
          Visit Our Farm
        </h2>
        <p className="text-lg text-brown-700 text-center max-w-2xl mx-auto mb-12">
          Experience firsthand how we raise our chickens and produce the finest
          organic eggs and meat. We welcome visitors for tours and farm-direct
          purchases.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Farm Hours & Information
            </h3>
            <div className="flex items-start mb-4">
              <Calendar size={24} className="text-green-700 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-brown-800">Open for Visits</h4>
                <p className="text-brown-600">
                  Friday - Sunday: 9:00 AM - 4:00 PM
                </p>
                <p className="text-brown-600">
                  Farm Store Open Daily: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <MapPin size={24} className="text-green-700 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-brown-800">Location</h4>
                <p className="text-brown-600">123 Countryside Road</p>
                <p className="text-brown-600">Farmington, CA 95230</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone size={24} className="text-green-700 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-brown-800">Contact</h4>
                <p className="text-brown-600">(555) 123-4567</p>
                <p className="text-brown-600">info@karennaturalorganics.com</p>
              </div>
            </div>
            <div className="mt-6">
              <a href="#" className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition inline-block text-lg font-medium">
                Schedule a Tour
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" alt="Karen Natural Organics farm with chickens roaming freely" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>;
}