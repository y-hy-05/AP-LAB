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
                    className="absolute top-[10%] right-[5%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] rounded-full blur-3xl"
                    style={{ backgroundColor: "#1E5C8C" }}
                ></div>
                <div
                    className="absolute bottom-[10%] left-[5%] w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full blur-3xl"
                    style={{ backgroundColor: "#DFA53B" }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 text-center">
                <div className="flex flex-col items-center space-y-8 sm:space-y-10 max-w-360 mx-auto">
                    <img 
                        className='w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] 2xl:w-[20vw] max-w-[400px] md:flex hidden' 
                        src={APLAb} 
                        alt="APLAB Logo" 
                    />
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight max-w-[1400px] mx-auto"
                        style={{ color: "#FFFFFF" }}
                    >

                        Le Laboratoire de <span style={{ color: "#DFA53B" }}>l’Humain et de la Performance</span>
                    </h1>
                </div>

                <p
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-[1000px] mx-auto"
                    style={{ color: "#B3B3B3" }}
                >
                    Coaching et génération de leads pour commerciaux ambitieux.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-[800px] mx-auto">
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