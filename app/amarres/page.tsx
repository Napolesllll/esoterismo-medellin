import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceDetails from '@/components/services/ServiceDetails';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
    title: 'Amarres de Amor | Rituales de Atracción Amorosa Garantizados | Maestros del Misterio',
    description: 'Amarres de amor poderosos y efectivos. Rituales comprobados para atraer y mantener el amor verdadero. Expertos en hechizos de atracción amorosa con 25+ años de experiencia. Resultados garantizados.',
    keywords: [
        'amarres de amor',
        'hechizo de amor efectivo',
        'ritual de atracción amorosa',
        'amarres en Colombia',
        'hechizo para conquistar',
        'atraer pareja amorosa',
        'ritual de vinculación amorosa',
        'amarre de retorno',
        'love spell',
        'atracción garantizada',
    ],
    openGraph: {
        title: 'Amarres de Amor | Rituales Poderosos | Maestros del Misterio',
        description: 'Amarres de amor efectivos con garantía de resultados. Rituales ancestrales para atraer y mantener el amor verdadero.',
    },
};

const amarresDetails = {
    title: 'Amarres de Amor Efectivos',
    subtitle: 'Rituales ancestrales para atraer y vincular el amor verdadero a tu vida',
    icon: '/iconamarres.png',
    description: 'Los amarres de amor son rituales ancestrales basados en la magia blanca que utilizan energías universales para atraer, vincular y mantener el amor verdadero. Con más de 25 años de experiencia en hechicería amorosa, nuestras maestras especializadas realizan amarres personalizados que resuenan con tu energía y la de tu ser amado, creando conexiones profundas y duraderas.',
    types: [
        {
            name: 'Amarre de Atracción Inmediata',
            description: 'Ritual rápido para atraer la atención y deseo de la persona deseada. Crea magnetismo irresistible.',
            duration: '30 minutos',
            effectiveness: '95%',
        },
        {
            name: 'Amarre de Vinculación Profunda',
            description: 'Ritual completo que vincula almas. Crea lazos emocionales y espirituales duraderos entre dos personas.',
            duration: '90 minutos',
            effectiveness: '98%',
        },
        {
            name: 'Amarre de Retorno de Pareja',
            description: 'Especializado para traer de regreso a parejas que se han alejado. Reaviva pasión y reconnexión.',
            duration: '60 minutos',
            effectiveness: '96%',
        },
        {
            name: 'Amarre de Fidelidad Garantizada',
            description: 'Ritual poderoso que asegura lealtad y exclusividad en la relación. Evita infidelidades.',
            duration: '45 minutos',
            effectiveness: '97%',
        },
        {
            name: 'Amarre de Matrimonio y Unión',
            description: 'Ritual ancestral para llevar la relación al compromiso matrimonial y unión eterna.',
            duration: '120 minutos',
            effectiveness: '99%',
        },
        {
            name: 'Amarre de Pasión Intensa',
            description: 'Ritual erótico que enciende la llama pasional. Aumenta deseo y atracción física al máximo.',
            duration: '45 minutos',
            effectiveness: '94%',
        },
    ],
    benefits: [
        'Atracción irresistible hacia ti de la persona deseada',
        'Creación de vínculos emocionales profundos y permanentes',
        'Eliminación de obstáculos en la relación amorosa',
        'Aumento exponencial de pasión y deseo físico',
        'Garantía de fidelidad y exclusividad en la pareja',
        'Retorno de ex parejas que se han alejado',
        'Apertura del camino hacia matrimonio y compromiso',
        'Protección del amor contra interferencias externas',
    ],
    process: [
        {
            step: 1,
            title: 'Consulta Energética Inicial',
            description: 'Analizamos tu situación amorosa actual y conectamos con la energía de ambas personas involucradas.',
        },
        {
            step: 2,
            title: 'Selección del Ritual Personalizado',
            description: 'Definimos el tipo de amarre más efectivo según tu objetivo específico y compatibilidad astral.',
        },
        {
            step: 3,
            title: 'Preparación del Espacio Sagrado',
            description: 'Purificamos y preparamos el espacio ritual con elementos especiales (velas, hierbas, cristales).',
        },
        {
            step: 4,
            title: 'Realización del Amarre',
            description: 'Ejecutamos el ritual ancestral canalizando tu nombre y energía con símbolos sagrados poderosos.',
        },
        {
            step: 5,
            title: 'Vinculación Energética',
            description: 'Completamos la conexión entre tu energía y la de tu ser amado en el plano espiritual.',
        },
        {
            step: 6,
            title: 'Seguimiento y Refuerzo',
            description: 'Realizamos refuerzos periódicos para mantener y fortalecer el amarre a lo largo del tiempo.',
        },
    ],
    faqs: [
        {
            question: '¿Funcionan realmente los amarres de amor?',
            answer: 'Sí, absolutamente. Los amarres de amor están basados en leyes de la atracción y magia blanca universal. Nuestro promedio de efectividad es del 95-99%. Funcionan modificando las energías amorosas y creando una resonancia magnética entre dos personas.',
        },
        {
            question: '¿Es magia negra o tiene efectos secundarios?',
            answer: 'No. Usamos exclusivamente magia blanca basada en energías universales positivas. No hay maldiciones ni daño. Los efectos son puramente de atracción y vinculación amorosa natural.',
        },
        {
            question: '¿Cuánto tiempo tarda en funcionar un amarre?',
            answer: 'Los resultados comienzan a manifestarse entre 3-7 días. Cambios mayores se ven en 21-45 días. Algunos amarres muestran efectos inmediatos dependiendo de la receptividad energética de ambas personas.',
        },
        {
            question: '¿El amarre respeta el libre albedrío de la otra persona?',
            answer: 'Sí. El amarre despierta sentimientos y atracción que ya existen potencialmente. No fuerza voluntades, sino que abre puertas. La otra persona mantiene su libre albedrío en todo momento.',
        },
        {
            question: '¿Necesitas datos personales de ambas personas?',
            answer: 'Necesitamos nombres completos y fechas de nacimiento (de ambas personas idealmente). Esto crea una conexión energética precisa para el ritual. A mayor información, más poderoso el amarre.',
        },
        {
            question: '¿Se puede hacer un amarre sin que la otra persona lo sepa?',
            answer: 'Sí, es completamente posible. El amarre funciona a nivel energético y no requiere consentimiento consciente. La otra persona simplemente comenzará a sentir una atracción natural e irresistible hacia ti.',
        },
        {
            question: '¿Qué pasa si el amarre no funciona?',
            answer: 'Ofrecemos garantía. Si no hay resultados en 45 días, realizamos un refuerzo gratuito. Si el amarre no funciona después de dos refuerzos, devolvemos tu dinero completamente.',
        },
        {
            question: '¿Cuánto dura el efecto de un amarre?',
            answer: 'Un amarre bien hecho es permanente. Sin embargo, recomendamos refuerzos cada 3-6 meses para mantener su potencia máxima, especialmente en relaciones complejas.',
        },
    ],
};

export default function AmarresPage() {
    return (
        <>
            <ServiceHero
                title={amarresDetails.title}
                subtitle={amarresDetails.subtitle}
                icon={amarresDetails.icon}
                gradient="from-red-500/20 to-pink-500/20"
            />
            <ServiceDetails
                description={amarresDetails.description}
                types={amarresDetails.types}
                process={amarresDetails.process}
            />
            <ServiceBenefits benefits={amarresDetails.benefits} />
            <ServiceFAQ faqs={amarresDetails.faqs} />
            <ServiceCTA
                title="¿Listo para Atraer el Amor que Mereces?"
                description="Nuestras maestras expertas están listos para realizar tu amarre personalizado. Resultados garantizados con la magia blanca más poderosa."
                service="amarre de amor effectivo"
            />
        </>
    );
}