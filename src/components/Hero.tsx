import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#apropos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center border-4 border-white/30">
            <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center">
         <img
              src="/images/terresRabie.png"
              alt="RT"
              className="w-full h-full object-cover rounded-full"
            />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Rabii Terres
        </h1>
        
        <p className="text-2xl md:text-3xl mb-6 text-blue-200 animate-fade-in-delay font-semibold">
          Développeur Full Stack 
        </p>
        
        <p className="text-lg mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in-delay-2 leading-relaxed">
          Développeur passionné par les technologies avec plus de 3 ans d'expérience. 
          Expert en React, Angular, Symfony et PHP, je transforme vos idées en solutions innovantes et performantes.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-2">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Mail size={18} className="mr-2" />
            <span className="text-sm">Rabii12terres@gmail.com</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Phone size={18} className="mr-2" />
            <span className="text-sm">+216 53 368 914</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin size={18} className="mr-2" />
            <span className="text-sm">Morneg, Tunis</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Globe size={18} className="mr-2" />
            <a 
              href="https://terresrabiiportfolio.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-300 transition-colors"
            >
              terresrabiiportfolio.netlify.app
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Me contacter
          </a>
          <a
            href="#projets"
            className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projets')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Voir mes projets
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/Rabii43" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com/in/terres-rabii" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:Rabii12terres@gmail.com"
            className="text-white hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;