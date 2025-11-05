import React from 'react';
import { WelcomeSection } from './components/WelcomeSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { Stats } from './components/Stats';
import { CtaSection } from './components/CtaSection';
import { Lead } from './components/Lead';

export const Home = () => {
    return (
        <div className="bg-[#121212]">
            <WelcomeSection />
            <Lead />
            <AboutSection />
            <ServicesSection />
            <Stats />
            <CtaSection />
        </div>
    );
};

