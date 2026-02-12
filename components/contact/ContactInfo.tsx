'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/metadata';

const contactMethods = [
    {
        icon: '📱',
        title: 'WhatsApp',
        description: 'Respuesta inmediata 24/7',
        value: '+57 300 123 4567',
        link: `https://wa.me/${siteConfig.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent('¡Hola! Me gustaría información sobre sus servicios.')}`,
        primary: true,
    },
    {
        icon: '📞',
        title: 'Teléfono',
        description: 'Llámanos directamente',
        value: '+57 300 123 4567',
        link: 'tel:+573001234567',
        primary: false,
    },
    {
        icon: '📧',
        title: 'Email',
        description: 'Respuesta en 24 horas',
        value: 'contacto@maestrasdelmisterio.com',
        link: 'mailto:contacto@maestrasdelmisterio.com',
        primary: false,
    },
];

const socialLinks = [
    {
        name: 'Instagram',
        icon: '📸',
        url: 'https://instagram.com/maestrasdelmisterio',
        color: 'from-purple-500 to-pink-500',
    },
    {
        name: 'Facebook',
        icon: '👍',
        url: 'https://facebook.com/maestrasdelmisterio',
        color: 'from-blue-500 to-blue-600',
    },
    {
        name: 'TikTok',
        icon: '🎵',
        url: 'https://tiktok.com/@maestrasdelmisterio',
        color: 'from-black to-pink-500',
    },
];

const scheduleInfo = [
    {
        icon: '🕐',
        title: 'Horario de Atención',
        info: '24 horas, 7 días a la semana',
    },
    {
        icon: '📍',
        title: 'Ubicación',
        info: 'Medellín, Colombia',
    },
    {
        icon: '🌎',
        title: 'Cobertura',
        info: 'Toda Colombia y Latinoamérica',
    },
];

export default function ContactInfo() {
    return (
        <div className="space-y-6">
            {/* SECCIÓN 1: Métodos de Contacto Premium */}
            <div className="space-y-4">
                <h3 className="font-serif text-xl md:text-2xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent uppercase tracking-wider">
                    📱 Contacta Directamente
                </h3>
                <div className="space-y-3">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.link}
                            target={method.link.startsWith('http') ? '_blank' : undefined}
                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ scale: 1.03, x: 5 }}
                            className={`group relative overflow-hidden rounded-xl p-4 border transition-all duration-300 ${method.primary
                                ? 'border-mystic-gold/70 bg-gradient-to-r from-mystic-gold/25 via-purple-500/15 to-transparent shadow-lg shadow-mystic-gold/20'
                                : 'border-mystic-gold/40 bg-gradient-to-r from-purple-900/15 via-mystic-black to-transparent hover:border-mystic-gold/70'
                                }`}
                        >
                            {/* Glow effect */}
                            {method.primary && (
                                <div className="absolute -inset-1 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition duration-300 bg-mystic-gold" />
                            )}

                            <div className="relative flex items-start gap-3">
                                <motion.div
                                    className="text-3xl flex-shrink-0 mt-1"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {method.icon}
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-bold text-mystic-gold text-sm uppercase tracking-wide mb-1">
                                        {method.title}
                                    </div>
                                    <div className="text-xs text-gray-400 mb-2">
                                        {method.description}
                                    </div>
                                    <div className="text-sm font-semibold text-white group-hover:text-mystic-gold transition-colors">
                                        {method.value}
                                    </div>
                                </div>
                                {method.primary && (
                                    <motion.span
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        className="text-xs bg-gradient-to-r from-mystic-gold to-purple-400 text-mystic-black px-2 py-1 rounded-full font-bold whitespace-nowrap flex-shrink-0 mt-1"
                                    >
                                        ⭐ RÁPIDO
                                    </motion.span>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* SECCIÓN 2: Información de Servicio en Grid */}
            <div className="space-y-4">
                <h3 className="font-serif text-xl md:text-2xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent uppercase tracking-wider">
                    ℹ️ Detalles del Servicio
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {scheduleInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl p-4 border border-mystic-gold/40 bg-gradient-to-br from-purple-900/15 via-mystic-black to-transparent hover:border-mystic-gold/70 transition-all duration-300"
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-1 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition duration-300 bg-purple-500" />

                            <div className="relative flex flex-col items-center text-center gap-2">
                                <motion.div
                                    className="text-3xl"
                                    whileHover={{ scale: 1.25, rotate: 5 }}
                                >
                                    {info.icon}
                                </motion.div>
                                <div className="font-semibold text-mystic-gold text-sm uppercase tracking-wide line-clamp-2">
                                    {info.title}
                                </div>
                                <div className="text-gray-400 text-xs leading-snug">
                                    {info.info}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SECCIÓN 3: Redes Sociales Compactas */}
            <div className="space-y-4">
                <h3 className="font-serif text-xl md:text-2xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent uppercase tracking-wider">
                    🌟 Síguenos
                </h3>
                <div className="flex gap-3 justify-center md:justify-start">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.15, y: -5 }}
                            title={social.name}
                            className="group relative w-14 h-14 flex items-center justify-center rounded-xl border border-mystic-gold/40 bg-gradient-to-br from-purple-900/20 via-mystic-black to-transparent hover:border-mystic-gold/70 transition-all duration-300"
                        >
                            {/* Fondo con gradiente animado */}
                            <div className={`absolute -inset-1 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r ${social.color}`} />

                            <div className="relative text-white group-hover:scale-125 transition-transform">
                                {social.name === 'Instagram' && (
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                                    </svg>
                                )}
                                {social.name === 'Facebook' && (
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                )}
                                {social.name === 'TikTok' && (
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.82V9.4a8.05 8.05 0 0 0-8.37 8.4v4.29a4.83 4.83 0 0 0 6.8 4.44v-4.33a4.81 4.81 0 0 0 3.77-4.25V6.69z" />
                                    </svg>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* SECCIÓN 4: Garantía Premium Destacada */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="group relative overflow-hidden rounded-2xl p-6 border-2 border-mystic-gold/70 bg-gradient-to-br from-mystic-gold/20 via-purple-900/15 to-transparent"
            >
                {/* Glow effect animado */}
                <div className="absolute -inset-2 rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500 bg-gradient-to-r from-mystic-gold/50 to-purple-500/30" />

                <div className="relative">
                    <div className="flex items-start gap-4">
                        <motion.span
                            className="text-4xl flex-shrink-0"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ✨
                        </motion.span>
                        <div className="flex-1">
                            <h4 className="font-serif text-xl md:text-2xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent mb-2">
                                Primera Consulta Gratis
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                Recibe una <span className="text-mystic-gold font-semibold">consulta inicial exclusiva completamente sin costo</span>. Conoce cómo nuestras maestras pueden transformar tu vida.
                            </p>
                            <div className="pt-3 border-t border-mystic-gold/30">
                                <p className="text-xs text-mystic-gold/80 tracking-widest uppercase font-semibold">
                                    ✦ Confidencialidad Total • Resultados Garantizados ✦
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}