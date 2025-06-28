import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Globe } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Rabii12terres@gmail.com',
      link: 'mailto:Rabii12terres@gmail.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+216 53 368 914',
      link: 'tel:+21653368914'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Morneg, Tunis',
      link: '#'
    },
    {
      icon: Globe,
      title: 'Portfolio',
      value: 'terresrabiiportfolio.netlify.app',
      link: 'https://terresrabiiportfolio.netlify.app'
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Rabii43', 
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/terres-rabii', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: MessageCircle, 
      href: '#', 
      label: 'WhatsApp',
      color: 'hover:bg-green-600'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Me Contacter
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prêt à collaborer sur votre prochain projet ? 
              N'hésitez pas à me contacter pour discuter de vos besoins !
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-1000 delay-200`}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Restons en contact</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.title === 'Portfolio' ? '_blank' : undefined}
                    rel={info.title === 'Portfolio' ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className="bg-blue-500 p-3 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl text-white mb-8">
                <h4 className="text-xl font-semibold mb-4">Disponibilité</h4>
                <p className="mb-4 text-blue-100">
                  Actuellement ouvert aux opportunités de collaboration et projets freelance.
                </p>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Temps de réponse :</strong> Généralement sous 24h<br/>
                    <strong>Disponibilité :</strong> Lun-Ven 9h-18h (GMT+1)
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Suivez-moi</h4>
                <p className="text-gray-600 mb-6">
                  Retrouvez mes derniers projets et contributions sur les réseaux sociaux.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-200 hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000 delay-400`}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>Envoyer le message</span>
                </button>
              </form>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note :</strong> Je réponds généralement dans les 24 heures. 
                  Pour les projets urgents, n'hésitez pas à m\'appeler directement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;