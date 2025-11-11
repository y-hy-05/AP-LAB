import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact = () => {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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

    const contactInfo = [
        {
            icon: Phone,
            label: "Téléphone",
            value: "06 29 98 06 09",
            href: "tel:+33629980609"
        },
        {
            icon: Mail,
            label: "Courriel",
            value: "contact@aplab.fr",
            href: "mailto:contact@aplab.fr"
        },
        {
            icon: MapPin,
            label: "Adresse",
            value: "10 Route du haut puit, Sully, 71360, Bourgogne, France",
            href: "https://maps.google.com/?q=10+Route+du+haut+puit,+Sully,+71360"
        }
    ];

    const formFields = [
        { label: "Prénom", type: "text", placeholder: "Votre prénom" },
        { label: "Nom", type: "text", placeholder: "Votre nom" },
        { label: "Email", type: "email", placeholder: "votre@email.com" },
        { label: "Sujet", type: "text", placeholder: "Sujet de votre message" }
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
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="text-center mb-16 sm:mb-24"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Prendre contact
                    </motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-[#8C8C8C]"
                    >
                        Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question.
                    </motion.p>
                </motion.div>

                {/* Main Grid - Form and Info */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className="lg:col-span-2"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="group relative bg-[#1E1E1E] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500"
                        >
                            <div className="absolute -inset-1 bg-linear-to-r from-[#DFA53B] to-[#1E5C8C] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur" />
                            
                            <form className="relative space-y-6">
                                {/* First Row - Name Fields */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {formFields.slice(0, 2).map((field, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="space-y-2"
                                        >
                                            <label className="text-white font-medium text-sm">
                                                {field.label}
                                            </label>
                                            <input 
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-[#8C8C8C] focus:outline-none focus:border-[#DFA53B] focus:ring-2 focus:ring-[#DFA53B]/20 transition-all duration-300"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Email Field */}
                                <motion.div
                                    variants={itemVariants}
                                    className="space-y-2"
                                >
                                    <label className="text-white font-medium text-sm">
                                        {formFields[2].label}
                                    </label>
                                    <input 
                                        type={formFields[2].type}
                                        placeholder={formFields[2].placeholder}
                                        className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-[#8C8C8C] focus:outline-none focus:border-[#DFA53B] focus:ring-2 focus:ring-[#DFA53B]/20 transition-all duration-300"
                                    />
                                </motion.div>

                                {/* Subject Field */}
                                <motion.div
                                    variants={itemVariants}
                                    className="space-y-2"
                                >
                                    <label className="text-white font-medium text-sm">
                                        {formFields[3].label}
                                    </label>
                                    <input 
                                        type={formFields[3].type}
                                        placeholder={formFields[3].placeholder}
                                        className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-[#8C8C8C] focus:outline-none focus:border-[#DFA53B] focus:ring-2 focus:ring-[#DFA53B]/20 transition-all duration-300"
                                    />
                                </motion.div>

                                {/* Message Field */}
                                <motion.div
                                    variants={itemVariants}
                                    className="space-y-2"
                                >
                                    <label className="text-white font-medium text-sm">
                                        Message
                                    </label>
                                    <textarea 
                                        placeholder="Votre message..."
                                        rows="6"
                                        className="w-full bg-[#121212] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-[#8C8C8C] focus:outline-none focus:border-[#DFA53B] focus:ring-2 focus:ring-[#DFA53B]/20 transition-all duration-300 resize-none"
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-[#DFA53B] text-[#121212] font-medium py-3 px-6 rounded-lg hover:bg-[#1E5C8C] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 mt-8"
                                >
                                    <Send className="w-5 h-5" />
                                    Envoyer le message
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        className="space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.href}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                className="group relative bg-[#1E1E1E] rounded-xl p-6 border border-[#2A2A2A] hover:border-[#DFA53B] transition-all duration-500 block"
                            >
                                <div className="absolute -inset-1 bg-linear-to-r from-[#DFA53B] to-[#1E5C8C] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur" />
                                
                                <div className="relative flex items-start gap-4">
                                    <div className="bg-[#DFA53B]/10 p-3 rounded-lg">
                                        <info.icon className="w-6 h-6 text-[#DFA53B]" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[#8C8C8C] text-sm font-medium mb-2">
                                            {info.label}
                                        </p>
                                        <p className="text-white font-medium break-words hover:text-[#DFA53B] transition-colors duration-300">
                                            {info.value}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* Map Section */}
                        <motion.div
                            variants={itemVariants}
                            className="relative bg-[#1E1E1E] rounded-xl overflow-hidden border border-[#2A2A2A] h-48"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-[#DFA53B]/20 to-[#1E5C8C]/20" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.5677844089347!2d3.482!3d46.934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f2d3f3f3f3f3f3%3A0x0!2sAP%20LAB!5e0!3m2!1sfr!2sfr!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="relative z-10"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

