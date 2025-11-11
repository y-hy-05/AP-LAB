import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import alexImg from '../../../assets/images/alex.jpg';

export const MatchMaker = () => {
    return (
        <>
            <section className="relative min-h-screen bg-[#121212] flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 sm:py-20 lg:py-24">
            {/* Background Gradient Effects */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#DFA53B] rounded-full filter blur-[128px] opacity-20" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#1E5C8C] rounded-full filter blur-[128px] opacity-20" />

            <div className="relative w-full max-w-7xl 2xl:max-w-[1400px] mx-auto">
                {/* Main Content Container */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 , delay: .5}}
                        className="space-y-6 md:space-y-8"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Bienvenue à l'ère du <span className="text-[#DFA53B]">Matchmaker Pro-Particulier</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#1E5C8C] font-medium italic">
                            L'art de connecter par intention, pas par pression.
                        </h2>
                        
                        <div className="space-y-4 text-[#8C8C8C] text-lg sm:text-xl">
                            <p>
                                Nous sommes déterminés à offrir des solutions stimulantes, centrées sur le client, 
                                pour répondre à vos besoins uniques.
                            </p>
                            <p>
                                Notre équipe d'experts visionnaires est prête à vous inspirer et à optimiser 
                                vos connexions professionnelles et personnelles.
                            </p>
                            <p>
                                Grâce à une approche empathique et dynamique, nous comprenons vos défis 
                                et vous accompagnons avec professionnalisme.
                            </p>
                            <p>
                                Rejoignez nous pour découvrir comment nous pouvons transformer vos expériences 
                                de mise en relation en véritables success stories.
                            </p>
                        </div>

                        {/* Quote Box */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-[#DFA53B] to-[#1E5C8C] rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur" />
                            <blockquote className="relative bg-[#1E1E1E] rounded-xl p-6 sm:p-8 border border-[#2A2A2A] group-hover:border-[#DFA53B] transition-colors duration-500">
                                <p className="text-white italic mb-4">
                                    "Je ne chasse pas, je choisis. Je ne vends pas, j'assemble. 
                                    Je ne démarche pas, je fais rencontrer."
                                </p>
                                <footer className="text-[#DFA53B] font-medium">
                                    Alexandra PAPASODARO - PDG / Fondatrice
                                </footer>
                            </blockquote>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link 
                                to="/services"
                                className="inline-flex items-center gap-2 bg-[#DFA53B] text-[#121212] px-8 py-4 rounded-full font-medium hover:bg-[#1E5C8C] hover:text-white transition-colors duration-300"
                            >
                                Découvrez nos services
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-2xl block w-full max-w-[600px] mx-auto lg:max-w-none"
                    >
                        <div className="aspect-square rounded-2xl border border-[#2A2A2A] bg-[#1E1E1E] overflow-hidden group hover:border-[#DFA53B] transition-colors duration-300">
                            <div className="absolute inset-0 bg-linear-to-br overflow-hidden from-[#DFA53B]/20 to-[#1E5C8C]/20 z-10" />
                            <img 
                                src={alexImg}
                                alt="AP LAB Matchmaker"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    );
};

