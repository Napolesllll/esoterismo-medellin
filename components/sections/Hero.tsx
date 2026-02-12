'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-mystic-black via-purple-950/20 to-mystic-black">
            {/* Animated Background Elements - Capas de Profundidad */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Capa 1: Orbes Principales de Fondo */}
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, 30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-500/15 to-transparent rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.35, 0.15],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />

                {/* Capa 2: Orbes Secundarios para Profundidad */}
                <motion.div
                    className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-bl from-cyan-400/8 to-transparent rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.1, 0.3, 0.1],
                        x: [-20, 20, -20],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.12, 0.32, 0.12],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                    }}
                />

                {/* Capa 3: Malla/Grid Mágica de Fondo */}
                <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(198, 167, 94, 0.2)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <motion.rect
                        width="100%"
                        height="100%"
                        fill="url(#grid)"
                        animate={{ opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />
                </svg>

                {/* Capa 4: Partículas Flotantes Mejoradas */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-mystic-gold rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.6 + 0.2,
                        }}
                        animate={{
                            y: [-30, 30, -30],
                            x: [-20, 20, -20],
                            opacity: [
                                Math.random() * 0.4 + 0.1,
                                Math.random() * 0.8 + 0.3,
                                Math.random() * 0.4 + 0.1,
                            ],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: 'easeInOut',
                        }}
                    />
                ))}

                {/* Capa 5: Destellos de Luz (Sparkles) */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`sparkle-${i}`}
                        className="absolute w-0.5 h-0.5 bg-white rounded-full shadow-lg"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 2.5 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                        }}
                    />
                ))}

                {/* Capa 6: Aura Radiante Central */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-mystic-gold/20 via-purple-500/10 to-transparent blur-3xl" />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn delay={0.2}>
                        <motion.div
                            className="inline-block mb-8 relative"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotateY: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            {/* Aura Mágica alrededor del Logo */}
                            <motion.div
                                className="absolute -inset-8 rounded-full bg-gradient-to-r from-mystic-gold/20 via-purple-500/10 to-mystic-gold/10 blur-2xl -z-10"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            {/* Anillo Rotativo Secundario */}
                            <motion.div
                                className="absolute -inset-12 rounded-full border border-mystic-gold/20 -z-10"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            />

                            <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto">
                                <Image
                                    src="/logo.png"
                                    alt="Maestros del Misterio Logo"
                                    width={224}
                                    height={224}
                                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(198,167,94,0.4)]"
                                    priority
                                />
                                {/* Anillo Principal Rotativo */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-mystic-gold/30"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                />

                                {/* Anillo de Partículas Orbitales */}
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={`orbit-${i}`}
                                        className="absolute inset-0"
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 15 + i * 2,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                    >
                                        <div className="absolute w-1.5 h-1.5 bg-mystic-gold rounded-full top-0 left-1/2 transform -translate-x-1/2" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="mystic-glow-text">Maestros del</span>
                            <br />
                            <span className="text-white">Misterio</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Descubre el poder de las{' '}
                            <span className="text-mystic-gold font-semibold">ciencias ocultas</span> con
                            nuestr@s expert@s. Más de 20 años transformando destinos en Colombia.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
                            {/* Efecto de Luz Detrás de los Botones */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-mystic-gold/10 via-purple-500/5 to-cyan-400/10 blur-3xl rounded-full -z-10"
                                animate={{
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                            />
                            <Link href="/contacto" className="btn-primary relative overflow-hidden group">
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{
                                        x: [-200, 200],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                                Consulta Gratuita
                            </Link>
                            <Link href="/#servicios" className="btn-outline relative group">
                                <motion.div
                                    className="absolute inset-0 rounded-lg border border-mystic-gold/0 group-hover:border-mystic-gold/100"
                                    animate={{
                                        borderColor: ['rgba(198, 167, 94, 0.3)', 'rgba(198, 167, 94, 0.7)', 'rgba(198, 167, 94, 0.3)'],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                                Ver Servicios
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={1}>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            {[
                                { icon: '🔮', text: 'Tarot Profesional' },
                                { icon: '💝', text: 'Amarres Efectivos' },
                                { icon: '🛡️', text: 'Protección 24/7' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    className="mystic-card p-6 relative group overflow-hidden"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Aura de Fondo para la Tarjeta */}
                                    <motion.div
                                        className="absolute -inset-1 bg-gradient-to-br from-mystic-gold/20 to-purple-500/10 rounded-xl blur-lg -z-10 group-hover:blur-xl"
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{
                                            duration: 3 + index * 0.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    />

                                    {/* Brillo Superior */}
                                    <motion.div
                                        className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-t-lg"
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Contenido */}
                                    <motion.div
                                        animate={{
                                            y: [0, -3, 0],
                                        }}
                                        transition={{
                                            duration: 2.5 + index * 0.3,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <motion.div
                                            className="text-4xl mb-2 inline-block"
                                            whileHover={{
                                                rotate: [0, -5, 5, -5, 0],
                                                scale: 1.2,
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <p className="text-mystic-gold font-semibold relative z-10">{item.text}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicator con Efectos Mejorados */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {/* Aura alrededor del Scroll */}
                <motion.div
                    className="absolute -inset-8 rounded-full bg-gradient-to-r from-mystic-gold/20 to-transparent blur-lg"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                />

                <div className="w-6 h-10 border-2 border-mystic-gold/60 rounded-full flex justify-center relative z-10">
                    <motion.div
                        className="w-1.5 h-1.5 bg-gradient-to-b from-mystic-gold to-transparent rounded-full mt-2"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}