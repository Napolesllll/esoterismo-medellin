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
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <h2 className="section-title text-center mb-12">Preguntas Frecuentes</h2>
                </FadeIn>

                <StaggerContainer className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className="mystic-card overflow-hidden"
                                layout
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-mystic-purple-light/10 transition-colors"
                                >
                                    <h3 className="text-lg md:text-xl font-semibold text-mystic-gold pr-4">
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
                                        >
                                            <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}