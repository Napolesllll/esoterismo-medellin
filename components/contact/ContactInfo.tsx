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
            {/* Métodos de Contacto */}
            <div className="mystic-card p-8">
                <h3 className="font-serif text-xl mystic-glow-text mb-6">
                    Formas de Contacto
                </h3>
                <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.link}
                            target={method.link.startsWith('http') ? '_blank' : undefined}
                            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`block p-4 rounded-lg border transition-all duration-300 ${method.primary
                                    ? 'border-mystic-gold bg-mystic-gold/10 hover:bg-mystic-gold/20'
                                    : 'border-mystic-purple-light/30 hover:border-mystic-gold/50'
                                }`}
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="text-3xl flex-shrink-0">{method.icon}</div>
                                <div className="flex-grow">
                                    <div className="font-semibold text-mystic-gold mb-1">
                                        {method.title}
                                    </div>
                                    <div className="text-sm text-gray-400 mb-2">
                                        {method.description}
                                    </div>
                                    <div className="text-white font-medium">{method.value}</div>
                                </div>
                                {method.primary && (
                                    <div className="text-xs bg-mystic-gold text-mystic-black px-2 py-1 rounded-full font-semibold">
                                        Recomendado
                                    </div>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Horarios e Información */}
            <div className="mystic-card p-8">
                <h3 className="font-serif text-xl mystic-glow-text mb-6">
                    Información Adicional
                </h3>
                <div className="space-y-4">
                    {scheduleInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            className="flex items-start space-x-4 pb-4 border-b border-mystic-purple-light/30 last:border-b-0"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-2xl flex-shrink-0">{info.icon}</div>
                            <div>
                                <div className="text-mystic-gold font-semibold mb-1">
                                    {info.title}
                                </div>
                                <div className="text-gray-300">{info.info}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Redes Sociales */}
            <div className="mystic-card p-8">
                <h3 className="font-serif text-xl mystic-glow-text mb-6">
                    Síguenos en Redes
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center justify-center p-4 rounded-lg border border-mystic-purple-light/30 hover:border-mystic-gold/50 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-3xl mb-2">{social.icon}</div>
                            <div className="text-xs text-gray-400">{social.name}</div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Garantía */}
            <div className="mystic-card p-6 bg-mystic-gold/10 border-mystic-gold/50">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="text-2xl">✨</div>
                    <div className="font-semibold text-mystic-gold">
                        Primera Consulta Gratuita
                    </div>
                </div>
                <p className="text-sm text-gray-300">
                    Recibe una consulta inicial completamente gratis para conocer cómo podemos ayudarte.
                    Sin compromiso.
                </p>
            </div>
        </div>
    );
}