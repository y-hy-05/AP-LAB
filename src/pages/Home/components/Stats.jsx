import React, { useEffect, useRef } from 'react';

export const Stats = () => {
    const stats = [
        {
            value: 2000,
            suffix: 'k',
            label: 'Leads fournis',
            prefix: ''
        },
        {
            value: 278,
            suffix: '',
            label: 'Clients satisfaits',
            prefix: ''
        },
        {
            value: 75,
            suffix: '',
            label: 'Matching parfait',
            prefix: ''
        }
    ];

    const observerRef = useRef(null);

    useEffect(() => {
        const counters = document.querySelectorAll('.stat-counter');
        
        const animateValue = (counter, start, end, suffix, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const currentValue = Math.floor(progress * (end - start) + start);
                counter.textContent = currentValue + suffix;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const end = parseInt(counter.getAttribute('data-value'));
                    const suffix = counter.getAttribute('data-suffix') || '';
                    animateValue(counter, 0, end, suffix, 2000);
                    observerRef.current.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            observerRef.current.observe(counter);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <section className="relative bg-[#121212] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#1E5C8C] rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#DFA53B] rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="group bg-[#1E1E1E] p-8 rounded-xl border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl text-center"
                        >
                            <div className="mb-4">
                                <span 
                                    className="stat-counter inline-block text-5xl sm:text-6xl font-bold bg-linear-to-r from-[#DFA53B] to-[#1E5C8C] bg-clip-text text-transparent"
                                    data-value={stat.value}
                                    data-suffix={stat.suffix}
                                >
                                    0
                                </span>
                            </div>
                            <p className="text-lg sm:text-xl text-[#8C8C8C] group-hover:text-white transition-colors duration-300">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};