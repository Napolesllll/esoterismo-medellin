'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

interface ServiceType {
    name: string;
    description: string;
    duration: string;
    effectiveness: string;
}

interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

interface ServiceDetailsProps {
    description: string;
    types: ServiceType[];
    process: ProcessStep[];
}

export default function ServiceDetails({ description, types, process }: ServiceDetailsProps) {
    return (
        <section id="detalles" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                {/* Description */}
                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </FadeIn>

                {/* Types */}
                <div className="mb-20">
                    <FadeIn>
                        <h2 className="section-title text-center mb-12">Tipos de Servicios</h2>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {types.map((type) => (
                            <StaggerItem key={type.name}>
                                <motion.div
                                    className="mystic-card p-6"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-serif mystic-glow-text mb-3">{type.name}</h3>
                                    <p className="text-gray-300 mb-4">{type.description}</p>

                                    <div className="flex justify-between items-center pt-4 border-t border-mystic-purple-light/30">
                                        <div>
                                            <div className="text-sm text-gray-400">Duración</div>
                                            <div className="text-mystic-gold font-semibold">{type.duration}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-400">Efectividad</div>
                                            <div className="text-mystic-gold font-semibold text-2xl">
                                                {type.effectiveness}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Process */}
                <div>
                    <FadeIn>
                        <h2 className="section-title text-center mb-12">¿Cómo Funciona?</h2>
                    </FadeIn>

                    <div className="max-w-4xl mx-auto">
                        <StaggerContainer className="space-y-6">
                            {process.map((item, index) => (
                                <StaggerItem key={item.step}>
                                    <motion.div
                                        className="mystic-card p-6 md:p-8"
                                        whileHover={{ x: 10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex items-start space-x-6">
                                            {/* Step Number */}
                                            <div className="flex-shrink-0">
                                                <motion.div
                                                    className="w-16 h-16 rounded-full bg-mystic-gold flex items-center justify-center text-mystic-black font-bold text-2xl"
                                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    {item.step}
                                                </motion.div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-grow">
                                                <h3 className="text-xl md:text-2xl font-serif mystic-glow-text mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-300">{item.description}</p>
                                            </div>
                                        </div>

                                        {/* Connector Line */}
                                        {index < process.length - 1 && (
                                            <div className="ml-8 mt-4 h-8 w-0.5 bg-gradient-to-b from-mystic-gold to-transparent" />
                                        )}
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}