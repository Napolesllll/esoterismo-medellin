'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-mystic-gold/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-mystic-purple/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-mystic-gold/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn delay={0.2}>
                        <motion.div
                            className="inline-block mb-8"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotateY: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto">
                                <Image
                                    src="/logo.png"
                                    alt="Maestros del Misterio Logo"
                                    width={224}
                                    height={224}
                                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(198,167,94,0.4)]"
                                    priority
                                />
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-mystic-gold/30"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                />
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
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/contacto" className="btn-primary">
                                Consulta Gratuita
                            </Link>
                            <Link href="/#servicios" className="btn-outline">
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
                                    className="mystic-card p-6"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-4xl mb-2">{item.icon}</div>
                                    <p className="text-mystic-gold font-semibold">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-mystic-gold rounded-full flex justify-center">
                    <motion.div
                        className="w-1.5 h-1.5 bg-mystic-gold rounded-full mt-2"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}