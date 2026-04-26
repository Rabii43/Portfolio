import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formations = [
    {
      degree: "Cycle d'Ingénierie Informatique",
      school: 'Iteam University',
      location: 'Tunis, Tunisie',
      period: 'Oct. 2021 - Présent',
      status: 'En cours',
      color: 'blue',
    },
    {
      degree: "Licence Appliquée en Technologie de l'Informatique (DSI)",
      school: 'Institut Supérieur des Études Technologiques du Kairouan',
      location: 'Kairouan, Tunisie',
      period: 'Oct. 2018 - Juil. 2021',
      status: 'Diplômé',
      color: 'teal',
    },
    {
      degree: 'Baccalauréat Informatique',
      school: 'Lycée Abou Elkacem Chebbi, Morneg',
      location: 'Morneg, Tunisie',
      period: 'Sept. 2014 - Juin 2018',
      status: 'Diplômé',
      color: 'green',
    },
  ];

  return (
    <section id="formation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Formation Académique
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un parcours académique solide en informatique, combinant théorie et pratique
              pour maîtriser les technologies modernes du développement web.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

              <div className="space-y-8">
                {formations.map((formation, index) => (
                  <div
                    key={index}
                    className={`relative flex gap-6 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-blue-200 items-center justify-center shadow-sm z-10">
                      <GraduationCap
                        size={28}
                        className={
                          formation.color === 'blue' ? 'text-blue-500' :
                          formation.color === 'teal' ? 'text-teal-500' : 'text-green-500'
                        }
                      />
                    </div>

                    <div className="flex-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-1">{formation.degree}</h3>
                          <h4 className="text-base font-semibold text-blue-600">{formation.school}</h4>
                        </div>
                        <span className={`mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                          formation.status === 'En cours'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {formation.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {formation.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {formation.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
