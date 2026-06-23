import React, { useState } from 'react';
import { Menu, X, ChevronRight, Zap, ShoppingCart, BookOpen } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dipankar Sen
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-slate-900 hover:text-blue-700 font-medium">Home</a>
            <a href="#products" className="text-slate-900 hover:text-blue-700 font-medium">Products</a>
            <a href="#about" className="text-slate-900 hover:text-blue-700 font-medium">About</a>
            <a href="https://calendly.com/senmohasay/30min" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800">
              Book Call
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-3">
            <a href="#home" className="block text-slate-900 font-medium py-2">Home</a>
            <a href="#products" className="block text-slate-900 font-medium py-2">Products</a>
            <a href="#about" className="block text-slate-900 font-medium py-2">About</a>
            <a href="https://calendly.com/senmohasay/30min" target="_blank" rel="noopener noreferrer" className="w-full block bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-center">Book Call</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 px-4 py-2 rounded-full mb-6">
          <Zap size={16} className="text-yellow-400" />
          <span className="text-sm font-medium">🤖 Oracle GenAI Professional + 26 Years HR Expert</span>
        </div>
        
        <h1 className="text-6xl sm:text-7xl font-bold leading-tight mb-6">
          AI-Powered HR
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Transformation
          </span>
        </h1>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          26+ years guiding global enterprises through HR transformations. 
          Now powered by Generative AI to deliver 50% faster implementations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition inline-flex items-center justify-center gap-2">
            Explore Digital Products <ChevronRight size={20} />
          </a>
          <a href="https://calendly.com/senmohasay/30min" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-950 transition">
            Book a Call
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-blue-800/50 mt-12">
          <div>
            <div className="text-4xl font-bold text-blue-300">26+</div>
            <p className="text-sm text-blue-300/70">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-300">₹5M+</div>
            <p className="text-sm text-blue-300/70">Programs Led</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-300">2025</div>
            <p className="text-sm text-blue-300/70">GenAI Certified</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-black/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Digital Products</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-blue-500/50 p-8 rounded-xl hover:border-purple-500/50 transition">
              <ShoppingCart className="text-blue-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">6 Ready-to-Use Products</h3>
              <p className="text-blue-100 mb-6">
                AI Prompts, Testing Guides, Dashboards, Checklists & more. Total value: ₹4,594
              </p>
              <p className="text-3xl font-bold text-blue-300">₹2,999</p>
              <p className="text-sm text-blue-300/70 mb-6">All 6 products bundle (Save ₹1,595)</p>
              <a href="https://dipankarsen.com/products" className="block bg-blue-700 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-800 transition">
                View All Products
              </a>
            </div>

            <div className="bg-white/10 border border-blue-500/50 p-8 rounded-xl hover:border-purple-500/50 transition">
              <BookOpen className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Online Courses</h3>
              <p className="text-blue-100 mb-6">
                Video courses on GenAI, SAP SF, Workday & more. Learn at your own pace.
              </p>
              <p className="text-3xl font-bold text-purple-300">₹2,999-3,999</p>
              <p className="text-sm text-blue-300/70 mb-6">Per course on Udemy</p>
              <a href="https://udemy.com/user/dipankar-sen-24/" target="_blank" rel="noopener noreferrer" className="block bg-purple-700 text-white py-3 rounded-lg font-semibold text-center hover:bg-purple-800 transition">
                View Courses on Udemy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your HR?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Get a free consultation to discuss your AI + HR strategy
        </p>
        <a href="https://calendly.com/senmohasay/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
          📅 Schedule Free Call
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-blue-800/50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-blue-400">Dipankar Sen</h3>
              <p className="text-sm text-slate-400">GenAI + HR Transformation Expert</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://linkedin.com/in/dipankar-sen-017aa924" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="https://udemy.com/user/dipankar-sen-24/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Udemy</a></li>
                <li><a href="mailto:senmohasay@gmail.com" className="hover:text-white transition">Email</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://calendly.com/senmohasay/30min" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Book Call</a></li>
                <li><a href="#products" className="hover:text-white transition">Products</a></li>
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-sm text-slate-400 text-center">
            <p>&copy; 2025 Dipankar Sen. All rights reserved. | Made with ❤️ for HR Leaders</p>
          </div>
        </div>
      </footer>
    </div>
  );
}