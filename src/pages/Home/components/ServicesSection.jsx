import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Brain, Files } from 'lucide-react';

export const ServicesSection = () => {
    const services = [
        {
            title: "Matching éthique Bellabès™",
            description: "Notre méthode exclusive BellaBès repose sur une prospection manuelle, ciblée et validée. Chaque contact est vérifié, engagé et conforme à une charte éthique stricte. Le tinder de la prospection.",
            icon: <Target className="w-12 h-12 text-[#DFA53B]" />,
            features: ["Résultats concrets", "Données exclusives", "Taux de transformation élevé"]
        },
        {
            title: "Coaching stratégique",
            description: "Nous accompagnons dirigeants et commerciaux avec une méthode unique basée sur le comportement, l'émotion et la stratégie.",
            icon: <Brain className="w-12 h-12 text-[#DFA53B]" />,
            features: ["Posture commerciale", "Scripts puissants. ", "Prise de rendez-vous à forte valeur."]
        },
        {
            title: "Supports testés & approuvés",
            description: "Accédez à nos fiches, scripts, matrices et trames utilisées dans nos propres campagnes. Tous nos supports sont testés, optimisés et prêts à l'emploi.",
            icon: <Files className="w-12 h-12 text-[#DFA53B]" />,
            features: ["Validés en situation réelle. ", "Adaptables à votre activité."]
        }
    ];

    return (
        <section className="bg-[#121212] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] mb-6 text-center">
                    Nos Services
                </h2>
                <p className="text-[#8C8C8C] text-lg text-center mb-12 max-w-2xl mx-auto">
                    Des solutions innovantes pour transformer vos connexions professionnelles
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="group bg-[#1E1E1E] p-6 sm:p-8 rounded-xl border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl"
                        >
                            <div className="mb-6">{service.icon}</div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] mb-4">
                                {service.title}
                            </h3>
                            <p className="text-[#8C8C8C] mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-[#8C8C8C] group-hover:text-[#DFA53B] transition-colors duration-300">
                                        <span className="mr-2">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            {/* En savoir plus link */}
                            <div className="mt-auto pt-4 border-t border-[#2A2A2A] group-hover:border-[#DFA53B] transition-colors duration-300">
                                <Link 
                                    to="/services" 
                                    className="inline-flex items-center text-[#DFA53B] hover:text-[#2E7BB5] transition-all duration-300 group/link"
                                >
                                    <span className="relative">
                                        En savoir plus
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2E7BB5] group-hover/link:w-full transition-all duration-300"></span>
                                    </span>
                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Button */}
                <div className="text-center">
                    <Link 
                        to="/services" 
                        className="inline-flex items-center gap-2 bg-[#1E5C8C] hover:bg-[#2E7BB5] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 group"
                    >
                        <span>Explorer tous nos services</span>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};