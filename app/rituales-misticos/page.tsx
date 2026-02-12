import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceDetails from '@/components/services/ServiceDetails';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
    title: 'Rituales Místicos | Ceremonias Personalizadas en Colombia | Maestros del Misterio',
    description: 'Rituales místicos profesionales para atraer amor, dinero, salud y éxito. Ceremonias ancestrales personalizadas con ingredientes puros. Resultados potentes garantizados.',
    keywords: [
        'rituales místicos Colombia',
        'rituales de amor',
        'rituales de dinero',
        'rituales de prosperidad',
        'ceremonias espirituales',
        'rituales ancestrales',
        'magia blanca rituales',
        'rituales para éxito',
        'hechizos efectivos',
        'ceremonias sagradas',
    ],
    openGraph: {
        title: 'Rituales Místicos | Ceremonias Poderosas | Maestros del Misterio',
        description: 'Rituales únicos para transformar tu vida. Atraer amor, dinero, salud y éxito con ceremonias ancestrales.',
    },
};

const ritualesDetails = {
    title: 'Rituales Místicos Ancestrales',
    subtitle: 'Ceremonias poderosas para atraer lo que deseas a tu vida',
    icon: '🌙',
    description: 'Los rituales místicos son ceremonias sagradas que trabajan con fuerzas cósmicas y espirituales para manifestar tus deseos en la realidad física. Utilizamos técnicas ancestrales combinadas con ingredientes puros y naturales, realizadas en momentos astrológicamente poderosos para máxima efectividad. Cada ritual es altamente personalizado según tus circunstancias y metas específicas.',
    types: [
        {
            name: 'Ritual de Prosperidad',
            description: 'Atrae abundancia y dinero a tu vida. Abre puertas de oportunidades financieras.',
            duration: 'Trabajo de 21 días',
            effectiveness: '97%',
        },
        {
            name: 'Ritual de Amor Verdadero',
            description: 'Atrae tu pareja ideal o acerca la persona que amas. Amor auténtico y duradero.',
            duration: 'Trabajo de 30 días',
            effectiveness: '99%',
        },
        {
            name: 'Ritual de Salud y Vitalidad',
            description: 'Revitaliza tu cuerpo y mente. Elimina enfermedades y restablece tu bienestar.',
            duration: 'Trabajo de 21 días',
            effectiveness: '96%',
        },
        {
            name: 'Ritual de Éxito Profesional',
            description: 'Asciende en tu carrera. Abre puertas a oportunidades y reconocimiento laboral.',
            duration: 'Trabajo de 30 días',
            effectiveness: '98%',
        },
        {
            name: 'Ritual de Confianza y Valor',
            description: 'Desarrolla autoconfianza. Supera miedos y limitaciones personales.',
            duration: 'Trabajo de 15 días',
            effectiveness: '95%',
        },
        {
            name: 'Ritual Completo de Transformación',
            description: 'Ritual integral que toca todos los aspectos de tu vida: amor, dinero, salud, éxito.',
            duration: 'Trabajo de 40 días',
            effectiveness: '99%',
        },
    ],
    benefits: [
        'Manifestación concreta de tus objetivos',
        'Alineación cósmica con tus deseos',
        'Aumento exponencial de oportunidades',
        'Cambios visibles en 7-14 días',
        'Atracción magnética de lo que deseas',
        'Elevación de tu vibración personal',
        'Sincronías y coincidencias milagrosas',
        'Transformación profunda y duradera',
        'Poder personal aumentado',
        'Vida alineada con tu verdadero propósito',
    ],
    process: [
        {
            step: 1,
            title: 'Consulta de Intención',
            description: 'Conversamos sobre tus metas específicas y los obstáculos actuales.',
        },
        {
            step: 2,
            title: 'Diseño del Ritual',
            description: 'Creamos un ritual personalizado según tu situación, fecha astrológica ideal y energía.',
        },
        {
            step: 3,
            title: 'Recopilación de Ingredientes',
            description: 'Obtenemos hierbas, cristales, aceites y materiales sagrados específicos.',
        },
        {
            step: 4,
            title: 'Preparación Sagrada',
            description: 'Preparamos el espacio y nos conectamos con guías espirituales.',
        },
        {
            step: 5,
            title: 'Ejecución del Ritual',
            description: 'Realizamos el ritual en el momento astrológicamente más poderoso.',
        },
        {
            step: 6,
            title: 'Seguimiento Energético',
            description: 'Hacemos refuerzos periódicos durante los 21-40 días de activación del ritual.',
        },
    ],
    faqs: [
        {
            question: '¿Los rituales funcionan siempre?',
            answer: 'Los rituales tienen entre 95-99% de efectividad. El factor crucial es tu energía abierta y receptiva. Si luchas emocionalmente contra lo que pides, esto puede ralentizar manifestación. Los mejores resultados vienen de clientes que confían y colaboran.',
        },
        {
            question: '¿Cuándo empiezo a ver resultados?',
            answer: 'Muchos clientes notan cambios energéticos inmediatos (paz, claridad). Cambios concretos típicamente aparecen en días 7-21 del ritual. Manifestaciones mayores pueden tomar los 30-40 días completos.',
        },
        {
            question: '¿Necesito hacer algo de mi parte?',
            answer: 'Sí. El ritual abre puertas, pero tú debes estar listo para capturar oportunidades. Si buscas dinero, estate atento a negocios. Si buscas amor, colócate en posición de conocer gente. El ritual ayuda; tu acción cierra.',
        },
        {
            question: '¿De verdad funcionan los rituales o es placebo?',
            answer: 'Cualquier fenómeno repetible no es placebo. Miles de clientes reportan resultados específicos y medibles. La ciencia aún no entiende todo, pero los resultados son reales y documentados.',
        },
        {
            question: '¿Puedo solicitar un ritual para otra persona?',
            answer: 'Sí, aunque es más poderoso si la persona colabora conscientemente. Podemos hacer rituales por fuerza,  pero los mejores resultados vienen cuando ambas partes alineamos intención.',
        },
        {
            question: '¿Los rituales tienen efectos secundarios?',
            answer: 'Nuestros rituales de magia blanca no tienen efectos negativos. Algunos clientes experimentan "limpieza" inicial (sueños vívidos, emociones aflorando) mientras se genera espacio para lo nuevo.',
        },
        {
            question: '¿Cuál es la diferencia con hacer un ritual yo mismo?',
            answer: 'Enorme. Nuestras maestras tienen décadas de experiencia, conexión espiritual refinada y poder acumulado. Un ritual profesional es infinitamente más potente que intentar solo.',
        },
        {
            question: '¿Puedo combinar múltiples rituales?',
            answer: 'Sí, pero es mejor enfocar en uno principal y máximo dos. Demasiados rituales simultáneos dispersan la energía. Recomendamos completar uno antes de iniciar otro.',
        },
    ],
};

export default function RitualesPage() {
    return (
        <>
            <ServiceHero
                title={ritualesDetails.title}
                subtitle={ritualesDetails.subtitle}
                icon={ritualesDetails.icon}
                gradient="from-indigo-500/20 to-purple-500/20"
            />
            <ServiceDetails
                description={ritualesDetails.description}
                types={ritualesDetails.types}
                process={ritualesDetails.process}
            />
            <ServiceBenefits benefits={ritualesDetails.benefits} />
            <ServiceFAQ faqs={ritualesDetails.faqs} />
            <ServiceCTA
                title="¿Listo para Manifestar tu Destino?"
                description="Deja que la magia ancestral trabaje por ti. Rituales poderosos diseñados específicamente para tus metas."
                service="rituales místicos"
            />
        </>
    );
}
