import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceDetails from '@/components/services/ServiceDetails';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
    title: 'Limpieza Energética | Purificación Espiritual en Colombia | Maestros del Misterio',
    description: 'Limpieza energética profesional para eliminar energías negativas. Purifica tu hogar, aura y espacio. Renueva tu energía vital y atrae prosperidad. Resultados visibles inmediatamente.',
    keywords: [
        'limpieza energética Colombia',
        'purificación espiritual',
        'limpiar hogar de energías negativas',
        'limpieza de aura',
        'desmantelar maleficios',
        'renovación energética',
        'purificación del espacio',
        'limpieza espiritual profunda',
        'energías negativas',
        'sanación energética',
    ],
    openGraph: {
        title: 'Limpieza Energética | Purificación Total | Maestros del Misterio',
        description: 'Elimina energías negativas y renueva tu vida. Limpieza profunda de hogar, aura y espacio vital.',
    },
};

const limpiezaDetails = {
    title: 'Limpieza Energética Profunda',
    subtitle: 'Elimina energías negativas y renueva tu aura completamente',
    icon: '✨',
    description: 'La limpieza energética es la purificación profunda de tu aura, tu hogar y tu espacio vital. Eliminamos capas de negatividad acumulada por años, maleficios residuales, energías de personas tóxicas y vibraciones que drenan tu vitalidad. Después de una limpieza profesional, experimentarás ligereza, claridad mental y una renovación total de tu energía vital.',
    types: [
        {
            name: 'Limpieza de Aura Personal',
            description: 'Purificación profunda de tu campo energético individual. Restaura tu brillo y vitalidad.',
            duration: '30 minutos',
            effectiveness: '96%',
        },
        {
            name: 'Limpieza del Hogar',
            description: 'Purifica completamente tu vivienda. Elimina energías negativas atrapadas en paredes y espacios.',
            duration: '2-3 horas',
            effectiveness: '98%',
        },
        {
            name: 'Limpieza de Lugar de Trabajo',
            description: 'Purifica tu oficina o negocio. Aumenta productividad y armonía laboral.',
            duration: '1-2 horas',
            effectiveness: '95%',
        },
        {
            name: 'Limpieza Post-Ruptura',
            description: 'Elimina energía de ex pareja. Cierra vínculos emocionales y comienza de nuevo.',
            duration: '45 minutos',
            effectiveness: '97%',
        },
        {
            name: 'Limpieza Familiar Integral',
            description: 'Purifica a todos los miembros de la familia y el hogar en una sesión completa.',
            duration: '3-4 horas',
            effectiveness: '99%',
        },
        {
            name: 'Limpieza de Vehículo',
            description: 'Purifica tu auto de energías negativas y crea un espacio seguro.',
            duration: '20 minutos',
            effectiveness: '94%',
        },
    ],
    benefits: [
        'Sentimiento inmediato de ligereza y paz',
        'Claridad mental y mejor enfoque',
        'Mayor energía y vitalidad diaria',
        'Mejora en relaciones personales',
        'Sueño más profundo y reparador',
        'Aumento en sincronías y oportunidades',
        'Aura radiante y luminosa',
        'Eliminación completa de maleficios antiguos',
        'Renovación del espacio vital',
        'Protección natural contra negatividad',
    ],
    process: [
        {
            step: 1,
            title: 'Diagnóstico Energético',
            description: 'Evaluamos tu campo energético para identificar bloqueos, traumas y energías negativas acumuladas.',
        },
        {
            step: 2,
            title: 'Preparación Ritual',
            description: 'Seleccionamos técnicas y materiales sagrados específicos para tu limpieza.',
        },
        {
            step: 3,
            title: 'Limpieza Profunda',
            description: 'Ejecutamos técnicas ancestrales de purificación layer by layer en tu aura.',
        },
        {
            step: 4,
            title: 'Sellado Protector',
            description: 'Sellamos tu aura con luz protectora para prevenir recontaminación.',
        },
        {
            step: 5,
            title: 'Activación de Luz',
            description: 'Llenamos tu espacio con vibraciones altas y energía luminosa positiva.',
        },
        {
            step: 6,
            title: 'Integración',
            description: 'Te guiamos en técnicas para mantener tu limpieza y elevar tu vibración.',
        },
    ],
    faqs: [
        {
            question: '¿Cuánto tiempo dura el efecto de una limpieza?',
            answer: 'Una limpieza profunda dura típicamente 3-6 meses. Para mantener los beneficios, recomendamos limpiezas de mantenimiento mensuales o trimestrales. Algunos clientes reportan que el efecto se vuelve más duradero con limpiezas regulares.',
        },
        {
            question: '¿Puedo limpiar mi hogar yo mismo?',
            answer: 'Sí, hay técnicas básicas que puedes hacer. Sin embargo, una limpieza profesional es mucho más profunda y efectiva. Nosotras contamos con años de experiencia y conexión con fuerzas spirituales especializadas.',
        },
        {
            question: '¿Qué se siente durante la limpieza?',
            answer: 'Algunos clientes sienten hormigueo, calor, frío o movimientos energéticos. Otros permanecen tranquilos. Después, típicamente reportan paz, ligereza y claridad. Cada persona es diferente.',
        },
        {
            question: '¿Necesito estar presente físicamente?',
            answer: 'Para limpiezas de aura, preferimos que estés presente o en video llamada. Para limpiezas de hogar, es ideal tu presencia aunque podemos hacerlo remotamente. La conexión energética funciona a distancia.',
        },
        {
            question: '¿La limpieza afecta cosas o personas en mi hogar?',
            answer: 'No. La limpieza profunda elimina energías densas sin afectar objetos o personas. De hecho, todos en el hogar suelen sentirse mejor después.',
        },
        {
            question: '¿Qué materiales usas en la limpieza?',
            answer: 'Usamos sal marina sagrada, hierbas purificadoras, cristales, sonido, luz y energía trabajada por nuestras maestras. Todo es natural y respetuoso del espacio.',
        },
        {
            question: '¿Debo hacer algo antes o después de la limpieza?',
            answer: 'Antes: relájate. Después: evita ambientes negativos 24 horas, toma baño con sal, medita. Esto sella los resultados mejor.',
        },
        {
            question: '¿Es necesario creer para que funcione?',
            answer: 'La energía existe independientemente de creencias. Dicho esto, la apertura y receptividad amplifica los resultados. Muchos escépticos reportan efectos tangibles incluso sin creencia inicial.',
        },
    ],
};

export default function LimpiezaPage() {
    return (
        <>
            <ServiceHero
                title={limpiezaDetails.title}
                subtitle={limpiezaDetails.subtitle}
                icon={limpiezaDetails.icon}
                gradient="from-blue-500/20 to-cyan-500/20"
            />
            <ServiceDetails
                description={limpiezaDetails.description}
                types={limpiezaDetails.types}
                process={limpiezaDetails.process}
            />
            <ServiceBenefits benefits={limpiezaDetails.benefits} />
            <ServiceFAQ faqs={limpiezaDetails.faqs} />
            <ServiceCTA
                title="¿Necesitas Purificación Urgente?"
                description="Libérate de energías negativas ahora. Experimenta la transformación de una limpieza profunda profesional."
                service="limpieza energética profunda"
            />
        </>
    );
}
