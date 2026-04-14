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
              Développeur Full Stack Senior avec plus de 4 ans d'expérience dans la conception et le développement
              d'applications web et de solutions fintech. Expert Angular, spécialisé dans l'intégration d'APIs de
              paiement sécurisées (Stripe, PayPal, Flouci, Konnect) et les architectures microservices scalables.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Passionné par les technologies fintech et les systèmes de paiement, je possède une expertise
                approfondie dans la conception d'architectures robustes et sécurisées. Ma maîtrise d'Angular
                combinée à une forte connaissance des standards PCI-DSS et des protocoles de sécurité des
                transactions me permet de livrer des plateformes de paiement fiables à grande échelle.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Spécialisé en <strong>Angular</strong>, <strong>TypeScript</strong>, <strong>Symfony</strong>
                et <strong>APIs de paiement</strong>, je maîtrise les méthodologies agiles et possède une expérience
                confirmée dans l'encadrement d'équipes et la formation technique de développeurs.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">APIs paiement intégrées</div>
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
                  <h3 className="text-xl font-semibold text-gray-800">Expert Angular Senior</h3>
                </div>
                <p className="text-gray-600">
                  Maîtrise avancée d'Angular (v11 à v17) : composants standalone, signals,
                  NgRx, RxJS, lazy loading et optimisation des performances.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 p-3 rounded-lg mr-4">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">APIs de Paiement</h3>
                </div>
                <p className="text-gray-600">
                  Intégration complète : Stripe (webhooks, abonnements, 3D Secure), PayPal,
                  Flouci, Konnect et passerelles bancaires tunisiennes.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Leadership Technique</h3>
                </div>
                <p className="text-gray-600">
                  Expérience confirmée dans l'encadrement d'équipes, la formation technique
                  et le mentorat de développeurs juniors et mid-level.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-3 rounded-lg mr-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Distinctions</h3>
                </div>
                <p className="text-gray-600">
                  2ème place mondiale en Chine et 1ère place nationale pour l'innovation
                  dans l'éducation du futur.
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
