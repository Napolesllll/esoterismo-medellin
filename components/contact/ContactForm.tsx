'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'general',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío (aquí integrarías tu backend o servicio de email)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage('¡Mensaje enviado! Te contactaremos pronto.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: 'general',
                message: '',
            });

            // Limpiar mensaje después de 5 segundos
            setTimeout(() => setSubmitMessage(''), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group"
            >
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3 tracking-wide">
                    <span className="text-mystic-gold">✦</span> Nombre Completo
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-gradient-to-br from-purple-900/20 to-mystic-black/50 border border-mystic-gold/30 group-focus-within:border-mystic-gold/70 rounded-xl focus:outline-none text-white placeholder-gray-500 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Tu nombre completo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold/0 via-mystic-gold/0 to-purple-500/0 group-focus-within:from-mystic-gold/10 group-focus-within:via-purple-500/5 group-focus-within:to-transparent rounded-xl pointer-events-none transition-all duration-300" />
                </div>
            </motion.div>

            {/* Email */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="group"
            >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3 tracking-wide">
                    <span className="text-mystic-gold">✦</span> Email
                </label>
                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-gradient-to-br from-purple-900/20 to-mystic-black/50 border border-mystic-gold/30 group-focus-within:border-mystic-gold/70 rounded-xl focus:outline-none text-white placeholder-gray-500 transition-all duration-300 backdrop-blur-sm"
                        placeholder="tu@email.com"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold/0 via-mystic-gold/0 to-purple-500/0 group-focus-within:from-mystic-gold/10 group-focus-within:via-purple-500/5 group-focus-within:to-transparent rounded-xl pointer-events-none transition-all duration-300" />
                </div>
            </motion.div>

            {/* Teléfono */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group"
            >
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3 tracking-wide">
                    <span className="text-mystic-gold">✦</span> Teléfono / WhatsApp
                </label>
                <div className="relative">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-gradient-to-br from-purple-900/20 to-mystic-black/50 border border-mystic-gold/30 group-focus-within:border-mystic-gold/70 rounded-xl focus:outline-none text-white placeholder-gray-500 transition-all duration-300 backdrop-blur-sm"
                        placeholder="+57 300 123 4567"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold/0 via-mystic-gold/0 to-purple-500/0 group-focus-within:from-mystic-gold/10 group-focus-within:via-purple-500/5 group-focus-within:to-transparent rounded-xl pointer-events-none transition-all duration-300" />
                </div>
            </motion.div>

            {/* Servicio */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="group"
            >
                <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-3 tracking-wide">
                    <span className="text-mystic-gold">✦</span> Servicio de Interés
                </label>
                <div className="relative">
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-gradient-to-br from-purple-900/20 to-mystic-black/50 border border-mystic-gold/30 group-focus-within:border-mystic-gold/70 rounded-xl focus:outline-none text-white placeholder-gray-500 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
                    >
                        <option value="general" className="bg-mystic-black text-white">
                            Consulta General
                        </option>
                        <option value="tarot" className="bg-mystic-black text-white">
                            Tarot Profesional
                        </option>
                        <option value="amarres" className="bg-mystic-black text-white">
                            Amarres de Amor
                        </option>
                        <option value="proteccion" className="bg-mystic-black text-white">
                            Protección Espiritual
                        </option>
                        <option value="limpieza" className="bg-mystic-black text-white">
                            Limpieza Energética
                        </option>
                        <option value="rituales" className="bg-mystic-black text-white">
                            Rituales Místicos
                        </option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-mystic-gold">
                        ▼
                    </div>
                </div>
            </motion.div>

            {/* Mensaje */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group"
            >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3 tracking-wide">
                    <span className="text-mystic-gold">✦</span> Tu Mensaje
                </label>
                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-gradient-to-br from-purple-900/20 to-mystic-black/50 border border-mystic-gold/30 group-focus-within:border-mystic-gold/70 rounded-xl focus:outline-none text-white placeholder-gray-500 resize-none transition-all duration-300 backdrop-blur-sm"
                        placeholder="Cuéntanos qué te inquieta..."
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold/0 via-mystic-gold/0 to-purple-500/0 group-focus-within:from-mystic-gold/10 group-focus-within:via-purple-500/5 group-focus-within:to-transparent rounded-xl pointer-events-none transition-all duration-300" />
                </div>
            </motion.div>

            {/* Mensaje de confirmación */}
            {submitMessage && (
                <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/50 rounded-xl p-4 text-green-400 text-center font-semibold flex items-center justify-center gap-2"
                >
                    <span className="text-xl">✓</span>
                    {submitMessage}
                </motion.div>
            )}

            {/* Botón Submit */}
            <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full group overflow-hidden py-4 rounded-xl font-semibold text-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {/* Fondo con gradiente animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold via-purple-500 to-mystic-gold bg-200% group-hover:bg-left-bottom transition-all duration-500 rounded-xl" />

                {/* Brillo superior */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Contenido */}
                <span className="relative text-mystic-black group-hover:text-white transition-colors z-10 flex items-center justify-center gap-2">
                    <motion.span
                        whileHover={{ rotate: 20 }}
                        transition={{ type: 'spring' }}
                    >
                        ✨
                    </motion.span>
                    {isSubmitting ? 'Conectando con lo infinito...' : 'Enviar Mensaje'}
                </span>

                {/* Efecto de pulso */}
                <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-20" />
            </motion.button>

            {/* Disclaimer elegante */}
            <p className="text-xs text-gray-500 text-center leading-relaxed">
                Al enviar este formulario aceptas nuestra <span className="text-mystic-gold/60">política de privacidad</span>.
                Tu información está protegida con máxima confidencialidad.
            </p>
        </form>
    );
}