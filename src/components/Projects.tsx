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
      title: 'Plateforme Medicale Delta-Plus',
      description: 'Plateforme médicale critique avec Angular 17 (standalone components, signals) et Symfony. Intégration Konnect et Stripe pour facturation médicale sécurisée conforme PCI-DSS.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular 17', 'TypeScript', 'Symfony 6', 'Konnect', 'Stripe', 'PCI-DSS'],
      achievements: ['Migration Angular 17', 'Paiement médical sécurisé', 'PCI-DSS compliant'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Plateforme de Reservation Internationale',
      description: 'Système de réservation globale Angular 16 avec paiements Stripe et PayPal multi-devises, cache Redis distribué, messagerie RabbitMQ. Performance optimisée de 75%.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular 16', 'Stripe', 'PayPal', 'Symfony 6', 'RabbitMQ', 'Redis'],
      achievements: ['75% amelioration performance', 'Paiements multi-devises', 'Temps reel global'],
      github: '#',
      live: '#',
      featured: true
    }
  ];

  const projects = [
    {
      title: 'Rate a Company',
      description: 'SaaS évaluation entreprises Angular 11 avec système de notation avancé, services TypeScript modulaires et APIs REST sécurisées.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular 11', 'Symfony', 'TypeScript'],
      users: '1000+ utilisateurs actifs',
      github: '#',
      live: '#'
    },
    {
      title: 'Chorbane E-Commerce',
      description: 'Boutique en ligne complète avec intégration Flouci (paiement tunisien), gestion inventaire automatisée et optimisation SEO.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['WordPress', 'WooCommerce', 'Flouci', 'JavaScript'],
      users: 'Paiement Flouci integre',
      github: '#',
      live: '#'
    },
    {
      title: 'Fibourse Trading',
      description: 'Plateforme de trading financier temps réel avec graphiques interactifs, API REST haute fréquence et paiements sécurisés.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Symfony', 'WebSocket', 'Stripe'],
      users: 'Trading temps reel',
      github: '#',
      live: '#'
    },
    {
      title: 'RoomBooking Pro',
      description: 'Système de réservation multi-établissements avec calendrier temps réel, notifications automatiques et facturation Konnect en ligne.',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Symfony', 'Konnect', 'Microservices'],
      users: 'Multi-etablissements',
      github: '#',
      live: '#'
    },
    {
      title: 'SuperStream Media',
      description: 'Application de streaming vidéo avec lecture adaptative, abonnements Stripe récurrents et interface responsive CSS Grid.',
      image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Nuxt.js', 'Drupal', 'Stripe', 'CSS Grid'],
      users: 'Abonnements Stripe',
      github: '#',
      live: '#'
    },
    {
      title: 'Inspire Quiz Engine',
      description: 'Moteur de quiz gamifié avec scoring temps réel, paiements premium Flouci/PayPal et interface administrative complète.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Twig', 'Ajax', 'jQuery', 'Symfony', 'Flouci'],
      users: 'Paiements premium',
      github: '#',
      live: '#'
    },
    {
      title: 'e-shkoon - Digitalisation Tunisienne',
      description: 'Entreprise 100% tunisienne favorisant la digitalisation des marques tunisiennes à moindre coût. Plateforme e-commerce développée avec Node.js/Express backend, Angular frontend, intégrant Flouci pour paiements tunisiens. Assistance 24h/24, livraison à domicile, produits de qualité et prix imbattables.',
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Node.js', 'Express.js', 'Angular', 'Flouci', 'E-commerce', 'MongoDB'],
      users: 'Entreprise en croissance',
      github: '#',
      live: 'https://e-shkoon.com/'
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
              Projets Full-Stack démontrant mon expertise en PHP Symfony, Angular et architectures
              modernes, incluant solutions fintech, e-commerce et digitalisation d'entreprises.
            </p>
          </div>

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

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Statistiques des Projets</h3>
              <p className="text-blue-100">Resultats mesurables et impact concret</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm text-blue-100">Projets Realises</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-sm text-blue-100">Passerelles Paiement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">75%</div>
                <div className="text-sm text-blue-100">Amelioration Performance</div>
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
