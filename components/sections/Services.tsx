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
        backgroundImage: '/tarot.png',
    },
    {
        icon: '💝',
        title: 'Amarres de Amor',
        description: 'Rituales poderosos para unir corazones. Recupera a tu ser amado o fortalece tu relación actual.',
        features: ['100% efectivos', 'Discretos y seguros', 'Resultados garantizados'],
        href: '/amarres',
        gradient: 'from-pink-500/20 to-red-500/20',
        backgroundImage: '/amarres.png',
    },
    {
        icon: '✨',
        title: 'Limpieza Energética',
        description: 'Elimina energías negativas de tu vida. Renueva tu aura y atrae prosperidad y bienestar.',
        features: ['Purificación completa', 'Paz interior', 'Protección duradera'],
        href: '/limpieza-energetica',
        gradient: 'from-blue-500/20 to-cyan-500/20',
        backgroundImage: '/limpieza-energetica.png',
    },
    {
        icon: '🛡️',
        title: 'Protección Espiritual',
        description: 'Escudos energéticos contra maleficios, envidias y mal de ojo. Mantente seguro siempre.',
        features: ['Protección permanente', 'Contra envidias', 'Blindaje total'],
        href: '/proteccion-espiritual',
        gradient: 'from-yellow-500/20 to-orange-500/20',
        backgroundImage: '/proteccion espiritual.png',
    },
    {
        icon: '🌙',
        title: 'Rituales Místicos',
        description: 'Ceremonias personalizadas para atraer amor, dinero, salud y éxito a tu vida.',
        features: ['Rituales personalizados', 'Ingredientes puros', 'Potentes resultados'],
        href: '/rituales-misticos',
        gradient: 'from-indigo-500/20 to-purple-500/20',
        backgroundImage: '/rituales-misticos.png',
    },
    {
        icon: '🔯',
        title: 'Sanación Espiritual',
        description: 'Equilibra tu energía vital. Sana traumas del pasado y encuentra paz interior profunda.',
        features: ['Terapia holística', 'Sanación profunda', 'Bienestar integral'],
        href: '/sanacion-espiritual',
        gradient: 'from-green-500/20 to-emerald-500/20',
        backgroundImage: '/sanacion-espiritual.png',
    },
];

