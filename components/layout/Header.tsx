'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Amarres', href: '/amarres' },
    { name: 'Tarot', href: '/tarot' },
    { name: 'Protección', href: '/proteccion-espiritual' },
    { name: 'Contacto', href: '/contacto' },
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
                                Maestros del Misteriooo
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
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="mt-6 mb-4"
                        >
                            <motion.div
                                className="mystic-card p-8 space-y-2"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {navigation.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block px-4 py-3 rounded-lg text-gray-300 hover:text-mystic-gold hover:bg-mystic-purple-light/20 transition-all duration-200 font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Divider */}
                                <div className="my-4 h-px bg-gradient-to-r from-transparent via-mystic-gold/30 to-transparent" />

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Link
                                        href="/contacto"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block btn-primary text-center py-3 rounded-full font-semibold"
                                    >
                                        Consulta Gratuita
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}