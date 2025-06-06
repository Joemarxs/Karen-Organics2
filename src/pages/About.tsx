import React from 'react';
import { Leaf, Heart, Users } from 'lucide-react';
export function About() {
  return <div className="bg-cream-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
            Our Story
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <p className="text-brown-700 text-lg mb-6">
              Founded in 2010, Karen Natural Organics began with a simple
              mission: to provide families with the healthiest, most ethically
              raised chicken products possible. Our journey started with just a
              few dozen chickens and a commitment to organic farming practices.
            </p>
            <p className="text-brown-700 text-lg">
              Today, we've grown into a thriving family farm that serves
              thousands of customers across the region, while maintaining our
              dedication to sustainable and humane farming practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Leaf size={40} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Sustainable Practices
              </h3>
              <p className="text-brown-600">
                We use solar power and implement water conservation methods
                throughout our farm.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Heart size={40} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Animal Welfare
              </h3>
              <p className="text-brown-600">
                Our chickens roam freely on organic pastures with plenty of
                space and natural light.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <Users size={40} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Community Focus
              </h3>
              <p className="text-brown-600">
                We work closely with local families and businesses to strengthen
                our community.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3" alt="Our farm at sunrise" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Our Commitment
              </h2>
              <p className="text-brown-700 mb-4">
                At Karen Natural Organics, we believe that healthy food comes
                from healthy animals raised in a healthy environment. That's why
                we:
              </p>
              <ul className="list-disc list-inside text-brown-700 space-y-2">
                <li>Use only organic, non-GMO feed</li>
                <li>Maintain strict quality control standards</li>
                <li>Practice sustainable farming methods</li>
                <li>Support local communities</li>
                <li>Ensure humane treatment of all animals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
}