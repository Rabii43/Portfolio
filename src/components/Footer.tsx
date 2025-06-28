import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rabii Terres</h3>
            <p className="text-gray-300 mb-4">
              Développeur Full Stack  passionné par l'innovation technologique 
              et la création de solutions web performantes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Rabii43" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/terres-rabii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:Rabii12terres@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Compétences</h4>
            <ul className="space-y-2 text-gray-300">
              <li>React & Next.js</li>
              <li>Angular & TypeScript</li>
              <li>Vue.js & Nuxt.js</li>
              <li>Symfony & PHP</li>
              <li>Node.js & JavaScript</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Rabii12terres@gmail.com</p>
              <p>+216 53 368 914</p>
              <p>Morneg, Tunis, Tunisie</p>
              <a 
                href="https://terresrabiiportfolio.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                terresrabiiportfolio.netlify.app
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-gray-300">Créé avec</span>
              <Heart className="text-red-500 mx-2" size={16} />
              <span className="text-gray-300">par Rabii Terres</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Rabii Terres. Tous droits réservés.
            </p>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;