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
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-mystic-black-light border border-mystic-purple-light/30 rounded-lg focus:outline-none focus:border-mystic-gold text-white"
                    placeholder="Tu nombre"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-mystic-black-light border border-mystic-purple-light/30 rounded-lg focus:outline-none focus:border-mystic-gold text-white"
                    placeholder="tu@email.com"
                />
            </div>

            {/* Teléfono */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono / WhatsApp *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-mystic-black-light border border-mystic-purple-light/30 rounded-lg focus:outline-none focus:border-mystic-gold text-white"
                    placeholder="+57 300 123 4567"
                />
            </div>

            {/* Servicio */}
            <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Servicio de Interés
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-mystic-black-light border border-mystic-purple-light/30 rounded-lg focus:outline-none focus:border-mystic-gold text-white"
                >
                    <option value="general">Consulta General</option>
                    <option value="tarot">Tarot Profesional</option>
                    <option value="amarres">Amarres de Amor</option>
                    <option value="proteccion">Protección Espiritual</option>
                    <option value="limpieza">Limpieza Energética</option>
                    <option value="rituales">Rituales Místicos</option>
                </select>
            </div>

            {/* Mensaje */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-mystic-black-light border border-mystic-purple-light/30 rounded-lg focus:outline-none focus:border-mystic-gold text-white resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                />
            </div>

            {/* Mensaje de confirmación */}
            {submitMessage && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-400 text-center"
                >
                    {submitMessage}
                </motion.div>
            )}

            {/* Botón Submit */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            <p className="text-sm text-gray-400 text-center">
                Al enviar este formulario aceptas nuestra política de privacidad.
            </p>
        </form>
    );
}