'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';

interface ServiceCTAProps {
    title: string;
    description: string;
    service: string;
}

export default function ServiceCTA({ title, description, service }: ServiceCTAProps) {
    const whatsappMessage = encodeURIComponent(
        `¡Hola! Me interesa información sobre ${service}. ¿Pueden ayudarme?`
    );

    return (
        <section id="contacto" className="py-20 md:py-32 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-mystic-black via-purple-950/20 to-mystic-black" />

                {/* Floating Orbs */}
                <div
                    className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-full blur-3xl"
                    style={{ animation: 'float-slow 10s ease-in-out infinite' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"
                    style={{ animation: 'float-slow 12s ease-in-out infinite reverse' }}
                />

                {/* Particles */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-mystic-gold rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `twinkle ${2 + Math.random() * 3}s infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        {/* Separator Line */}
                        <div className="flex items-center justify-center mb-16">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-mystic-gold/50 to-transparent" />
                            <div className="px-4 text-mystic-gold">✦ Acción Final ✦</div>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-mystic-gold/50 to-transparent" />
                        </div>

                        <div className="group relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/20 via-purple-500/20 to-mystic-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* Main Card */}
                            <div className="relative bg-gradient-to-br from-purple-900/30 via-mystic-black/50 to-purple-950/30 backdrop-blur-2xl border border-mystic-gold/30 group-hover:border-mystic-gold/70 rounded-3xl p-8 md:p-12 transition-all duration-500">
                                {/* Decorative corners */}
                                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                                <div className="relative text-center">
                                    <motion.div
                                        className="text-6xl md:text-7xl mb-8"
                                        animate={{
                                            scale: [1, 1.15, 1],
                                            rotate: [0, 8, -8, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        ✨
                                    </motion.div>

                                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                                        <span className="bg-gradient-to-r from-mystic-gold via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                            {title}
                                        </span>
                                    </h2>

                                    <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                        {description}
                                    </p>

                                    {/* Contact Options */}
                                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                                        {/* WhatsApp Button */}
                                        <motion.a
                                            href={`https://wa.me/573001234567?text=${whatsappMessage}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative overflow-hidden px-8 md:px-10 py-4 rounded-xl font-semibold flex items-center space-x-3 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold via-purple-500 to-mystic-gold bg-200% group-hover/btn:bg-left-bottom transition-all duration-500" />
                                            <div className="absolute inset-0.5 bg-mystic-black rounded-[10px]" />
                                            <div className="relative flex items-center space-x-3 text-white">
                                                <motion.svg
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    whileHover={{ rotate: 20, scale: 1.2 }}
                                                    transition={{ type: 'spring', stiffness: 200 }}
                                                >
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </motion.svg>
                                                <span>WhatsApp Inmediato</span>
                                            </div>
                                        </motion.a>

                                        {/* Contact Form Button */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href="/contacto"
                                                className="group/btn2 relative overflow-hidden px-8 md:px-10 py-4 rounded-xl font-semibold flex items-center space-x-3 border border-2 border-mystic-gold/50 hover:border-mystic-gold transition-all duration-300 bg-gradient-to-r from-mystic-gold/5 to-purple-500/5 hover:from-mystic-gold/15 hover:to-purple-500/15"
                                            >
                                                <motion.svg
                                                    className="w-6 h-6 text-mystic-gold"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    whileHover={{ rotate: -20, scale: 1.2 }}
                                                    transition={{ type: 'spring', stiffness: 200 }}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </motion.svg>
                                                <span className="bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent">
                                                    Enviar Mensaje
                                                </span>
                                            </Link>
                                        </motion.div>
                                    </div>

                                    {/* Trust Elements */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-mystic-gold/20">
                                        {[
                                            { icon: '🔒', text: 'Confidencial' },
                                            { icon: '⚡', text: 'Respuesta Inmediata' },
                                            { icon: '💎', text: 'Garantizado' },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={item.text}
                                                className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-mystic-gold/5 transition-colors"
                                                whileHover={{ scale: 1.08, y: -5 }}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <div className="text-4xl">{item.icon}</div>
                                                <div className="text-sm font-semibold bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent">
                                                    {item.text}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}