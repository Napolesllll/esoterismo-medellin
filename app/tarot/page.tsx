import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceDetails from '@/components/services/ServiceDetails';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
    title: 'Tarot Profesional | Lecturas de Tarot Precisas en Colombia | Maestros del Misterio',
    description: 'Lecturas de tarot profesionales y precisas. Descubre tu futuro con nuestras maestras expertas. Interpretaciones detalladas, videncia clara y orientación espiritual. Consultas en línea y presenciales.',
    keywords: [
        'tarot profesional Colombia',
        'lecturas de tarot precisas',
        'tarot en Medellín',
        'tarot en Bogotá',
        'videncia tarot',
        'lectura de cartas',
        'tarot amor y dinero',
        'consulta tarot online',
        'tarot 24 horas',
        'maestras del tarot',
    ],
    openGraph: {
        title: 'Tarot Profesional | Revelaciones del Futuro | Maestros del Misterio',
        description: 'Descubre los secretos del futuro con lecturas de tarot precisas. Interpret tus cards por expertas con 20+ años.',
    },
};

const tarotDetails = {
    title: 'Tarot Profesional Preciso',
    subtitle: 'Descubre los secretos de tu futuro con nuestras maestras videntes',
    icon: '/icontarot.png',
    description: 'Nuestras lecturas de tarot profesionales utilizan las antiguas artes adivinatorias para revelar los misterios del pasado, presente y futuro. Con más de 20 años de experiencia interpretando los arcanos mayores y menores, nuestras maestras videntes te ofrecen revelaciones claras y precisas que transformarán tu comprensión de la vida.',
    types: [
        {
            name: 'Tirada de 3 Cartas',
            description: 'Pasado, Presente y Futuro. Ideal para preguntas específicas y orientación rápida.',
            duration: '20 minutos',
            effectiveness: '92%',
        },
        {
            name: 'Tirada de la Cruz Celta',
            description: 'Lectura profunda y detallada de 10 cartas. Analiza influencias externas e internas.',
            duration: '45 minutos',
            effectiveness: '97%',
        },
        {
            name: 'Lectura Amorosa',
            description: 'Especialmente diseñada para asuntos del corazón, relaciones y compatibilidad amorosa.',
            duration: '30 minutos',
            effectiveness: '96%',
        },
        {
            name: 'Tarot del Dinero y Prosperidad',
            description: 'Revela oportunidades financieras, inversiones favorables y caminos hacia la abundancia.',
            duration: '30 minutos',
            effectiveness: '94%',
        },
        {
            name: 'Lectura Anual Completa',
            description: 'Analysis profundo de todo el año: salud, amor, dinero, trabajo y crecimiento espiritual.',
            duration: '90 minutos',
            effectiveness: '99%',
        },
        {
            name: 'Tarot de Emergencia 24/7',
            description: 'Consulta urgente para momentos de crisis. Disponible a cualquier hora del día.',
            duration: '25 minutos',
            effectiveness: '89%',
        },
    ],
    benefits: [
        'Claridad total sobre tu situación actual y futura',
        'Revelaciones profundas de patrones en tu vida',
        'Identificación de oportunidades y riesgos próximos',
        'Guía espiritual para tomar decisiones importantes',
        'Comprensión de influencias kármicas y lecciones de vida',
        'Conocimiento sobre relaciones amorosas y profesionales',
        'Revelación de dones y talentos ocultos',
        'Predicciones exactas sobre eventos y cambios venieros',
    ],
    process: [
        {
            step: 1,
            title: 'Conexión Inicial',
            description: 'Nos conectamos energéticamente contigo. Compartes tu pregunta o situación específica.',
        },
        {
            step: 2,
            title: 'Ritual de Apertura',
            description: 'Preparamos el espacio sagrado e invocamos guías espirituales para una lectura clara.',
        },
        {
            step: 3,
            title: 'Tirada de Cartas',
            description: 'Realizamos la tirada según el tipo de lectura elegido. Cada carta revela información profunda.',
        },
        {
            step: 4,
            title: 'Interpretación Detallada',
            description: 'Analizamos cada carta y su posición, conectando significados con tu situación específica.',
        },
        {
            step: 5,
            title: 'Consejos y Orientación',
            description: 'Te proporcionamos guía práctica sobre los próximos pasos a tomar en tu vida.',
        },
        {
            step: 6,
            title: 'Reporte Escrito',
            description: 'Recibes un resumen escrito de la lectura para consultar cuando lo necesites.',
        },
    ],
    faqs: [
        {
            question: '¿Cuán precisas son las lecturas de tarot?',
            answer: 'Nuestras maestras tienen un promedio de precisión del 95-99% en sus lecturas. El tarot refleja energías presentes y patrones probables. Tu libre albedrío siempre influye en el resultado final, pero el tarot revela con precisión estas influencias y posibilidades.',
        },
        {
            question: '¿Puedo hacer una lectura sin estar presente físicamente?',
            answer: 'Absolutamente sí. Realizamos lecturas de tarot por video llamada, teléfono e incluso de forma remota enviándonos solo tu nombre y fecha de nacimiento. La energía no tiene limitaciones físicas.',
        },
        {
            question: '¿Necesito saber de tarot para entender la lectura?',
            answer: 'No es necesario. Nuestras maestras explican cada carta de forma clara y sencilla, adaptando el lenguaje a tu nivel de comprensión. Hacemos la lectura accesible y comprensible para todos.',
        },
        {
            question: '¿El tarot predice el futuro absolutamente?',
            answer: 'El tarot muestra tendencias, influencias y caminos probables basados en la energía actual. Tu libre albedrío permite cambiar el curso. Es una herramienta de guía, no de destino final.',
        },
        {
            question: '¿Cuándo se ven los resultados de una lectura?',
            answer: 'Muchas revelaciones se hacen evidentes inmediatamente después de la lectura. Cambios mayores típicamente se manifiestan en 21-90 días. Algunos eventos predichos ocurren en plazos específicos revelados en la lectura.',
        },
        {
            question: '¿Es el tarot algo religioso o esotérico?',
            answer: 'El tarot es una herramienta neutral de adivinación usada hace siglos por culturas de todo el mundo. Respetamos todas las creencias religiosas. Muchas personas de diferentes fe lo utilizan como herramienta de autoconocimiento.',
        },
        {
            question: '¿Puedo hacer lecturas sobre otras personas?',
            answer: 'Sí, podemos hacer lecturas sobre terceras personas (pareja, familia, negocios) siempre que proporciones su nombre y fecha de nacimiento. La lectura revela dinámicas energéticas y posibles desarrollos.',
        },
        {
            question: '¿Se pueden hacer relecturas o seguimientos?',
            answer: 'Sí. Ofrecemos lecturas de seguimiento después de 3-6 meses para verificar resultados y profundizar en nuevos aspectos. Esto maximiza el valor de tu Primera lectura inicial.',
        },
    ],
};

export default function TarotPage() {
    return (
        <>
            <ServiceHero
                title={tarotDetails.title}
                subtitle={tarotDetails.subtitle}
                icon={tarotDetails.icon}
                gradient="from-indigo-500/20 to-purple-500/20"
            />
            <ServiceDetails
                description={tarotDetails.description}
                types={tarotDetails.types}
                process={tarotDetails.process}
            />
            <ServiceBenefits benefits={tarotDetails.benefits} />
            <ServiceFAQ faqs={tarotDetails.faqs} />
            <ServiceCTA
                title="¿Listo para Descubrir tu Futuro?"
                description="Nuestras maestras videntes están esperando revelarte los secretos que transformarán tu vida. Primera lectura con análisis profundo."
                service="lectura de tarot profesional"
            />
        </>
    );
}
