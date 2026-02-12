'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

const stats = [
    { number: '20+', label: 'Años de Experiencia' },
    { number: '10K+', label: 'Clientes Satisfechos' },
    { number: '98%', label: 'Tasa de Éxito' },
    { number: '24/7', label: 'Atención Continua' },
];

const qualities = [
    {
        icon: '🌟',
        title: 'Experiencia Comprobada',
        description: 'Más de dos décadas dominando las artes místicas y ayudando a transformar vidas.',
    },
    {
        icon: '🔒',
        title: 'Discreción Absoluta',
        description: 'Tu privacidad es sagrada. Todos nuestros servicios son 100% confidenciales.',
    },
    {
        icon: '⚡',
        title: 'Resultados Garantizados',
        description: 'Trabajamos con energías poderosas para asegurar resultados tangibles y duraderos.',
    },
    {
        icon: '💎',
        title: 'Ingredientes Auténticos',
        description: 'Utilizamos solo materiales genuinos y de la más alta calidad en todos nuestros rituales.',
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/2 left-0 w-96 h-96 bg-mystic-gold/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [-50, 50, -50],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="section-title">¿Quiénes Somos?</h2>
                        <p className="section-subtitle">
                            Guardianas ancestrales del conocimiento esotérico al servicio de tu bienestar
                        </p>
                    </div>
                </FadeIn>

                {/* Stats */}
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat) => (
                        <StaggerItem key={stat.label}>
                            <motion.div
                                className="mystic-card p-6 text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold mystic-glow-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <FadeIn direction="left">
                        <div className="mystic-card p-8 md:p-12">
                            <h3 className="font-serif text-3xl mystic-glow-text mb-6">
                                Una Tradición de Sabiduría
                            </h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Somos un linaje de maestr@s espirituales con más de 20 años de experiencia
                                    en las ciencias ocultas. Nuestra misión es guiar a quienes buscan respuestas,
                                    sanación y transformación en sus vidas.
                                </p>
                                <p>
                                    Combinamos conocimientos ancestrales con técnicas modernas para ofrecer
                                    servicios esotéricos efectivos y personalizados. Cada ritual, cada lectura,
                                    cada consulta es realizada con dedicación absoluta y respeto por las energías
                                    universales.
                                </p>
                                <p className="text-mystic-gold font-semibold">
                                    Tu bienestar espiritual es nuestra prioridad. Trabajamos incansablemente
                                    para que alcances la paz, el amor y la prosperidad que mereces.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="right" delay={0.2}>
                        <div className="space-y-6">
                            {qualities.map((quality, index) => (
                                <motion.div
                                    key={quality.title}
                                    className="mystic-card p-6"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="text-4xl flex-shrink-0">{quality.icon}</div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-mystic-gold mb-2">
                                                {quality.title}
                                            </h4>
                                            <p className="text-gray-400">{quality.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Trust Badges */}
                <FadeIn delay={0.3}>
                    <div className="mystic-card p-8 text-center">
                        <h3 className="font-serif text-2xl mystic-glow-text mb-6">
                            Confía en los Expert@s
                        </h3>
                        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                            <div className="flex items-center space-x-2">
                                <svg className="w-6 h-6 text-mystic-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Certificadas</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-6 h-6 text-mystic-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>100% Seguro</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-6 h-6 text-mystic-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>Resultados Comprobados</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-6 h-6 text-mystic-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span>Atención 24/7</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}