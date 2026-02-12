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
            {/* Métodos de Contacto - Premium */}
            <div className="space-y-4">
                <h3 className="font-serif text-2xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent mb-6">
                    Canales de Contacto
                </h3>
                <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.link}
                            target={method.link.startsWith('http') ? '_blank' : undefined}
                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`group relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 ${method.primary
                                ? 'border-mystic-gold/60 bg-gradient-to-br from-mystic-gold/20 via-purple-500/10 to-transparent'
                                : 'border-mystic-gold/30 bg-gradient-to-br from-purple-900/20 via-mystic-black to-transparent hover:border-mystic-gold/60'
                                }`}
                        >
                            {/* Glow effect */}
                            <div className={`absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300 ${method.primary ? 'bg-mystic-gold/20' : 'bg-purple-500/10'}`} />

                            <div className="relative flex items-start gap-4">
                                <motion.div
                                    className="text-4xl flex-shrink-0"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {method.icon}
                                </motion.div>
                                <div className="flex-grow">
                                    <div className="font-semibold text-mystic-gold mb-1 text-lg">
                                        {method.title}
                                    </div>
                                    <div className="text-sm text-gray-400 mb-3">
                                        {method.description}
                                    </div>
                                    <div className="text-white font-semibold group-hover:text-mystic-gold transition-colors">
                                        {method.value}
                                    </div>
                                </div>
                                {method.primary && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-xs bg-gradient-to-r from-mystic-gold to-purple-500 text-mystic-black px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                                    >
                                        ⭐ Rápido
                                    </motion.div>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Información Adicional Premium */}
            <div className="space-y-4 mt-8">
                <h3 className="font-serif text-2xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent mb-6">
                    Detalles de Servicio
                </h3>
                <div className="grid gap-4">
                    {scheduleInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl p-6 border border-mystic-gold/30 bg-gradient-to-br from-purple-900/20 via-mystic-black to-transparent hover:border-mystic-gold/60 transition-all duration-300"
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300 bg-mystic-gold/10" />

                            <div className="relative flex items-start gap-4">
                                <motion.div
                                    className="text-3xl flex-shrink-0"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    {info.icon}
                                </motion.div>
                                <div>
                                    <div className="text-mystic-gold font-semibold mb-2 group-hover:text-mystic-gold-light transition-colors">
                                        {info.title}
                                    </div>
                                    <div className="text-gray-300 text-sm">{info.info}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Redes Sociales Premium */}
            <div className="space-y-4 mt-8">
                <h3 className="font-serif text-2xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent mb-6">
                    Sigue Nuestro Camino
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="group relative overflow-hidden rounded-2xl p-6 border border-mystic-gold/30 bg-gradient-to-br from-purple-900/20 via-mystic-black to-transparent hover:border-mystic-gold/60 transition-all duration-300 flex flex-col items-center justify-center"
                        >
                            {/* Fondo con gradiente animado */}
                            <div className={`absolute -inset-1 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r ${social.color}`} />

                            <div className="relative text-4xl mb-2 group-hover:scale-125 transition-transform">
                                {social.icon}
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-mystic-gold text-center font-semibold transition-colors">
                                {social.name}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Garantía Premium */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="group relative mt-8 overflow-hidden rounded-2xl p-8 border-2 border-mystic-gold/60 bg-gradient-to-br from-mystic-gold/20 via-purple-900/20 to-transparent"
            >
                {/* Glow effect */}
                <div className="absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-mystic-gold/30 to-purple-500/20" />

                <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                        <motion.span
                            className="text-4xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ✨
                        </motion.span>
                        <h4 className="font-serif text-2xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent">
                            Primera Consulta
                        </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Recibe una <span className="text-mystic-gold font-semibold">consulta inicial de lujo completamente gratis</span>.
                        Conoce cómo nuestras maestras expertas pueden transformar tu vida. Sin compromiso, sin presiones.
                    </p>
                    <div className="mt-4 pt-4 border-t border-mystic-gold/30">
                        <p className="text-xs text-mystic-gold/70 tracking-wide uppercase">
                            ✦ Confidencialidad Total • Resultados Garantizados ✦
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}