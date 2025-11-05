import React from 'react';
import { ArrowRight, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CtaSection = () => {
    return (
        <section className="relative bg-[#1E1E1E] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#DFA53B] rounded-full blur-[100px] transform translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#1E5C8C] rounded-full blur-[100px] transform -translate-x-1/3" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="bg-[#121212] p-6 sm:p-10 md:p-16 rounded-2xl border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Prêt à transformer vos <span className="text-[#DFA53B]">relations professionnelles</span> ?
                        </h2>
                        
                        <p className="text-base sm:text-lg md:text-xl text-[#8C8C8C] mb-8 sm:mb-12 leading-relaxed">
                            Découvrez comment nous pouvons vous aider à développer votre réseau de manière 
                            <span className="text-white"> authentique</span> et <span className="text-white">efficace</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <Link 
                                to="/contact"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DFA53B] hover:bg-[#2E7BB5] px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-[#121212] hover:text-white transition-all duration-300 transform hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Contactez-nous</span>
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link 
                                to="/services"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#1E5C8C] hover:border-[#2E7BB5] px-6 sm:px-8 py-4 rounded-xl text-base sm:text-lg font-semibold text-[#1E5C8C] hover:text-[#2E7BB5] transition-all duration-300 transform hover:scale-105"
                            >
                                <Send className="w-5 h-5" />
                                <span>En savoir plus</span>
                            </Link>
                        </div>

                        {/* Additional Engagement Element */}
                        <div className="mt-12 pt-8 border-t border-[#2A2A2A]">
                            <p className="text-[#8C8C8C] text-sm sm:text-base">
                                Rejoignez les <span className="text-[#DFA53B] font-semibold">278+ professionnels</span> qui ont déjà transformé leur approche commerciale
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};