import { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceDetails from '@/components/services/ServiceDetails';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
    title: 'Amarres de Amor Efectivos en Colombia | Recupera a tu Pareja',
    description: 'Amarres de amor profesionales y efectivos en Medellín, Bogotá y toda Colombia. Recupera a tu ser amado, fortalece tu relación o atrae el amor verdadero. Resultados garantizados en 21 días.',
    keywords: [
        'amarres de amor Colombia',
        'amarres de amor efectivos',
        'amarres de amor Medellín',
        'amarres de amor Bogotá',
        'recuperar pareja',
        'unir parejas',
        'amarres rápidos',
        'endulzamientos',
        'dominio de amor',
    ],
    openGraph: {
        title: 'Amarres de Amor Efectivos | Maestras del Misterio',
        description: 'Recupera a tu ser amado con nuestros amarres profesionales. 98% de efectividad. Resultados en 21 días.',
    },
};

const amarresDetails = {
    title: 'Amarres de Amor Profesionales',
    subtitle: 'Recupera a tu ser amado y vive el amor que siempre soñaste',
    icon: '💝',
    description: 'Nuestros amarres de amor son rituales poderosos diseñados para unir corazones, recuperar parejas perdidas y fortalecer relaciones existentes. Con más de 20 años de experiencia, hemos ayudado a miles de personas a encontrar y mantener el amor verdadero.',
    types: [
        {
            name: 'Amarre Clásico',
            description: 'Ritual tradicional para unir dos almas. Ideal para recuperar a tu ex pareja.',
            duration: '21 días',
            effectiveness: '95%',
        },
        {
            name: 'Amarre con Foto',
            description: 'Utilizando fotografías para crear un vínculo energético más fuerte.',
            duration: '15 días',
            effectiveness: '98%',
        },
        {
            name: 'Amarre Eterno',
            description: 'El más poderoso. Crea una unión inquebrantable entre dos personas.',
            duration: '30 días',
            effectiveness: '99%',
        },
        {
            name: 'Endulzamiento',
            description: 'Ritual para mejorar el carácter de tu pareja y fortalecer la relación.',
            duration: '7 días',
            effectiveness: '90%',
        },
    ],
    benefits: [
        'Recupera a tu ex pareja sin importar el tiempo separados',
        'Fortalece y protege tu relación actual',
        'Elimina la influencia de terceras personas',
        'Aumenta el amor y la pasión en la relación',
        'Crea vínculos duraderos e inquebrantables',
        'Resultados visibles en las primeras semanas',
    ],
    process: [
        {
            step: 1,
            title: 'Consulta Inicial',
            description: 'Analizamos tu situación personal y determinamos el mejor ritual para ti.',
        },
        {
            step: 2,
            title: 'Preparación del Ritual',
            description: 'Reunimos los elementos necesarios y preparamos el espacio sagrado.',
        },
        {
            step: 3,
            title: 'Ejecución',
            description: 'Realizamos el amarre en días y horas astrológicamente favorables.',
        },
        {
            step: 4,
            title: 'Seguimiento',
            description: 'Te acompañamos durante todo el proceso y verificamos los resultados.',
        },
    ],
    faqs: [
        {
            question: '¿Cuánto tiempo tarda en hacer efecto un amarre?',
            answer: 'Los primeros signos suelen aparecer entre 7 y 21 días, dependiendo del tipo de amarre y las circunstancias específicas. Algunos clientes reportan cambios desde la primera semana.',
        },
        {
            question: '¿Los amarres de amor son seguros?',
            answer: 'Sí, trabajamos con energías positivas del amor universal. Nuestros amarres no causan daño y están diseñados para crear uniones basadas en el amor verdadero.',
        },
        {
            question: '¿Funcionan si la persona está con otra pareja?',
            answer: 'Sí, nuestros amarres son efectivos incluso en estas situaciones. El ritual trabaja en el plano energético para debilitar vínculos artificiales y fortalecer la conexión verdadera.',
        },
        {
            question: '¿Necesito la foto de la persona?',
            answer: 'Para algunos amarres sí, aunque tenemos rituales efectivos que solo requieren el nombre completo y fecha de nacimiento. En la consulta inicial determinamos qué necesitamos.',
        },
        {
            question: '¿Ofrecen garantía?',
            answer: 'Sí, todos nuestros amarres incluyen garantía de satisfacción. Si no ves resultados en el tiempo establecido, reforzamos el ritual sin costo adicional.',
        },
        {
            question: '¿Es confidencial el servicio?',
            answer: 'Absolutamente. Tu privacidad es sagrada para nosotras. Toda la información se maneja con total discreción y confidencialidad.',
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
                gradient="from-pink-500/20 to-red-500/20"
            />
            <ServiceDetails
                description={amarresDetails.description}
                types={amarresDetails.types}
                process={amarresDetails.process}
            />
            <ServiceBenefits benefits={amarresDetails.benefits} />
            <ServiceFAQ faqs={amarresDetails.faqs} />
            <ServiceCTA
                title="¿Lista para Recuperar a tu Ser Amado?"
                description="No pierdas más tiempo. Comienza hoy mismo tu transformación amorosa."
                service="amarres de amor"
            />
        </>
    );
}