import React from 'react';
import { motion } from 'framer-motion';

export const Lead = () => {
    const letters = [
        {
            letter: 'L',
            word: 'Lien',
            color: '#DFA53B'
        },
        {
            letter: 'E',
            word: 'Entre',
            color: '#1E5C8C'
        },
        {
            letter: 'A',
            word: 'Attentes',
            color: '#DFA53B'
        },
        {
            letter: 'D',
            word: 'Découvertes',
            color: '#1E5C8C'
        }
    ];

    return (
        <section className="min-h-screen bg-[#121212] flex items-center justify-center px-3 sm:px-4 py-12 sm:py-16">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                        Ma définition du <span className="text-[#DFA53B]">LEAD</span>
                    </h2>
                </div>

                {/* LEAD Letters Display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-16 px-4">
                    {letters.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3*index }}
                            viewport={{ once: true, amount: 0.3 }}
                            key={index}
                            className="group relative overflow-hidden bg-[#1E1E1E] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl border border-[#2A2A2A] hover:border-[#DFA53B]"
                        >
                            {/* Large Letter */}
                            <div className="relative z-10 text-center sm:text-left">
                                <h3
                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 sm:mb-4 transition-colors duration-300"
                                    style={{ color: item.color }}
                                >
                                    {item.letter}
                                </h3>

                                {/* Word */}
                                <p className="text-lg sm:text-xl md:text-2xl font-medium text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.word}
                                </p>
                            </div>

                            {/* Hover Effect Background */}
                            <div className="absolute inset-0 bg-linear-to-br from-transparent to-black opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* Definition Box */}
                <div className="relative group bg-[#1E1E1E] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500 mx-4">
                    <div className="absolute -inset-1 bg-linear-to-r from-[#DFA53B] to-[#1E5C8C] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur" />

                    <div className="relative">
                        <p className="text-base sm:text-lg md:text-xl text-[#8C8C8C] leading-relaxed">
                            Le <span className="text-[#DFA53B] font-semibold">LEAD</span> n'est pas qu'une simple opportunité commerciale,
                            c'est un <span className="text-[#1E5C8C] font-semibold">lien précieux</span> qui se crée entre des attentes
                            et des découvertes mutuelles. C'est l'art de comprendre, d'accompagner et de
                            transformer une connexion initiale en une relation durable et fructueuse.
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-linear-to-br from-[#DFA53B] to-transparent opacity-10 rounded-full blur-xl" />
                    <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 bg-linear-to-tr from-[#1E5C8C] to-transparent opacity-10 rounded-full blur-xl" />
                </div>
            </div>
        </section>
    );
};

