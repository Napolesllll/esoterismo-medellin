'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

const testimonials = [
    {
        name: 'María González',
        location: 'Medellín',
        service: 'Amarre de Amor',
        text: 'Después de 6 meses separados, mi pareja regresó a mi vida. El trabajo que hicieron fue increíble. Ahora somos más felices que nunca. ¡Totalmente recomendado!',
        rating: 5,
        avatar: '💝',
    },
    {
        name: 'Carlos Ruiz',
        location: 'Bogotá',
        service: 'Limpieza Energética',
        text: 'Sentía que todo me salía mal. Después de la limpieza, mi vida cambió por completo. Conseguí el trabajo que tanto anhelaba y mi salud mejoró notablemente.',
        rating: 5,
        avatar: '✨',
    },
    {
        name: 'Ana Martínez',
        location: 'Cali',
        service: 'Tarot Profesional',
        text: 'Las predicciones fueron exactas. Me ayudaron a tomar decisiones importantes en mi negocio y ahora estoy prosperando como nunca imaginé.',
        rating: 5,
        avatar: '🔮',
    },
    {
        name: 'Jorge López',
        location: 'Barranquilla',
        service: 'Protección Espiritual',
        text: 'Estaba siendo víctima de envidias y malas energías. El escudo de protección que me hicieron funciona perfectamente. Me siento seguro y en paz.',
        rating: 5,
        avatar: '🛡️',
    },
    {
        name: 'Laura Pérez',
        location: 'Cartagena',
        service: 'Ritual de Prosperidad',
        text: 'Mi economía estaba en crisis. Después del ritual, comenzaron a llegarme oportunidades increíbles. En 3 meses duplicó mis ingresos.',
        rating: 5,
        avatar: '💰',
    },
    {
        name: 'David Silva',
        location: 'Medellín',
        service: 'Sanación Espiritual',
        text: 'Cargaba traumas del pasado que no me dejaban avanzar. La sanación fue profunda y liberadora. Ahora vivo en paz y armonía.',
        rating: 5,
        avatar: '🌟',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonios" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="section-title">Testimonios Reales</h2>
                        <p className="section-subtitle">
                            Miles de personas han transformado sus vidas con nuestra ayuda
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className="mystic-card p-6 h-full flex flex-col"
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Stars */}
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.svg
                                            key={i}
                                            className="w-5 h-5 text-mystic-gold"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * i }}
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </motion.svg>
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-gray-300 mb-6 italic flex-grow leading-relaxed">
                                    &quot;{testimonial.text}&quot;
                                </p>

                                {/* Author */}
                                <div className="flex items-center space-x-3 border-t border-mystic-purple-light/30 pt-4">
                                    <div className="text-3xl">{testimonial.avatar}</div>
                                    <div>
                                        <div className="font-semibold text-mystic-gold">{testimonial.name}</div>
                                        <div className="text-sm text-gray-400">{testimonial.location}</div>
                                        <div className="text-xs text-mystic-gold-light">{testimonial.service}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Trust Indicators */}
                <FadeIn delay={0.4}>
                    <div className="max-w-4xl mx-auto">
                        <div className="mystic-card p-8 text-center">
                            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                                <div>
                                    <div className="text-4xl font-bold mystic-glow-text mb-2">10,000+</div>
                                    <div className="text-gray-400">Clientes Satisfechos</div>
                                </div>
                                <div className="hidden md:block w-px h-16 bg-mystic-purple-light/30" />
                                <div>
                                    <div className="text-4xl font-bold mystic-glow-text mb-2">98%</div>
                                    <div className="text-gray-400">Tasa de Éxito</div>
                                </div>
                                <div className="hidden md:block w-px h-16 bg-mystic-purple-light/30" />
                                <div>
                                    <div className="text-4xl font-bold mystic-glow-text mb-2">4.9/5</div>
                                    <div className="text-gray-400">Calificación Promedio</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}