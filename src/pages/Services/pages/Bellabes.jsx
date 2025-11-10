import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, FileSearch, Sparkles } from 'lucide-react';

export const Bellabes = () => {
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

    const steps = [
        {
            title: "ETAPE 1 : Sélection des professionnels",
            subtitle: "On ne prend pas tout le monde, et c'est tant mieux.",
            description: "Nous menons une veille active et humaine pour recenser les professionnels les plus fiables, les mieux notés, et surtout alignés avec notre charte Bellabès™ :",
            features: [
                "🤝 Éthique & transparence",
                "❤️ Respect & écoute",
                "✅ Preuves d'excellence réelle"
            ],
            note: "Un professionnel ne \"s'inscrit\" pas chez nous.\nIl est sélectionné.",
            cta: "Postule ici",
            icon: Users
        },
        {
            title: "ETAPE 2 : Exploration du projet particulier",
            subtitle: "Ici, pas de \"lead\".\nIci, on parle de projets de vie.",
            description: "Le particulier nous partage :",
            features: [
                "✦ Ses besoins",
                "✦ Ses contraintes",
                "✦ Ses envies",
                "✦ Ses valeurs"
            ],
            note: "On écoute. On comprend.\nOn structure son brief avec lui.\n\nOn ne collecte pas des coordonnées.\nOn accueille une intention",
            cta: "Raconte nous ton projet",
            icon: FileSearch
        },
        {
            title: "ETAPE 3 : Matching Bellabès™",
            subtitle: "C'est là que la magie opère ✨",
            description: "Nous analysons chaque projet en profondeur et trouvons la compatibilité la plus élevée possible.",
            features: [
                "👉 Pas de catalogue.",
                "👉 Pas de tirage au sort.",
                "👉 Pas de spam aux artisans."
            ],
            note: "98% de compatibilité intentionnelle\npuis mise en relation humaine, pas algorithmique froide.\n\nSwipe gauche, swipe droite ?\n\nIci, c'est mieux :\nMatch conscient. Rencontre choisie.",
            icon: Sparkles
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
            <div className="relative z-10 max-w-5xl mx-auto">
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
                        LE TINDER DU PROFESSIONNEL ET DU PARTICULIER
                    </motion.h1>
                    <motion.div 
                        variants={itemVariants}
                        className="space-y-4 text-lg sm:text-xl text-[#8C8C8C]"
                    >
                        <p>Ici, on ne collecte pas des leads</p>
                        <p className="text-[#DFA53B] font-medium">
                            Bellabès™ — c'est le son de la bonne connexion, pas du démarchage
                        </p>
                    </motion.div>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="space-y-16 sm:space-y-24"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative bg-[#1E1E1E] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500"
                        >
                            <div className="absolute -inset-1 bg-linear-to-r from-[#DFA53B] to-[#1E5C8C] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur" />
                            
                            <div className="relative">
                                <div className="flex items-start gap-6">
                                    <step.icon className="w-12 h-12 text-[#DFA53B] shrink-0 mt-1" />
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                            {step.title}
                                        </h2>
                                        <div className="text-xl text-[#DFA53B] font-medium mb-6 whitespace-pre-line">
                                            {step.subtitle}
                                        </div>
                                        <p className="text-[#8C8C8C] mb-6">
                                            {step.description}
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            {step.features.map((feature, idx) => (
                                                <li key={idx} className="text-white">
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-[#8C8C8C] whitespace-pre-line mb-6">
                                            {step.note}
                                        </div>
                                        {step.cta && (
                                            <button className="inline-flex items-center gap-2 text-[#DFA53B] hover:text-white transition-colors duration-300">
                                                <span>👉 {step.cta}</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

