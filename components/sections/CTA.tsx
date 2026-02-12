'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';

export default function CTA() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-mystic-purple/20 via-mystic-gold/10 to-mystic-purple/20"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        backgroundSize: '200% 200%',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="mystic-card p-8 md:p-12 text-center relative overflow-hidden">
                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute top-0 left-0 w-32 h-32 bg-mystic-gold/10 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                            />
                            <motion.div
                                className="absolute bottom-0 right-0 w-32 h-32 bg-mystic-purple/10 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />

                            <div className="relative z-10">
                                <motion.div
                                    className="text-6xl mb-6"
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                >
                                    ✨
                                </motion.div>

                                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                                    <span className="mystic-glow-text">¿Lista para Transformar</span>
                                    <br />
                                    <span className="text-white">tu Vida?</span>
                                </h2>

                                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    No esperes más para atraer el amor, la prosperidad y la protección que mereces.
                                    Nuestras maestros están disponibles 24/7 para guiarte en tu camino espiritual.
                                </p>

                                {/* Benefits Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                    {[
                                        { icon: '🔮', text: 'Consulta Inmediata' },
                                        { icon: '💝', text: 'Resultados Garantizados' },
                                        { icon: '🛡️', text: 'Total Confidencialidad' },
                                    ].map((item) => (
                                        <motion.div
                                            key={item.text}
                                            className="bg-mystic-black-light/50 backdrop-blur p-4 rounded-lg border border-mystic-purple-light/20"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="text-3xl mb-2">{item.icon}</div>
                                            <div className="text-sm text-mystic-gold">{item.text}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link href="/contacto" className="btn-primary">
                                        Comienza Ahora - Gratis
                                    </Link>
                                    <a
                                        href="https://wa.me/573001234567"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline flex items-center space-x-2"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        <span>WhatsApp Directo</span>
                                    </a>
                                </div>

                                {/* Trust Badge */}
                                <div className="mt-8 pt-8 border-t border-mystic-purple-light/30">
                                    <p className="text-sm text-gray-400">
                                        🔒 <span className="text-mystic-gold">Primera consulta 100% gratuita</span> • Sin compromiso • Atención inmediata
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}