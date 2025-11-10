import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Brain, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        initial: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const serviceCards = [
        {
            title: "Matching éthique Bellabès™ 🌿✨",
            description: "Notre méthode exclusive BellaBès repose sur une prospection manuelle, ciblée et validée. Chaque contact est vérifié, engagé et conforme à une charte éthique stricte. Le tinder de la prospection",
            benefits: [
                "Résultats concrets",
                "Données exclusives",
                "Taux de transformation élevé"
            ],
            cta: "Trouve ta moitié",
            icon: Target,
            link: "/services/bellabes",
            image: "/src/assets/images/bellabes.png"
        },
        {
            title: "Coaching stratégique",
            description: "Nous accompagnons dirigeants et commerciaux avec une méthode unique basée sur le comportement, l'émotion et la stratégie.",
            benefits: [
                "Scripts puissants",
                "Posture commerciale",
                "Prise de rendez-vous à forte valeur"
            ],
            cta: "Refond tout ton système de pensée",
            icon: Brain,
            link: "/services/coaching",
            image: "/src/assets/images/coaching.png"
        },
        {
            title: "Supports testés & approuvés",
            description: "Accédez à nos fiches, scripts, matrices et trames utilisées dans nos propres campagnes. Tous nos supports sont testés, optimisés et prêts à l'emploi.",
            benefits: [
                "Validés en situation réelle",
                "Adaptables à votre activité"
            ],
            cta: "Envoyer tes scripts cauchemardesques",
            icon: FileText,
            link: "/services/support",
            image: "/src/assets/images/support.jpg"
        }
    ];

    return (
        <section className="relative min-h-screen bg-[#121212] px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 pt-24 sm:pt-32">
            {/* Background Gradients */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1.5 }}
                className="fixed top-[20%] right-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[#DFA53B] rounded-full filter blur-[100px]"
                style={{ zIndex: 0 }}
            />
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1.5 }}
                className="fixed bottom-[20%] left-[10%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-[#1E5C8C] rounded-full filter blur-[100px]"
                style={{ zIndex: 0 }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="text-center mb-16 sm:mb-24"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        NOS PRESTATIONS
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-[#8C8C8C] max-w-3xl mx-auto"
                    >
                        Découvrez l'expertise APLAB à travers trois offres complémentaires,
                        pensées pour booster vos résultats tout en respectant l'éthique commerciale.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
                >
                    {serviceCards.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-[#1E1E1E] rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500"
                        >
                            <div className="absolute -inset-1 bg-linear-to-r from-[#DFA53B] to-[#1E5C8C] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur" />

                            {/* Image Section */}
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-t from-[#1E1E1E] to-transparent z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                />
                                <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-[#DFA53B] z-20" />
                            </div>

                            <div className="relative p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-[#8C8C8C] mb-6">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {service.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center text-white">
                                            <span className="text-[#DFA53B] mr-2">✅</span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={service.link}
                                    className="inline-flex items-center gap-2 text-[#DFA53B] hover:text-[#1E5C8C] transition-colors duration-300"
                                >
                                    <span>👉 {service.cta}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

