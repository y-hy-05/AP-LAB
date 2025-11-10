import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Coaching = () => {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Text Content - Left Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className="space-y-8"
                    >
                        <motion.h1 
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Révélez Votre Potentiel avec AP LAB
                        </motion.h1>
                        
                        <motion.div 
                            variants={itemVariants}
                            className="prose prose-lg prose-invert"
                        >
                            <p className="text-[#8C8C8C] text-lg leading-relaxed">
                                Chez AP LAB, nous ne coachons pas… Nous révélons. Nous ré-alignons. Nous transformons. 
                                Notre approche repose sur une conviction forte : l'humain est un système émotionnel 
                                avant d'être un système logique.
                            </p>
                            <p className="text-[#8C8C8C] text-lg leading-relaxed mt-4">
                                À Sully, notre méthode exclusive accompagne ceux qui souhaitent devenir la version 
                                la plus claire de eux-mêmes. Nous croyons fervemment que chaque individu est unique, 
                                c'est pourquoi nous offrons un coaching personnalisé et sur mesure.
                            </p>
                            <p className="text-[#8C8C8C] text-lg leading-relaxed mt-4">
                                Chaque parcours est conçu pour s'adapter à vos besoins spécifiques, pour vous aider 
                                à surmonter les obstacles et à atteindre vos objectifs. Ensemble, nous explorerons 
                                vos motivations, vos forces et vos aspirations afin de vous propulser vers une 
                                transformation significative.
                            </p>
                        </motion.div>

                        <motion.button
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 text-[#DFA53B] hover:text-white transition-colors duration-300 text-lg mt-6"
                        >
                            <span>🧬 Réserve ton coaching</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>

                    {/* Image - Right Side */}
                    <motion.div
                        variants={itemVariants}
                        initial="initial"
                        animate="animate"
                        className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-[#DFA53B]/20 to-[#1E5C8C]/20 z-10" />
                        <img
                            src="/src/assets/images/coaching.png"
                            alt="Coaching AP LAB"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

