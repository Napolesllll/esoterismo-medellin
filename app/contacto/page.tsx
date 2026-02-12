import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
    title: 'Contacto | Consulta Gratuita 24/7',
    description: 'Contáctanos ahora para tu consulta gratuita. Atención inmediata por WhatsApp, teléfono o formulario. Maestras del Misterio disponibles 24/7 en toda Colombia.',
    keywords: [
        'contacto maestras del misterio',
        'consulta gratuita tarot',
        'contacto servicios esotéricos',
        'whatsapp tarot Colombia',
        'consulta amarres',
    ],
};

export default function ContactoPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section Premium */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Fondo animado con múltiples capas mágicas */}
                <div className="absolute inset-0">
                    {/* Gradiente base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-mystic-black to-purple-950/20" />

                    {/* Orbs flotantes animados */}
                    <div
                        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-full blur-3xl"
                        style={{
                            animation: 'float-slow 8s ease-in-out infinite',
                        }}
                    />
                    <div
                        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-cyan-400/5 rounded-full blur-3xl"
                        style={{
                            animation: 'float-slow 10s ease-in-out infinite reverse',
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/5 via-purple-500/5 to-transparent rounded-full blur-3xl"
                        style={{
                            animation: 'float-slow 12s ease-in-out infinite',
                        }}
                    />
                </div>

                {/* Líneas decorativas animadas */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(198, 167, 94, 0.1)" />
                                <stop offset="50%" stopColor="rgba(138, 43, 226, 0.05)" />
                                <stop offset="100%" stopColor="rgba(100, 200, 255, 0.1)" />
                            </linearGradient>
                        </defs>
                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
                    </svg>
                </div>

                {/* Contenido */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        {/* Badge premium */}
                        <div className="inline-block mb-8">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold via-purple-500 to-mystic-gold rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300" />
                                <span className="relative px-6 py-2 bg-mystic-black rounded-full text-sm font-semibold text-mystic-gold tracking-widest uppercase">
                                    ✦ Consulta Gratuita ✦
                                </span>
                            </div>
                        </div>

                        {/* Título heroico */}
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            <span className="block bg-gradient-to-r from-mystic-gold via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                                Conecta con lo
                            </span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-purple-300 to-mystic-gold bg-clip-text text-transparent" style={{
                                animation: 'pulse 3s ease-in-out infinite',
                            }}>
                                Infinito
                            </span>
                        </h1>

                        {/* Subtítulo con efecto de escritura */}
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
                            Nuestras maestras expertas están aquí para guiarte hacia la transformación que deseas.
                            <span className="text-mystic-gold font-semibold"> Primera consulta completamente gratuita</span> y sin compromiso.
                        </p>

                        {/* Indicador de disponibilidad */}
                        <div className="flex items-center justify-center gap-3 mt-8">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-sm text-green-400 font-semibold tracking-wider">DISPONIBLES AHORA - 24/7</span>
                        </div>
                    </div>

                    {/* Grid de Contacto Premium */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
                        {/* Conexión visual entre cards */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-mystic-gold/30 to-transparent hidden md:block" />

                        {/* Contact Form Card */}
                        <div className="group relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/20 via-purple-500/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* Card */}
                            <div className="relative bg-gradient-to-br from-purple-900/20 via-mystic-black to-purple-950/20 backdrop-blur-2xl border border-mystic-gold/30 group-hover:border-mystic-gold/60 rounded-3xl p-8 md:p-10 transition-all duration-500">
                                {/* Decoración de esquina */}
                                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-mystic-gold/10 to-transparent rounded-full blur-xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="text-4xl">✉️</span>
                                        <h2 className="font-serif text-3xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent">
                                            Envía tu Consulta
                                        </h2>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-8">Cuéntanos qué te inquieta y recibe orientación personalizada de nuestras expertas</p>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Card */}
                        <div className="group relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-500/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* Card */}
                            <div className="relative bg-gradient-to-br from-purple-900/20 via-mystic-black to-purple-950/20 backdrop-blur-2xl border border-mystic-gold/30 group-hover:border-mystic-gold/60 rounded-3xl p-8 md:p-10 transition-all duration-500 space-y-8">
                                {/* Decoración de esquina */}
                                <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="text-4xl">🌟</span>
                                        <h2 className="font-serif text-3xl bg-gradient-to-r from-mystic-gold to-purple-300 bg-clip-text text-transparent">
                                            Contacto Directo
                                        </h2>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-8">Elige el medio que mejor se adapte a ti. Respuestas inmediatas garantizadas</p>
                                </div>
                                <ContactInfo />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partículas mágicas flotantes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
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
            </section>
        </div>
    );
}