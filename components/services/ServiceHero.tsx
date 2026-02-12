'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    icon: string;
    gradient: string;
}

export default function ServiceHero({ title, subtitle, icon, gradient }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Fondos animados múltiples */}
            <div className="absolute inset-0">
                {/* Gradiente base */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30`} />
                <div className="absolute inset-0 bg-gradient-to-t from-mystic-black via-transparent to-mystic-black" />

                {/* Orbs flotantes */}
                <div
                    className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-mystic-gold/15 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 8s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 10s ease-in-out infinite reverse',
                    }}
                />
                <div
                    className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 via-purple-500/10 to-transparent rounded-full blur-3xl"
                    style={{
                        animation: 'float-slow 12s ease-in-out infinite',
                    }}
                />

                {/* Grid animado */}
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
                        backgroundImage: 'radial-gradient(circle, rgba(198, 167, 94, 0.08) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Partículas mágicas */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-mystic-gold rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.6 + 0.2,
                                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <FadeIn>
                        {/* Badge premium */}
                        <div className="inline-block mb-8">
                            <div className="relative group mb-8">
                                <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold via-purple-500 to-mystic-gold rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
                                <span className="relative px-6 py-2 bg-mystic-black rounded-full text-sm font-semibold text-mystic-gold tracking-widest uppercase">
                                    ✦ Servicio Exclusivo ✦
                                </span>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <motion.div
                            className="mb-8 drop-shadow-2xl inline-block"
                            whileHover={{ scale: 1.2, rotate: 20 }}
                            animate={{
                                scale: [1, 1.08, 1],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                hover: { duration: 0.5 },
                            }}
                        >
                            {icon.startsWith('/') ? (
                                <Image
                                    src={icon}
                                    alt="Service icon"
                                    width={180}
                                    height={280}
                                    className="w-56 h-80"
                                />
                            ) : (
                                <div className="text-8xl md:text-9xl">{icon}</div>
                            )}
                        </motion.div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-mystic-gold via-purple-300 to-cyan-400 bg-clip-text text-transparent"
                                style={{
                                    animation: 'pulse 3s ease-in-out infinite',
                                }}
                            >
                                {title}
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
                            {subtitle}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {/* Botón primario */}
                            <a href="#detalles" className="relative group overflow-hidden px-8 py-4 rounded-full font-semibold text-center transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold via-purple-500 to-mystic-gold bg-200% group-hover:bg-left-bottom transition-all duration-500" />
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative text-mystic-black group-hover:text-white transition-colors z-10 flex items-center justify-center gap-2">
                                    Ver Detalles
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-20" />
                            </a>

                            {/* Botón secundario */}
                            <a href="#contacto" className="relative group overflow-hidden px-8 py-4 rounded-full font-semibold border-2 border-mystic-gold text-mystic-gold hover:text-white transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold/0 via-mystic-gold/20 to-mystic-gold/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <motion.span
                                        whileHover={{ rotate: 20 }}
                                        transition={{ type: 'spring' }}
                                    >
                                        ✨
                                    </motion.span>
                                    Consulta Gratuita
                                </span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}