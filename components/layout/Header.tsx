'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Inicio', href: '/', icon: '🏠' },
    { name: 'Servicios', href: '/#servicios', icon: '✨' },
    { name: 'Amarres', href: '/amarres', icon: '💓' },
    { name: 'Tarot', href: '/tarot', icon: '🔮' },
    { name: 'Protección', href: '/proteccion-espiritual', icon: '🛡️' },
    { name: 'Contacto', href: '/contacto', icon: '📱' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-mystic-black/90 backdrop-blur-xl shadow-mystic-card'
                    : 'bg-transparent'
            )}
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative h-10 md:h-12 w-auto"
                        >
                            <Image
                                src="/logo.png"
                                alt="Maestros del Misterio"
                                width={48}
                                height={48}
                                className="h-full w-auto"
                                priority
                            />
                        </motion.div>
                        <div className="hidden sm:block">
                            <div className="font-serif text-lg md:text-xl font-bold mystic-glow-text">
                                Maestros del Misterio
                            </div>
                            <div className="text-xs text-mystic-gold opacity-75">Servicios Esotéricos</div>
                        </div>
                    </Link>

                    {/* Menu Button - All Screens */}
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-mystic-gold hover:text-mystic-gold-light transition-colors"
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Premium Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Backdrop mágico */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            />

                            {/* Menu Container */}
                            <motion.div
                                initial={{ opacity: 0, y: -30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="absolute top-20 right-4 left-4 md:left-auto md:right-8 z-50 max-w-md origin-top"
                            >
                                {/* Efecto de brillo de fondo */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-mystic-gold/20 via-purple-500/10 to-cyan-400/10 rounded-3xl blur-2xl opacity-50" />

                                {/* Menú Principal */}
                                <motion.div
                                    className="relative bg-mystic-black/95 backdrop-blur-2xl border border-mystic-gold/30 rounded-3xl p-2 shadow-2xl overflow-hidden"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {/* Decoración interna con gradiente */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-mystic-gold/5 via-purple-900/5 to-transparent pointer-events-none rounded-3xl" />

                                    {/* Items con efecto luminoso */}
                                    <div className="relative space-y-1">
                                        {navigation.map((item, index) => (
                                            <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, x: -40 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -40 }}
                                                transition={{
                                                    delay: index * 0.06,
                                                    duration: 0.3,
                                                }}
                                                className="group"
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="relative overflow-hidden block px-6 py-4 rounded-2xl text-gray-300 hover:text-white transition-all duration-300 font-medium"
                                                >
                                                    {/* Fondo animado en hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold/0 via-mystic-gold/10 to-mystic-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                    {/* Borde inferior animado */}
                                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mystic-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

                                                    {/* Contenido */}
                                                    <div className="relative flex items-center gap-3 z-10">
                                                        <motion.span
                                                            className="text-xl"
                                                            whileHover={{ scale: 1.2, rotate: 15 }}
                                                            transition={{ type: 'spring', stiffness: 200 }}
                                                        >
                                                            {item.icon}
                                                        </motion.span>
                                                        <span className="bg-gradient-to-r from-gray-300 to-mystic-gold/70 group-hover:from-white group-hover:to-mystic-gold bg-clip-text text-transparent transition-all duration-300">
                                                            {item.name}
                                                        </span>
                                                        <motion.span
                                                            className="ml-auto text-mystic-gold opacity-0 group-hover:opacity-100 transition-opacity"
                                                            initial={{ x: -10 }}
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            →
                                                        </motion.span>
                                                    </div>

                                                    {/* Partículas mágicas en hover */}
                                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                        {[0, 1, 2].map((i) => (
                                                            <motion.div
                                                                key={i}
                                                                className="absolute w-1 h-1 bg-mystic-gold rounded-full"
                                                                style={{
                                                                    left: `${20 + i * 30}%`,
                                                                    top: '50%',
                                                                }}
                                                                initial={{ opacity: 0, y: 0 }}
                                                                animate={{
                                                                    opacity: [0, 1, 0],
                                                                    y: [-10, 0, 10],
                                                                }}
                                                                transition={{
                                                                    duration: 0.6,
                                                                    delay: i * 0.1,
                                                                    repeat: Infinity,
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Divisor mágico */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="my-4 mx-4"
                                    >
                                        <div className="relative h-1 bg-gradient-to-r from-transparent via-mystic-gold/50 to-transparent rounded-full overflow-hidden">
                                            <div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-mystic-gold to-transparent"
                                                style={{
                                                    animation: 'shimmer-menu 2s infinite',
                                                }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* CTA Button Mejorado */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ delay: 0.45 }}
                                        className="relative p-4"
                                    >
                                        <Link
                                            href="/contacto"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="relative group overflow-hidden block px-6 py-4 rounded-2xl font-semibold text-center transition-all duration-300"
                                        >
                                            {/* Fondo con gradiente animado */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-mystic-gold via-purple-500 to-mystic-gold bg-200% group-hover:bg-left-bottom transition-all duration-500 rounded-2xl" />

                                            {/* Brillo superior */}
                                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                            {/* Texto */}
                                            <span className="relative flex items-center justify-center gap-2 text-mystic-black group-hover:text-white transition-colors z-10">
                                                <motion.span
                                                    whileHover={{ rotate: 20 }}
                                                    transition={{ type: 'spring' }}
                                                >
                                                    ✨
                                                </motion.span>
                                                Consulta Gratuita
                                                <motion.span
                                                    initial={{ x: -5, opacity: 0 }}
                                                    whileHover={{ x: 5, opacity: 1 }}
                                                    transition={{ type: 'spring' }}
                                                >
                                                    →
                                                </motion.span>
                                            </span>

                                            {/* Efecto de pulso */}
                                            <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-center opacity-0 group-hover:opacity-20" />
                                        </Link>
                                    </motion.div>

                                    {/* Decoración de esquina mágica */}
                                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-mystic-gold/10 via-purple-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
                                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-cyan-400/5 via-mystic-gold/10 to-transparent rounded-full blur-lg pointer-events-none" />
                                </motion.div>

                                {/* Info adicional elegante */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-4 px-4 text-center"
                                >
                                    <p className="text-xs text-mystic-gold/60 tracking-widest uppercase font-light">
                                        ✦ Disponible 24/7 ✦
                                    </p>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}