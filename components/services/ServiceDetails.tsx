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

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {types.map((type, index) => (
                            <StaggerItem key={type.name}>
                                <motion.div
                                    className="group relative overflow-hidden rounded-3xl"
                                    whileHover={{ y: -15 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                                >
                                    {/* Glow effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/20 via-purple-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                    {/* Card */}
                                    <div className="relative bg-gradient-to-br from-purple-900/30 via-mystic-black/50 to-purple-950/30 backdrop-blur-2xl border border-mystic-gold/30 group-hover:border-mystic-gold/70 rounded-3xl p-8 transition-all duration-500">
                                        {/* Decoración de esquina */}
                                        <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                        <div className="relative">
                                            <h3 className="text-3xl font-serif font-bold mb-4 bg-gradient-to-r from-mystic-gold to-purple-300 group-hover:from-white group-hover:to-mystic-gold bg-clip-text text-transparent transition-all duration-300">
                                                {type.name}
                                            </h3>

                                            {/* Línea decorativa */}
                                            <div className="h-1 w-12 bg-gradient-to-r from-mystic-gold to-purple-500 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                                            <p className="text-gray-300 mb-6 leading-relaxed text-sm">{type.description}</p>

                                            {/* Stats */}
                                            <div className="flex justify-between items-center pt-6 border-t border-mystic-gold/20 group-hover:border-mystic-gold/50 transition-colors">
                                                <div className="text-center">
                                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Duración</div>
                                                    <div className="text-mystic-gold font-bold text-lg">{type.duration}</div>
                                                </div>
                                                <div className="w-px h-8 bg-gradient-to-b from-transparent via-mystic-gold/50 to-transparent" />
                                                <div className="text-center">
                                                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Efectividad</div>
                                                    <div className="text-mystic-gold font-bold text-2xl">{type.effectiveness}</div>
                                                </div>
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
                                        className="group relative overflow-hidden rounded-3xl"
                                        whileHover={{ x: 15 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/15 via-purple-500/15 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                        {/* Card */}
                                        <div className="relative bg-gradient-to-br from-purple-900/20 via-mystic-black/40 to-purple-950/20 backdrop-blur-xl border border-mystic-gold/20 group-hover:border-mystic-gold/60 rounded-3xl p-8 transition-all duration-500">
                                            <div className="relative flex items-start gap-6">
                                                {/* Step Number */}
                                                <motion.div
                                                    className="flex-shrink-0"
                                                    whileHover={{ scale: 1.15, rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mystic-gold via-purple-500 to-mystic-gold flex items-center justify-center text-mystic-black font-bold text-2xl shadow-lg shadow-mystic-gold/50">
                                                        {item.step}
                                                    </div>
                                                </motion.div>

                                                {/* Content */}
                                                <div className="flex-grow">
                                                    <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-mystic-gold to-purple-300 group-hover:from-white group-hover:to-mystic-gold bg-clip-text text-transparent mb-2 transition-all">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>

                                            {/* Connector Line */}
                                            {index < process.length - 1 && (
                                                <div className="ml-10 mt-4 h-8 w-0.5 bg-gradient-to-b from-mystic-gold via-mystic-gold/50 to-transparent" />
                                            )}
                                        </div>
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