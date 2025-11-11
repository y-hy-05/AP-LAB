import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LineChart, Handshake } from 'lucide-react';
import supportImg from '../../../assets/images/support.jpg';

export const Support = () => {
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

    const features = [
        {
            icon: LineChart,
            title: "🧪 testé en conditions réelles",
            description: "sur des cas concrets, des profils variés et des situations humaines complexes"
        },
        {
            icon: LineChart,
            title: "📊 mesuré & optimisé",
            description: "pour garantir une efficacité réelle, durable et duplicable"
        },
        {
            icon: Handshake,
            title: "🤝 validé dans le respect total de l'Éthique Bellabès™",
            description: "fondée sur la transparence, l'écoute, la protection du client et l'intégrité relationnelle"
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
                            Supports testés & validés — Éthique Bellabès™
                        </motion.h1>
                        
                        <motion.p
                            variants={itemVariants}
                            className="text-[#8C8C8C] text-lg leading-relaxed"
                        >
                            Chez AP LAB, nous ne livrons jamais de scripts, trames ou outils théoriques.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="text-[#8C8C8C] text-lg mb-8"
                        >
                            <p className="mb-4">Chaque support que nous transmettons a été :</p>
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 items-start p-4 bg-[#1E1E1E] rounded-lg border border-[#2A2A2A] hover:border-[#DFA53B] transition-colors duration-300">
                                        <feature.icon className="w-6 h-6 text-[#DFA53B] shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                                            <p className="text-[#8C8C8C]">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="space-y-4 text-[#8C8C8C] text-lg"
                        >
                            <p className="font-medium text-white">
                                Nos processus ne sont pas improvisés :
                            </p>
                            <p>
                                ils sont construits, éprouvés et approuvés avant de vous être confiés.
                            </p>
                            <p className="text-[#DFA53B] font-medium">
                                Ici, la performance ne sacrifie jamais l'humain.<br/>
                                Elle s'appuie sur lui.
                            </p>
                            <p>
                                Vous recevez des supports de haute précision, issus de notre laboratoire terrain, 
                                respectant nos valeurs de confiance, d'éthique et d'excellence comportementale.
                            </p>
                        </motion.div>

                        <motion.button
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 text-[#DFA53B] hover:text-white transition-colors duration-300 text-lg mt-6"
                        >
                            <span>En savoir plus</span>
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
                            src={supportImg}
                            alt="Support AP LAB"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

