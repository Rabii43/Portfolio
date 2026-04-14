import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Award, Users, Rocket } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Développeur Full-Stack Senior avec plus de 4 ans d'expertise dans la conception et le développement
              d'applications web critiques. Expert PHP Symfony et Angular, spécialisé dans les architectures modernes
              et les passerelles de paiement sécurisées.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Passionné par l'innovation technique, j'accompagne les entreprises dans la création de solutions
                web hautement scalables et sécurisées. Mon expertise sur des projets à forte criticité me permet de
                garantir des performances optimales et une intégrité totale des données sensibles.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Spécialisé en <strong>PHP Symfony</strong>, <strong>Angular</strong> et <strong>TypeScript</strong>,
                je maîtrise les méthodologies agiles, les arquitectures distribuées et dispose d'une expertise
                confirmée dans la migration d'applications monolithiques vers des solutions modernes.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                  <div className="text-sm text-gray-600">Années d'expertise</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Projets livrés</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Passerelles paiement</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  Angular
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Stripe API
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  PayPal SDK
                </span>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  Flouci
                </span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                  Konnect
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Vue.js
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Symfony
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  PHP
                </span>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 p-3 rounded-lg mr-4">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Expert PHP Symfony & Angular</h3>
                </div>
                <p className="text-gray-600">
                  Expertise approfondie en développement backend avec Symfony 6 et PHP 8,
                  combinée à une maîtrise avancée d'Angular (composants standalone, signals, RxJS).
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-3 rounded-lg mr-4">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Passerelles de Paiement</h3>
                </div>
                <p className="text-gray-600">
                  Intégration de solutions de paiement sécurisées : Stripe (3D Secure, webhooks, abonnements),
                  PayPal, Flouci et Konnect pour le marché tunisien.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Architecture Moderne</h3>
                </div>
                <p className="text-gray-600">
                  Conception d'architectures scalables : migration monolithique vers microservices,
                  cache distribué (Redis), message queue (RabbitMQ) et CI/CD.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-3 rounded-lg mr-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Distinctions Internationales</h3>
                </div>
                <p className="text-gray-600">
                  2ème place mondiale à la Compétition Mondiale de Design pour l'Éducation du Futur
                  à Beijing, Chine (2019).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
