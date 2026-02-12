'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

interface FAQ {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    faqs: FAQ[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Fondo */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-mystic-black via-purple-950/10 to-mystic-black" />
                <div
                    className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 8s ease-in-out infinite',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                            <span className="bg-gradient-to-r from-mystic-gold via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Preguntas Frecuentes
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Resuelve todas tus dudas sobre nuestro servicio premium</p>
                    </div>
                </FadeIn>

                <StaggerContainer className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className="group relative overflow-hidden rounded-3xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                layout
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/15 via-purple-500/15 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                {/* Card */}
                                <motion.div
                                    className="relative bg-gradient-to-br from-purple-900/20 via-mystic-black/50 to-purple-950/20 backdrop-blur-2xl border border-mystic-gold/30 group-hover:border-mystic-gold/60 rounded-3xl overflow-hidden transition-all duration-500"
                                    layout
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full p-8 text-left flex items-center justify-between group-hover:bg-mystic-gold/5 transition-colors"
                                    >
                                        <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-mystic-gold to-purple-300 group-hover:from-white group-hover:to-mystic-gold bg-clip-text text-transparent pr-4 transition-all">
                                            {faq.question}
                                        </h3>
                                        <motion.svg
                                            className="w-6 h-6 text-mystic-gold flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </motion.svg>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-8 pb-8 text-gray-300 leading-relaxed border-t border-mystic-gold/20">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}