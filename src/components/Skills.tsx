import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'Next.js', level: 90, color: 'bg-gray-800' },
    { name: 'Angular', level: 95, color: 'bg-red-500' },
    { name: 'TypeScript', level: 92, color: 'bg-blue-600' },
    { name: 'Vue.js', level: 88, color: 'bg-green-500' },
    { name: 'Nuxt.js', level: 85, color: 'bg-green-600' },
    { name: 'Node.js', level: 88, color: 'bg-green-700' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'Symfony', level: 92, color: 'bg-black' },
    { name: 'PHP', level: 90, color: 'bg-purple-600' },
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
    { name: 'SCSS', level: 88, color: 'bg-pink-500' },
  ];

  const tools = [
    'Git & GitHub', 'Docker', 'CI/CD', 'Linux', 'WordPress', 'Drupal', 'Bootstrap',
    'Vuetify', 'RabbitMQ', 'Redis', 'jQuery', 'Ajax', 'Twig',
    'MySQL/PostgreSQL', 'Sass/SCSS', 'WooCommerce', 'API REST'
  ];

  const languages = [
    { name: 'Arabe', level: 'Langue maternelle', flag: '🇹🇳' },
    { name: 'Français', level: 'Courant (C1)', flag: '🇫🇷' },
    { name: 'Anglais', level: 'Intermédiaire (B2)', flag: '🇺🇸' },
  ];

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Mes Compétences
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un ensemble de technologies et d'outils maîtrisés pour créer 
              des solutions complètes et performantes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Technologies Principales</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Outils & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className={`bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center text-sm ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gray-700 font-medium">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Langues</h4>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={lang.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{lang.flag}</span>
                        <span className="font-medium text-gray-800">{lang.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white">
                <h4 className="text-xl font-semibold mb-4">Qualités Professionnelles</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Travail en équipe
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Résistance au stress
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Organisation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Capacité d'adaptation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Autonomie
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;