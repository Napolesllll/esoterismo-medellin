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
            {/* Hero Section */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="section-title mb-6">Contáctanos</h1>
                        <p className="section-subtitle mb-8">
                            Estamos disponibles 24/7 para ayudarte. Primera consulta completamente gratuita.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                        {/* Contact Form */}
                        <div className="mystic-card p-8">
                            <h2 className="font-serif text-2xl mystic-glow-text mb-6">
                                Envíanos un Mensaje
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div>
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Optional) */}
            <section className="py-20 bg-mystic-black-light/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="section-title mb-6">Nuestra Ubicación</h2>
                        <p className="text-gray-300 mb-8">
                            Medellín, Colombia - Atendemos en toda Colombia y Latinoamérica
                        </p>
                        <div className="mystic-card p-4 aspect-video bg-mystic-purple-light/20 flex items-center justify-center">
                            <p className="text-gray-400">
                                📍 Servicio disponible en toda Colombia
                                <br />
                                Consultas presenciales y virtuales
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}