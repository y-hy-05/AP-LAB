import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ApLab = () => {
    const containerVariants = {
        initial: {},
        animate: {
            y: 0,
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

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    };

    const gradientVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 0.2,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative min-h-screen bg-[#121212] flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 overflow-hidden">
            {/* Background Gradients */}
            <motion.div 
                variants={gradientVariants}
                initial="hidden"
                animate="visible"
                className="fixed top-[20%] right-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[#DFA53B] rounded-full filter blur-[100px] opacity-30"
                style={{ zIndex: 0 }}
            />
            <motion.div 
                variants={gradientVariants}
                initial="hidden"
                animate="visible"
                className="fixed bottom-[20%] left-[10%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-[#1E5C8C] rounded-full filter blur-[100px] opacity-30"
                style={{ zIndex: 0 }}
            />

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Title */}
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="space-y-8"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                    >
                        <span className="text-[#DFA53B]">AP LAB</span> - Un acteur clés dans la vente
                    </motion.h1>

                    {/* Description */}
                    <motion.div 
                        variants={itemVariants}
                        className="space-y-6 text-lg sm:text-xl text-[#8C8C8C]"
                    >
                        <p>
                            Chez AP LAB, nous nous engageons à fournir des leads de qualité 
                            et des formations pour améliorer les performances de votre équipe de vente.
                        </p>
                        <p>
                            Nous sommes fiers d'aider les entreprises à croître grâce à notre approche 
                            personnalisée et à notre expertise dans le marché français.
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="inline-flex items-center gap-2 bg-[#DFA53B] text-[#121212] px-8 py-4 rounded-full font-medium hover:bg-[#1E5C8C] hover:text-white transition-colors duration-300"
                    >
                        Obtenir un devis
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

