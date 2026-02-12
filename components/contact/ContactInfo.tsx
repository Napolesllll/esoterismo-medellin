'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/metadata';

export default function ContactInfo() {
    const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(
        /\+/g,
        ''
    )}?text=${encodeURIComponent(
        '¡Hola! Me gustaría información sobre sus servicios.'
    )}`;

    const socialLinks = [
        {
            name: 'Instagram',
            url: 'https://instagram.com/maestrasdelmisterio',
            color: 'from-purple-500 to-pink-500',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
            ),
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/maestrasdelmisterio',
            color: 'from-blue-500 to-blue-600',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
        {
            name: 'TikTok',
            url: 'https://tiktok.com/@maestrasdelmisterio',
            color: 'from-black to-pink-500',
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.82V9.4a8.05 8.05 0 0 0-8.37 8.4v4.29a4.83 4.83 0 0 0 6.8 4.44v-4.33a4.81 4.81 0 0 0 3.77-4.25V6.69z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="space-y-10">

            {/* CONTACTO PRINCIPAL */}
            <div className="space-y-6">
                <h3 className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent uppercase tracking-wider">
                    ✨ Atención Inmediata 24/7
                </h3>

                {/* WhatsApp limpio y coherente */}
                <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl p-6 border-2 border-mystic-gold bg-gradient-to-br from-mystic-gold/20 via-purple-900/15 to-transparent shadow-lg transition-all duration-300"
                >
                    <div className="relative flex items-center gap-4">
                        <div className="text-4xl">📱</div>

                        <div className="flex-1">
                            <div className="text-mystic-gold font-bold text-sm uppercase tracking-widest">
                                WhatsApp Directo
                            </div>
                            <div className="text-white text-lg font-semibold mt-1">
                                {siteConfig.whatsapp}
                            </div>
                            <div className="text-gray-300 text-sm mt-1">
                                Respuesta inmediata y confidencial
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <span className="text-xs bg-gradient-to-r from-mystic-gold to-purple-400 text-mystic-black px-3 py-1 rounded-full font-bold">
                                ⭐ RECOMENDADO
                            </span>
                            <span className="text-sm font-bold text-mystic-gold group-hover:translate-x-1 transition-transform">
                                Escribir Ahora →
                            </span>
                        </div>
                    </div>
                </motion.a>

                {/* Teléfono y Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                        href="tel:+573001234567"
                        className="rounded-xl p-4 border border-mystic-gold/40 bg-gradient-to-r from-purple-900/15 via-mystic-black to-transparent hover:border-mystic-gold/70 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-2xl">📞</div>
                            <div>
                                <div className="text-mystic-gold text-xs uppercase tracking-wide">
                                    Teléfono
                                </div>
                                <div className="text-white font-semibold">
                                    +57 300 123 4567
                                </div>
                            </div>
                        </div>
                    </a>

                    <a
                        href="mailto:contacto@maestrasdelmisterio.com"
                        className="rounded-xl p-4 border border-mystic-gold/40 bg-gradient-to-r from-purple-900/15 via-mystic-black to-transparent hover:border-mystic-gold/70 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-2xl">📧</div>
                            <div>
                                <div className="text-mystic-gold text-xs uppercase tracking-wide">
                                    Email
                                </div>
                                <div className="text-white font-semibold text-sm">
                                    contacto@maestrasdelmisterio.com
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* DETALLES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { icon: '🕐', title: 'Horario', info: '24 horas, 7 días a la semana' },
                    { icon: '📍', title: 'Ubicación', info: 'Medellín, Colombia' },
                    { icon: '🌎', title: 'Cobertura', info: 'Toda Colombia y Latinoamérica' },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="rounded-xl p-4 border border-mystic-gold/40 bg-gradient-to-br from-purple-900/15 via-mystic-black to-transparent text-center"
                    >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="text-mystic-gold font-semibold uppercase text-sm">
                            {item.title}
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                            {item.info}
                        </div>
                    </div>
                ))}
            </div>

            {/* GARANTÍA */}
            <div className="rounded-2xl p-6 border-2 border-mystic-gold bg-gradient-to-br from-mystic-gold/15 via-purple-900/15 to-transparent">
                <div className="flex gap-4">
                    <div className="text-4xl">✨</div>
                    <div>
                        <h4 className="font-serif text-xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent">
                            Primera Consulta Gratis
                        </h4>
                        <p className="text-gray-300 text-sm mt-2">
                            Recibe una consulta inicial completamente sin costo y descubre cómo nuestras maestras pueden ayudarte.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