export default function Services() {
    return (
        <section id="servicios" className="py-20 md:py-32 relative overflow-hidden">
            {/* Fondo animado mágico */}
            <div className="absolute inset-0">
                {/* Gradientes base */}
                <div className="absolute inset-0 bg-gradient-to-b from-mystic-black via-purple-950/20 to-mystic-black opacity-50" />

                {/* Orbs flotantes */}
                <div
                    className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 8s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 10s ease-in-out infinite reverse',
                    }}
                />
                <div
                    className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-tr from-cyan-400/5 via-purple-500/5 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 12s ease-in-out infinite',
                    }}
                />
            </div>

            {/* Partículas mágicas */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-mystic-gold rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <FadeIn>
                    <div className="text-center mb-20">
                        {/* Badge */}
                        <div className="inline-block mb-8">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold via-purple-500 to-mystic-gold rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
                                <span className="relative px-6 py-2 bg-mystic-black rounded-full text-sm font-semibold text-mystic-gold tracking-widest uppercase">
                                    ✦ Servicios Premium ✦
                                </span>
                            </div>
                        </div>

                        {/* Título */}
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            <span className="block bg-gradient-to-r from-mystic-gold via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Transforma tu
                            </span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-purple-300 to-mystic-gold bg-clip-text text-transparent" style={{
                                animation: 'pulse 3s ease-in-out infinite',
                            }}>
                                Destino
                            </span>
                        </h2>

                        {/* Descripción */}
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
                            Cada servicio está diseñado con precisión y dedicación para traer transformaciones reales
                            <span className="text-mystic-gold font-semibold"> a tu vida espiritual y material</span>.
                        </p>
                    </div>
                </FadeIn>

                {/* Servicios Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <StaggerItem key={service.title}>
                            <Link href={service.href}>
                                <motion.div
                                    className="group relative overflow-hidden rounded-3xl cursor-pointer h-full"
                                    whileHover={{ y: -15 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                                >
                                    {/* Glow Background */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/20 via-purple-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                    {/* Main Card */}
                                    <div className={`relative bg-gradient-to-br from-purple-900/30 via-mystic-black/50 to-purple-950/30 backdrop-blur-2xl border border-mystic-gold/30 group-hover:border-mystic-gold/70 rounded-3xl p-8 h-full transition-all duration-500`}>
                                        {/* Background Image for Protection Card */}
                                        {service.backgroundImage && (
                                            <div
                                                className="absolute inset-0 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                                style={{
                                                    backgroundImage: `url('${service.backgroundImage}')`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                            />
                                        )}
                                        {/* Gradient Overlay on Hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl`} />

                                        {/* Decoración de esquina */}
                                        <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <motion.div
                                                className="text-7xl mb-6 drop-shadow-lg"
                                                whileHover={{ scale: 1.25, rotate: 15 }}
                                                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                                            >
                                                {service.icon}
                                            </motion.div>

                                            {/* Title */}
                                            <h3 className="font-serif text-3xl font-bold mb-4 bg-gradient-to-r from-mystic-gold to-purple-300 group-hover:from-white group-hover:to-mystic-gold bg-clip-text text-transparent transition-all duration-300">
                                                {service.title}
                                            </h3>

                                            {/* Línea decorativa */}
                                            <div className="h-1 w-12 bg-gradient-to-r from-mystic-gold to-purple-500 rounded-full mb-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                                            {/* Description */}
                                            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <ul className="space-y-3 mb-8">
                                                {service.features.map((feature, idx) => (
                                                    <motion.li
                                                        key={feature}
                                                        className="flex items-center text-sm text-gray-300 group-hover:text-gray-100 transition-colors"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileHover={{ x: 5 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-mystic-gold to-purple-500 mr-3 flex-shrink-0" />
                                                        <span>{feature}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* CTA */}
                                            <div className="flex items-center justify-between pt-6 border-t border-mystic-gold/20 group-hover:border-mystic-gold/50 transition-colors">
                                                <span className="font-semibold bg-gradient-to-r from-mystic-gold to-purple-300 group-hover:from-white group-hover:to-mystic-gold bg-clip-text text-transparent transition-all">
                                                    Descubre más
                                                </span>
                                                <motion.div
                                                    className="text-mystic-gold"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    →
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* CTA Section */}
                <FadeIn delay={0.4}>
                    <div className="relative mt-20 pt-16">
                        {/* Decoración línea superior */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mystic-gold/50 to-transparent" />

                        <div className="text-center">
                            <p className="text-gray-400 mb-6 text-sm tracking-widest uppercase">
                                ¿Listo para tu transformación?
                            </p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link href="/contacto" className="relative group inline-block overflow-hidden py-4 px-10 rounded-full font-semibold text-center transition-all duration-300">
                                    {/* Fondo */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold via-purple-500 to-mystic-gold bg-200% group-hover:bg-left-bottom transition-all duration-500" />

                                    {/* Brillo */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Contenido */}
                                    <span className="relative text-mystic-black group-hover:text-white transition-colors z-10 flex items-center justify-center gap-2">
                                        <motion.span
                                            whileHover={{ rotate: 20 }}
                                            transition={{ type: 'spring' }}
                                        >
                                            ✨
                                        </motion.span>
                                        Solicita tu Consulta Gratuita
                                        <motion.span
                                            initial={{ x: -5, opacity: 0 }}
                                            whileHover={{ x: 5, opacity: 1 }}
                                            transition={{ type: 'spring' }}
                                        >
                                            →
                                        </motion.span>
                                    </span>

                                    {/* Pulso */}
                                    <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-20" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}