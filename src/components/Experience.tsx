import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Développeur Full Stack',
      company: 'Delta-Plus-Médical',
      location: 'Tunis, Tunisie',
      period: 'Nov. 2023 - Présent',
      technologies: ['Symfony 6', 'PHP 8', 'Angular', 'TypeScript', 'API REST', 'Redis', 'RabbitMQ', 'OpenRouter IA'],
      description: [
        'Conception d\'une plateforme médicale à haute disponibilité',
        'Intégration et orchestration d\'APIs d\'intelligence artificielle via OpenRouter (multi-modèles NLP, génération de contenu)',
        'Développement de chatbots intelligents avec gestion de contexte',
        'Développement d\'APIs sécurisées pour la gestion de données médicales sensibles',
        'Migration vers une architecture moderne, scalable et optimisation des performances applicatives',
        'Tests & Qualité : PHPUnit, Jasmine, Karma, Postman | Performance : k6, JMeter, Lighthouse'
      ],
      color: 'blue',
      achievements: ['IA & Chatbots OpenRouter', 'Plateforme médicale critique', 'Architecture scalable']
    },
    {
      title: 'Développeur Full Stack',
      company: 'ENW-Consulting',
      location: 'Centre Urbain Nord, Tunisie',
      period: 'Oct. 2022 - Sept. 2023',
      technologies: ['Angular', 'Symfony', 'RabbitMQ', 'Redis'],
      description: [
        'Développement d\'une plateforme de voyage en temps réel',
        'Conception d\'un système de réservation global multi-zones',
        'Mise en place d\'un cache distribué avec Redis pour l\'optimisation des performances',
        'Intégration de RabbitMQ pour la gestion des files d\'attente et la fiabilité des transactions',
        'Déploiement et mise en production CI/CD',
        'Formation technique en Angular pour montée en compétences d\'équipe'
      ],
      color: 'teal',
      achievements: ['Système temps réel', 'Cache distribué Redis', 'CI/CD']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Agence Inspire',
      location: 'Manzah 6, Tunisie',
      period: 'Juil. 2021 - Oct. 2022',
      technologies: ['Angular', 'Symfony', 'Nuxt.js', 'Vue.js', 'Flouci', 'Stripe'],
      description: [
        'Solutions SaaS : Développement de rateacompany.com servant plus de 1000 utilisateurs actifs',
        'Expertise Multi-Stack : Conception d\'applications de streaming adaptatif',
        'Plateformes de trading temps réel avec flux de données en direct',
        'Management : Encadrement technique de 3 stagiaires'
      ],
      color: 'blue',
      achievements: ['SaaS 1000+ utilisateurs', 'Streaming adaptatif', 'Trading temps réel']
    }
  ];

  const distinctions = [
    {
      title: 'Compétition Mondiale de Design pour l\'Éducation du Futur',
      achievement: '2eme place mondiale',
      location: 'Beijing, Chine',
      date: '24-31 Décembre 2019',
      project: 'Projet beSafe : Application IoT connectant parents et enfants via montre intelligente'
    },
    {
      title: 'Compétition Nationale de Design',
      achievement: '1ere place nationale',
      location: 'Kairouan, Tunisie',
      date: '22-24 Novembre 2019',
      project: 'Innovation dans l\'écosystème éducatif tunisien'
    },
    {
      title: 'Tunisian American Enterprise Fund',
      achievement: '2eme place nationale',
      location: 'Kairouan, Tunisie',
      date: '14-15 Avril 2019',
      project: 'Programme d\'incubation Proxym IT - Innovations technologiques startup'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Mon Expérience
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 4 ans d'expertise en développement Full-Stack avec PHP Symfony et Angular,
              spécialisé dans les architectures modernes et les applications critiques.
            </p>
          </div>

          <div className="relative mb-20">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-8 md:ml-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-2 sm:mt-0">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="font-semibold text-gray-700">{exp.company}</h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1 sm:mt-0">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                exp.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                                'bg-teal-100 text-teal-800'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-700 text-sm">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                              exp.color === 'blue' ? 'bg-blue-500' : 'bg-teal-500'
                            }`}></div>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">
                            <TrendingUp size={12} className="mr-1" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <Award className="mr-3 text-yellow-600" size={32} />
                Distinctions & Recompenses
              </h3>
              <p className="text-gray-600">Reconnaissance internationale pour l'innovation technologique</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {distinctions.map((distinction, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold text-yellow-600 mb-2">{distinction.achievement}</div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">{distinction.title}</h4>
                    <div className="text-xs text-gray-500 mb-1">{distinction.location}</div>
                    <div className="text-xs text-gray-500">{distinction.date}</div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">{distinction.project}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
