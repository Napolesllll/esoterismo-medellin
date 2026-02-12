'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import FadeIn from '@/components/animations/FadeIn';

const services = [
    {
        icon: '🔮',
        title: 'Tarot Profesional',
        description: 'Lecturas precisas de tarot con años de experiencia. Descubre tu futuro y toma decisiones informadas.',
        features: ['Lecturas personalizadas', 'Predicciones exactas', 'Orientación espiritual'],
        href: '/tarot',
        gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
        icon: '💝',
        title: 'Amarres de Amor',
        description: 'Rituales poderosos para unir corazones. Recupera a tu ser amado o fortalece tu relación actual.',
        features: ['100% efectivos', 'Discretos y seguros', 'Resultados garantizados'],
        href: '/amarres',
        gradient: 'from-pink-500/20 to-red-500/20',
    },
    {
        icon: '✨',
        title: 'Limpieza Energética',
        description: 'Elimina energías negativas de tu vida. Renueva tu aura y atrae prosperidad y bienestar.',
        features: ['Purificación completa', 'Paz interior', 'Protección duradera'],
        href: '/limpieza-energetica',
        gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        icon: '🛡️',
        title: 'Protección Espiritual',
        description: 'Escudos energéticos contra maleficios, envidias y mal de ojo. Mantente seguro siempre.',
        features: ['Protección permanente', 'Contra envidias', 'Blindaje total'],
        href: '/proteccion-espiritual',
        gradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
        icon: '🌙',
        title: 'Rituales Místicos',
        description: 'Ceremonias personalizadas para atraer amor, dinero, salud y éxito a tu vida.',
        features: ['Rituales personalizados', 'Ingredientes puros', 'Potentes resultados'],
        href: '/rituales-misticos',
        gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
        icon: '🔯',
        title: 'Sanación Espiritual',
        description: 'Equilibra tu energía vital. Sana traumas del pasado y encuentra paz interior profunda.',
        features: ['Terapia holística', 'Sanación profunda', 'Bienestar integral'],
        href: '/sanacion-espiritual',
        gradient: 'from-green-500/20 to-emerald-500/20',
    },
];

export default function Services() {
    return (
        <section id="servicios" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="section-title">Nuestros Servicios</h2>
                        <p className="section-subtitle">
                            Servicios esotéricos profesionales diseñados para transformar tu vida
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <StaggerItem key={service.title}>
                            <Link href={service.href}>
                                <motion.div
                                    className={`mystic-card p-8 h-full cursor-pointer group relative overflow-hidden`}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <motion.div
                                            className="text-6xl mb-4"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {service.icon}
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="font-serif text-2xl mystic-glow-text mb-3 group-hover:scale-105 transition-transform">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-gray-400">
                                                    <svg
                                                        className="w-4 h-4 mr-2 text-mystic-gold"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <div className="flex items-center text-mystic-gold group-hover:text-mystic-gold-light transition-colors">
                                            <span className="font-semibold">Más información</span>
                                            <motion.svg
                                                className="w-5 h-5 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </motion.svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <FadeIn delay={0.4}>
                    <div className="text-center mt-12">
                        <Link href="/contacto" className="btn-primary">
                            Solicita tu Consulta Gratuita
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}