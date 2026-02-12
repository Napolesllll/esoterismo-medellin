'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

interface ServiceBenefitsProps {
    benefits: string[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
    return (
        <section className="py-20 md:py-32 bg-mystic-black-light/50">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <h2 className="section-title text-center mb-12">Beneficios Garantizados</h2>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className="mystic-card p-6 flex items-start space-x-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex-shrink-0">
                                    <motion.svg
                                        className="w-6 h-6 text-mystic-gold"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </motion.svg>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{benefit}</p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}