'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    icon: string;
    gradient: string;
}

export default function ServiceHero({ title, subtitle, icon, gradient }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(198, 167, 94, 0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <motion.div
                            className="text-7xl md:text-9xl mb-6"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                        >
                            {icon}
                        </motion.div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="mystic-glow-text">{title}</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a href="#detalles" className="btn-primary">
                                Ver Detalles
                            </a>
                            <a href="#contacto" className="btn-outline">
                                Consulta Gratuita
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}