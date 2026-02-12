'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

interface ServiceBenefitsProps {
    benefits: string[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Fondo animado */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-mystic-black to-mystic-black opacity-50" />
                <div
                    className="absolute -top-40 right-0 w-96 h-96 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 8s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 10s ease-in-out infinite reverse',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                            <span className="bg-gradient-to-r from-mystic-gold via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Beneficios Transformadores
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Descubre cómo este servicio cambiarará tu vida para siempre</p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className="group relative overflow-hidden rounded-3xl h-full"
                                whileHover={{ y: -10, scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/20 via-purple-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                {/* Card */}
                                <div className="relative bg-gradient-to-br from-purple-900/25 via-mystic-black/50 to-purple-950/25 backdrop-blur-2xl border border-mystic-gold/30 group-hover:border-mystic-gold/70 rounded-3xl p-8 h-full flex flex-col transition-all duration-500">
                                    {/* Decoración icon */}
                                    <motion.div
                                        className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-60 transition-opacity"
                                        whileHover={{ scale: 1.3, rotate: 20 }}
                                    >
                                        ✨
                                    </motion.div>

                                    <div className="relative flex-grow">
                                        {/* Checkmark Animated */}
                                        <motion.svg
                                            className="w-8 h-8 text-mystic-gold mb-4 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: index * 0.08 + 0.1, type: 'spring', stiffness: 200 }}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </motion.svg>

                                        <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-100 transition-colors font-medium">
                                            {benefit}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mystic-gold to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            {/* Partículas mágicas */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-mystic-gold rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.4 + 0.1,
                            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}