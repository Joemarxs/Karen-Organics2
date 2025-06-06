import React from 'react';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return <section className="w-full bg-[url('https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
      <div className="w-full h-full bg-black bg-opacity-40 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-xl bg-white bg-opacity-90 p-8 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Farm Fresh, Naturally Raised
            </h2>
            <p className="text-lg md:text-xl text-brown-700 mb-8">
              Experience the difference of truly organic, pasture-raised chicken
              and eggs from our family farm to your table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition flex items-center justify-center gap-2 text-lg font-medium">
                Our Products
                <ArrowRight size={20} />
              </a>
              <a href="#visit" className="border-2 border-brown-700 text-brown-700 px-6 py-3 rounded-md hover:bg-brown-50 transition flex items-center justify-center gap-2 text-lg font-medium">
                Visit the Farm
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}