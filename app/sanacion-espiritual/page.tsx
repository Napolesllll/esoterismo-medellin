import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceDetails from '@/components/services/ServiceDetails';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
    title: 'Sanación Espiritual | Sanación Holística en Colombia | Maestros del Misterio',
    description: 'Sanación espiritual profunda para sanar traumas del pasado, equilibrar energía vital y encontrar paz interior. Terapia holística y espiritual completa. Resultados transformadores.',
    keywords: [
        'sanación espiritual Colombia',
        'sanación holística',
        'sanar traumas emocionales',
        'equilibrio energético',
        'paz interior',
        'sanación del pasado',
        'terapia espiritual',
        'energía vital',
        'sanación profunda',
        'bienestar integral',
    ],
    openGraph: {
        title: 'Sanación Espiritual | Paz Interior Total | Maestros del Misterio',
        description: 'Sana tu alma y encuentra paz profunda. Sanación integral de traumas, emociones y heridas del pasado.',
    },
};

const sanacionDetails = {
    title: 'Sanación Espiritual Integral',
    subtitle: 'Sana tu alma y encuentra paz interior profunda',
    icon: '🔯',
    description: 'La sanación espiritual es el proceso de sanar heridas del alma, traumas del pasado y desequilibrios energéticos. Trabajamos nivel por nivel: cuerpo, mente, emociones y espíritu. Removemos bloqueos kármicos, ciclos negativos recurrentes y patrones de dolor ancestral. El resultado es bienestar integral, paz profunda y una vida alineada con tu verdadera esencia.',
    types: [
        {
            name: 'Sanación de Traumas Emocionales',
            description: 'Sana heridas del corazón. Supera rechazos, abandonos y dolor emocional ancestral.',
            duration: '3-4 sesiones',
            effectiveness: '98%',
        },
        {
            name: 'Sanación del Cuerpo Energético',
            description: 'Equilibra chakras y repara ruptura energética. Restaura flujo de energía vital.',
            duration: '5-6 sesiones',
            effectiveness: '97%',
        },
        {
            name: 'Sanación Kármica',
            description: 'Resuelve deudas kármicas y ciclos de repetición. Liberate de patrones intergeneracionales.',
            duration: '7-8 sesiones',
            effectiveness: '99%',
        },
        {
            name: 'Sanación de Relaciones',
            description: 'Sana dinámicas tóxicas en relaciones. Restaura amor y conexión auténtica.',
            duration: '4-5 sesiones',
            effectiveness: '96%',
        },
        {
            name: 'Sanación de Autoestima',
            description: 'Reconstituye tu imagen personal. Supera creencias limitantes y recupera tu valor innato.',
            duration: '6-7 sesiones',
            effectiveness: '98%',
        },
        {
            name: 'Sanación Integral Total',
            description: 'Programa completo: cuerpo, mente, emociones, espíritu. Transformación de vida total.',
            duration: '10-12 sesiones',
            effectiveness: '99%',
        },
    ],
    benefits: [
        'Paz interior profunda y duradera',
        'Liberación de traumas emocionales',
        'Alivio del dolor físico relacionado al estrés',
        'Mejora dramática en relaciones interpersonales',
        'Autoestima y confianza renovadas',
        'Mayor claridad en propósito de vida',
        'Sueño reparador y profundo',
        'Estrés y ansiedad reducidos significativamente',
        'Energía vital aumentada',
        'Conexión plena con tu verdadero ser',
    ],
    process: [
        {
            step: 1,
            title: 'Evaluación Espiritual',
            description: 'Evaluamos tu historial energético, traumas identificados y raíces profundas del dolor.',
        },
        {
            step: 2,
            title: 'Plan de Sanación',
            description: 'Diseñamos ruta personalizada según severidad y naturaleza de traumas.',
        },
        {
            step: 3,
            title: 'Sesión de Limpieza',
            description: 'Primera sesión: removemos energía negativa y preparamos el terreno.',
        },
        {
            step: 4,
            title: 'Trabajo Profundo',
            description: 'Sesiones sucesivas: identificamos y sanamos capas de trauma acumulado.',
        },
        {
            step: 5,
            title: 'Reconfiguración Energética',
            description: 'Reajustamos tu estructura energética hacia bienestar y harmonia.',
        },
        {
            step: 6,
            title: 'Integración y Mantenimiento',
            description: 'Te enseñamos técnicas para integrar sanación y mantener paz alcanzada.',
        },
    ],
    faqs: [
        {
            question: '¿Duele la sanación emocional?',
            answer: 'Al liberar traumas, pueden aflorar emociones y recuerdos temporalmente. Esto es normal y necesario. Guiamos este proceso con compasión. Después reportan alivio comparado con dolor acumulado que cargaban.',
        },
        {
            question: '¿Cuántas sesiones necesito?',
            answer: 'Varía según traumas. Clientes simples: 3-4 sesiones. Traumas complejos: 8-12 sesiones. Evaluamos después de primera sesión. Mejor comprender nivel de sanación necesaria.',
        },
        {
            question: '¿Puedo hacer esto junto con terapia psicológica?',
            answer: 'Absolutamente sí. De hecho, recomendamos. Terapia psicológica trabaja mente; nosotras trabajamos espíritu y energía. Combinadas son infinitamente más efectivas. Se complementan perfecto.',
        },
        {
            question: '¿Los resultados son permanentes?',
            answer: 'La sanación profunda es permanente. Sin embargo, vida sigue trayendo desafíos. Recomendamos sesiones de refuerzo ocasionales y mantenimiento continuo con técnicas que enseñamos.',
        },
        {
            question: '¿Qué sucede si tengo traumas muy profundos?',
            answer: 'Traumas profundos requieren más sesiones y paciencia. Vamos lentamente, respetando tu ritmo. No forzamos revelaciones. Trabajamos compassivamente hasta raíces más profundas.',
        },
        {
            question: '¿Necesito creer en lo espiritual para que funcione?',
            answer: 'Ayuda, pero no es requisito. Muchos clientes escépticos llegan porque "nada más funcionó". La sanación actúa independiente de creencias intelectuales. El cuerpo y alma responden.',
        },
        {
            question: '¿Cómo trabajo con mi propia sanación entre sesiones?',
            answer: 'Teaching técnicas: meditación, visualización, conexión con energía, journaling emocional. Trabajo personal amplifica resultados. Clientes que participan activamente sanan 2-3x más rápido.',
        },
        {
            question: '¿Puedo hacer sesiones remotas desde otra ciudad?',
            answer: 'Sí, funciona igual. Nos conectamos energéticamente por video o incluso asincrónico. La sanación espiritual no tiene limitaciones geográficas. Muchos clientes internacionales.',
        },
    ],
};

export default function SanacionPage() {
    return (
        <>
            <ServiceHero
                title={sanacionDetails.title}
                subtitle={sanacionDetails.subtitle}
                icon={sanacionDetails.icon}
                gradient="from-green-500/20 to-emerald-500/20"
            />
            <ServiceDetails
                description={sanacionDetails.description}
                types={sanacionDetails.types}
                process={sanacionDetails.process}
            />
            <ServiceBenefits benefits={sanacionDetails.benefits} />
            <ServiceFAQ faqs={sanacionDetails.faqs} />
            <ServiceCTA
                title="¿Necesitas Sanar tu Alma?"
                description="No sigas cargando el peso del pasado. Comienza tu jornada de sanación profunda hoy mismo."
                service="sanación espiritual integral"
            />
        </>
    );
}
