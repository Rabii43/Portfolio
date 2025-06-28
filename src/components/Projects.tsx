import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Users, TrendingUp, Zap } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = [
    {
      title: 'Plateforme Médicale Delta-Plus',
      description: 'Architecture plateforme médicale critique avec front-end React et back-end Symfony. Migration technique vers stack moderne avec amélioration des performances système.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Symfony 6', 'PHP 8'],
      achievements: ['Migration stack moderne', 'Système médical critique'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Plateforme de Réservation Internationale',
      description: 'Système de réservation globale avec traitement temps réel, cache distribué Redis et messagerie RabbitMQ. Performance optimisée de 75% avec architecture haute disponibilité.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular 16', 'Symfony 6', 'RabbitMQ', 'Redis'],
      achievements: ['75% amélioration performance', 'Système temps réel global'],
      github: '#',
      live: '#',
      featured: true
    }
  ];

  const projects = [
    {
      title: 'Rate a Company',
      description: 'SaaS évaluation entreprises avec système de notation avancé, services TypeScript modulaires et APIs REST sécurisées.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular 11', 'Symfony', 'TypeScript'],
      users: '1000+ utilisateurs actifs',
      github: '#',
      live: '#'
    },
    {
      title: 'SuperStream Media',
      description: 'Application de streaming vidéo avec lecture adaptative, interface responsive CSS Grid/Flexbox et gestion de contenu dynamique CMS.',
      image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Nuxt.js', 'Drupal', 'CSS Grid'],
      users: 'Streaming adaptatif',
      github: '#',
      live: '#'
    },
    {
      title: 'Fibourse Trading',
      description: 'Plateforme de trading financier temps réel avec graphiques interactifs, API REST haute fréquence et interface utilisateur réactive.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Symfony', 'WebSocket'],
      users: 'Trading temps réel',
      github: '#',
      live: '#'
    },
    {
      title: 'RoomBooking Pro',
      description: 'Système de réservation multi-établissements avec calendrier temps réel, notifications automatiques et architecture microservices.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Symfony', 'Microservices'],
      users: 'Multi-établissements',
      github: '#',
      live: '#'
    },
    {
      title: 'Chorbane E-Commerce',
      description: 'Boutique en ligne complète avec système de paiement intégré, gestion d\'inventaire automatisée et optimisation SEO.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['WordPress', 'WooCommerce', 'JavaScript'],
      users: 'E-commerce complet',
      github: '#',
      live: '#'
    },
    {
      title: 'Inspire Quiz Engine',
      description: 'Moteur de quiz gamifié avec scoring en temps réel, analytics avancées et interface administrative complète.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Twig', 'Ajax', 'jQuery', 'Symfony'],
      users: 'Quiz gamifié',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Mes Projets
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une sélection de projets qui démontrent mon expertise technique 
              et ma capacité à livrer des solutions innovantes et performantes.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <Zap className="mr-3 text-yellow-500" size={28} />
              Projets Phares
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github className="text-white" size={20} />
                        </a>
                        <a
                          href={project.live}
                          className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="text-white" size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">
                          <TrendingUp size={12} className="mr-1" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <Users className="mr-3 text-blue-500" size={28} />
              Autres Projets Remarquables
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                      <div className="flex space-x-2">
                        <a href={project.github} className="text-gray-500 hover:text-gray-700 transition-colors">
                          <Github size={16} />
                        </a>
                        <a href={project.live} className="text-gray-500 hover:text-gray-700 transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-xs text-blue-600 font-medium">
                      <Users size={12} className="mr-1" />
                      {project.users}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Stats */}
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Statistiques des Projets</h3>
              <p className="text-blue-100">Résultats mesurables et impact concret</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm text-blue-100">Projets Réalisés</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-sm text-blue-100">Utilisateurs Actifs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">75%</div>
                <div className="text-sm text-blue-100">Amélioration Performance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-blue-100">Respect Deadlines</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;