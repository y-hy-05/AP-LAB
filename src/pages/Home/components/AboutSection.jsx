import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Target, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
    return (
        <section className="relative bg-[#121212] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-[#1E5C8C] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-[#DFA53B] rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Développer avec <span className="text-[#DFA53B]">AP LAB</span>
                    </h2>
                    <p className="text-xl sm:text-2xl text-[#8C8C8C] font-light">
                        Une Révolution dans la Gestion des Leads
                    </p>
                </motion.div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeInOut" }}
                    className="group bg-[#1E1E1E] rounded-2xl p-8 sm:p-10 mb-16 border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500">
                    <Quote className="text-[#DFA53B] w-12 h-12 mb-6" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className="text-xl sm:text-2xl text-white font-light italic">
                            "Avant : on harcelait des gens.<br />
                            Maintenant : on comprend les gens."
                        </p>
                        <span className="text-[#DFA53B] font-semibold text-lg">Alexendra Papasodaro</span>
                    </div>
                </motion.div>

                {/* Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0, delay: 0.3 }}
                        className="group bg-[#1E1E1E] p-6 sm:p-8 rounded-xl border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500">
                        <Target className="text-[#DFA53B] w-10 h-10 mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-4">Approche Moderne</h3>
                        <p className="text-[#8C8C8C] leading-relaxed">
                            Notre méthode unique transforme les attentes en découvertes impactantes, redéfinissant les normes de la génération de leads.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0, delay: 0.5 }}
                        className="group bg-[#1E1E1E] p-6 sm:p-8 rounded-xl border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500">
                        <Users className="text-[#1E5C8C] w-10 h-10 mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-4">Relation Client</h3>
                        <p className="text-[#8C8C8C] leading-relaxed">
                            Une dynamique inspirante et visionnaire qui assure à nos partenaires une relation fiable avec leur public cible.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0, delay: 0.7 }}
                        className="group bg-[#1E1E1E] p-6 sm:p-8 rounded-xl border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500">
                        <Zap className="text-[#DFA53B] w-10 h-10 mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-4">Performance</h3>
                        <p className="text-[#8C8C8C] leading-relaxed">
                            Des solutions de haute performance pour start-ups en croissance et entreprises établies souhaitant renouveler leur stratégie.
                        </p>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <p className="text-[#8C8C8C] text-lg mb-8 max-w-3xl mx-auto">
                        Ensemble, développons un avenir où chaque interaction devient un tremplin vers le succès.
                    </p>
                    <Link to="/about">
                        <button className="group bg-[#1E5C8C] hover:bg-[#2E7BB5] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center gap-2 mx-auto">
                            <span>En savoir plus</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </section >
    );
};