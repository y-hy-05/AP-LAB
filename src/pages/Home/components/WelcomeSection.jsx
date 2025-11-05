import React from 'react';
import APLAb from '../../../assets/images/APLABLogoPNG.png';
import { ArrowRight } from 'lucide-react';

export const WelcomeSection = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#0F0F0F" }}
        >
            {/* Background Blurs */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: "#1E5C8C" }}
                ></div>
                <div
                    className="absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl"
                    style={{ backgroundColor: "#DFA53B" }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-20 text-center max-w-4xl">
                <div className="flex flex-col items-center space-y-10">
                    <img className='w-[60vw] md:flex hidden' src={APLAb} alt="" />
                    <h1
                        className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
                        style={{ color: "#FFFFFF" }}
                    >

                        Le Laboratoire de <span style={{ color: "#DFA53B" }}>l’Humain et de la Performance</span>
                    </h1>
                </div>

                <p
                    className="text-xl md:text-2xl mb-8 leading-relaxed"
                    style={{ color: "#B3B3B3" }}
                >
                    Coaching et génération de leads pour commerciaux ambitieux.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
                    <button
                        className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 bg-[#DFA53B] text-[#121212] hover:bg-[#2E7BB5] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        <ArrowRight className="w-5 h-5" />
                        <span>Commencer maintenant</span>
                    </button>

                    <button
                        className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold uppercase tracking-wider rounded-lg border-2 border-[#1E5C8C] text-[#1E5C8C] hover:border-[#DFA53B] hover:text-[#DFA53B] bg-transparent flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                    >
                        <span>Découvrir nos services</span>
                    </button>
                </div>
            </div>
        </section>
    );
};