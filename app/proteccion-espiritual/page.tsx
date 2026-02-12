import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceDetails from '@/components/services/ServiceDetails';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
    title: 'Protección Espiritual | Blindaje Energético en Colombia | Maestros del Misterio',
    description: 'Protección espiritual profesional contra maleficios, envidias y energías negativas. Escudos energéticos duraderos. Blindaje de hogares y negocios. Atención 24/7 en toda Colombia.',
    keywords: [
        'protección espiritual Colombia',
        'blindaje energético',
        'protección contra maleficios',
        'limpieza de mal de ojo',
        'protección del hogar',
        'escudo energético',
        'protección de negocio',
        'envidias y maleficios',
        'protección espiritual permanente',
        'limpieza energética',
    ],
    openGraph: {
        title: 'Protección Espiritual Total | Escudos Energéticos | Maestros del Misterio',
        description: 'Crea un escudo energético permanente contra energías negativas, maleficios y envidias. 99% de efectividad.',
    },
};

const proteccionDetails = {
    title: 'Protección Espiritual Absoluta',
    subtitle: 'Crea un blindaje energético impenetrable contra maleficios, envidias y energías negativas',
    icon: '/icoproteccion.png',
    description: 'La protección espiritual es tu defensa contra energías dañinas, maleficios, envidias y malas intenciones. Nuestro trabajo especializado crea escudos energéticos duraderos que actúan como un blindaje invisible, protegiéndote a ti, tu familia, tu hogar y tu negocio. Con técnicas ancestrales combinadas con poder espiritual moderno, creamos protecciones que repelen y transforman energías negativas.',
    types: [
        {
            name: 'Protección Personal',
            description: 'Escudo energético individual para ti. Te protege 24/7 contra influencias negativas.',
            duration: '21 días',
            effectiveness: '98%',
        },
        {
            name: 'Protección Familiar',
            description: 'Blindaje energético para toda la familia. Cubre el hogar y sus habitantes.',
            duration: '30 días',
            effectiveness: '99%',
        },
        {
            name: 'Protección del Hogar',
            description: 'Sella todas las entradas energéticas de tu casa. Crea un santuario sagrado inviolable.',
            duration: '9 días',
            effectiveness: '97%',
        },
        {
            name: 'Protección de Negocio',
            description: 'Protege tu empresa, tienda o emprendimiento contra comptetencia malintencionada y envidias.',
            duration: '21 días',
            effectiveness: '98%',
        },
        {
            name: 'Remoción de Maleficios',
            description: 'Identifica y remueve maleficios existentes. Limpia completamente energías dañinas instaladas.',
            duration: '15 días',
            effectiveness: '99%',
        },
        {
            name: 'Protección de Vehículo',
            description: 'Protege tu auto contra accidentes, averías malintencionadas y energías negativas en el camino.',
            duration: '7 días',
            effectiveness: '95%',
        },
    ],
    benefits: [
        'Protección constante 24/7 contra maleficios y energías negativas',
        'Remoción inmediata de envidias y malas intenciones dirigidas a ti',
        'Blindaje contra hechizos, maleficios y rituales oscuros',
        'Aumento de tu energía vital y vitalidad personal',
        'Paz mental y tranquilidad absoluta',
        'Protección de tu familia y seres queridos',
        'Escudos duraderos que se refuerzan con el tiempo',
        'Reversión de negatividad hacia quienes la envían',
        'Creación de un santuario sagrado en tu hogar',
        'Rechazo automático de invasores energéticos',
    ],
    process: [
        {
            step: 1,
            title: 'Diagnóstico Energético',
            description: 'Escaneamos tu energía para detectar presencia de maleficios, energías negativas o ataques espirituales.',
        },
        {
            step: 2,
            title: 'Selección de Ritual',
            description: 'Elegimos la protección más adecuada según tu situación específica y nivel de amenaza energética.',
        },
        {
            step: 3,
            title: 'Preparación Sagrada',
            description: 'Reunimos ingredientes sagrados y purificamos el espacio de trabajo con ceremonias ancestrales.',
        },
        {
            step: 4,
            title: 'Ritual de Blindaje',
            description: 'Ejecutamos el ritual en días y horas astrológicamente poderosos para máxima efectividad.',
        },
        {
            step: 5,
            title: 'Activación del Escudo',
            description: 'Activamos el escudo energético conectándolo a fuerzas protectoras universales y ancestrales.',
        },
        {
            step: 6,
            title: 'Mantenimiento Continuo',
            description: 'Realizamos refuerzos periódicos para asegurar que tu protección permanezca impenetrable.',
        },
    ],
    faqs: [
        {
            question: '¿Cuánto tiempo dura una protección espiritual?',
            answer: 'Una protección bien ejecutada dura indefinidamente si se mantiene correctament. Ofrecemos refuerzos cada 3-6 meses para asegurar que el escudo permanezca en su máxima potencia. Algunos clientes reportan que sus proyecciones se fortalecen con el tiempo.',
        },
        {
            question: '¿Cómo sé si estoy siendo atacado espiritualmente?',
            answer: 'Síntomas comunes incluyen: sueños perturbadores, fatiga sin causa, mala suerte constante, conflictos inesperados, pérdidas materiales, enfermedad sin diagnóstico, sensación de ser observado, depresión súbita. Si experimentas varios de estos síntomas, mereces protección inmediata.',
        },
        {
            question: '¿La protección afecta negativamente a quién la envía?',
            answer: 'No. Nuestra protección es defensiva, no ofensiva. Simplemente rechaza la negatividad y la transforma. Algunos clientes reportan que quienes intentaban hacerles daño experimentan cambios de corazón. Trabajamos con luz, no con venganza.',
        },
        {
            question: '¿Puedo proteger a mis hijos con esta protección?',
            answer: 'Absolutamente. Las protecciones familiares cubren específicamente a los menores. Los niños son particularmente vulnerables a energías negativas, así que ofrecemos protecciones especiales diseñadas para ellos.',
        },
        {
            question: '¿Necesito estar presente para el ritual?',
            answer: 'No. Realizamos rituales de protección a distancia usando tu nombre, foto y fecha de nacimiento. La conexión energética trasciende la distancia física. Muchos clientes nunca nos conocen en persona pero sienten el efecto inmediatamente.',
        },
        {
            question: '¿Puedo combinar protección con otros servicios?',
            answer: 'Sí. Muchos clientes combinan protección con amarres de amor, limpiezas energéticas o trabajos de prosperidad. Creamos paquetes integrados que maximizan los resultados.',
        },
        {
            question: '¿Funciona la protección contra envidia de amigos o familia?',
            answer: 'Sí, aunque se trate de personas cercanas. A veces la envidia viene de gente que nos quiere pero siente competencia o dolor. Nuestra protección actúa independientemente de la fuente.',
        },
        {
            question: '¿Qué pasa si el malefico sigue intentando dañarme?',
            answer: 'Con nuestro escudo en lugar, sus intentos se revierten. Muchos maleficios simplemente "rebotan" al remitente, causándoles a ellos las dificultades que intentaban crear para ti. Esto a menudo lleva al cese de los ataques.',
        },
    ],
};

export default function ProteccionPage() {
    return (
        <>
            <ServiceHero
                title={proteccionDetails.title}
                subtitle={proteccionDetails.subtitle}
                icon={proteccionDetails.icon}
                gradient="from-yellow-500/20 to-orange-500/20"
            />
            <ServiceDetails
                description={proteccionDetails.description}
                types={proteccionDetails.types}
                process={proteccionDetails.process}
            />
            <ServiceBenefits benefits={proteccionDetails.benefits} />
            <ServiceFAQ faqs={proteccionDetails.faqs} />
            <ServiceCTA
                title="¿Necesitas Protección Inmediata?"
                description="No esperes más. Crea tu escudo energético hoy y vive en paz sin temor a energías negativas. Tu tranquilidad es prioridad."
                service="protección espiritual"
            />
        </>
    );
}
