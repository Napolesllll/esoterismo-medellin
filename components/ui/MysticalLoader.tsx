'use client';

import { useState, useEffect } from 'react';

export default function MysticalLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simular progreso de carga
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const increment = Math.random() * 30;
                const newProgress = Math.min(prev + increment, 95);
                return newProgress;
            });
        }, 300);

        // Completar loading después de 2.5 segundos y desvanecerse
        const loadingTimeout = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
            }, 600);
        }, 2500);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(loadingTimeout);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-gradient-to-b from-mystic-black via-mystic-black to-purple-950 overflow-hidden transition-all duration-700 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Fondo con gradiente animado */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(198, 167, 94, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
            `,
                        animation: 'pulse 4s ease-in-out infinite',
                    }}
                />
            </div>

            {/* Partículas flotantes mágicas */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full blur-sm"
                        style={{
                            width: Math.random() * 200 + 50 + 'px',
                            height: Math.random() * 200 + 50 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            background: `radial-gradient(circle, ${i % 3 === 0
                                ? 'rgba(198, 167, 94, 0.15)'
                                : i % 3 === 1
                                    ? 'rgba(138, 43, 226, 0.15)'
                                    : 'rgba(100, 200, 255, 0.15)'
                                } 0%, transparent 70%)`,
                            animation: `mystical-float ${4 + i * 0.3}s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`,
                        }}
                    />
                ))}
            </div>

            {/* Contenedor central */}
            <div className="relative h-full flex flex-col items-center justify-center">
                {/* Mandala/Círculo místico giratorio */}
                <div className="mb-8 relative w-40 h-40">
                    {/* Círculo exterior giratorio */}
                    <div
                        className="absolute inset-0 rounded-full border-2 border-transparent"
                        style={{
                            borderTopColor: 'rgba(198, 167, 94, 0.8)',
                            borderRightColor: 'rgba(138, 43, 226, 0.6)',
                            animation: 'spin 8s linear infinite',
                        }}
                    />

                    {/* Segundo círculo */}
                    <div
                        className="absolute inset-4 rounded-full border-2 border-transparent"
                        style={{
                            borderTopColor: 'rgba(100, 200, 255, 0.6)',
                            borderLeftColor: 'rgba(198, 167, 94, 0.5)',
                            animation: 'spin 12s linear infinite reverse',
                        }}
                    />

                    {/* Tercer círculo */}
                    <div
                        className="absolute inset-8 rounded-full border border-mystic-gold/40"
                        style={{
                            animation: 'pulse-glow 2s ease-in-out infinite',
                        }}
                    />

                    {/* Centro con logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-16 h-16 object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 20px rgba(198, 167, 94, 0.8))',
                                animation: 'pulse 1.5s ease-in-out infinite',
                            }}
                        />
                    </div>

                    {/* Estrella flotante alrededor del centro */}
                    <div
                        className="absolute inset-0"
                        style={{
                            animation: 'mystical-orbit 6s linear infinite',
                        }}
                    >
                        <div
                            className="absolute w-2 h-2 bg-cyan-300 rounded-full"
                            style={{
                                top: '20%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                boxShadow: '0 0 10px rgba(100, 200, 255, 0.8)',
                            }}
                        />
                    </div>
                </div>

                {/* Texto místico */}
                <div className="text-center mb-12">
                    <h1
                        className="text-4xl md:text-5xl font-serif text-mystic-gold mb-4"
                        style={{
                            textShadow: '0 0 20px rgba(198, 167, 94, 0.6)',
                            animation: 'fade-in-out 3s ease-in-out infinite',
                        }}
                    >
                        Bienvenido
                    </h1>

                    {/* Mensajes místicos rotatorios */}
                    <div className="h-6 mb-4">
                        <p
                            className="text-sm md:text-base text-purple-300"
                            style={{
                                animation: 'text-rotate 6s ease-in-out infinite',
                            }}
                        >
                            Abriendo los portales del conocimiento...
                        </p>
                    </div>
                </div>

                {/* Barra de progreso mística */}
                <div className="w-64 md:w-80 mb-8">
                    <div className="relative h-1 bg-purple-900/50 rounded-full overflow-hidden border border-mystic-gold/30">
                        {/* Relleno con gradiente */}
                        <div
                            className="h-full bg-gradient-to-r from-mystic-gold via-purple-500 to-cyan-400 rounded-full transition-all duration-300"
                            style={{
                                width: `${progress}%`,
                                boxShadow: '0 0 20px rgba(198, 167, 94, 0.8)',
                            }}
                        />

                        {/* Brillo animado */}
                        <div
                            className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                            style={{
                                animation: 'shimmer 2s infinite',
                            }}
                        />
                    </div>

                    {/* Porcentaje */}
                    <div className="text-center mt-4">
                        <p className="text-mystic-gold text-sm font-light tracking-widest">
                            {Math.round(progress)}%
                        </p>
                    </div>
                </div>

                {/* Líneas mágicas decorativas */}
                <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 px-4">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="h-px bg-gradient-to-r from-transparent via-mystic-gold to-transparent"
                            style={{
                                width: 40 + i * 20 + 'px',
                                animation: `pulse-line 2s ease-in-out infinite`,
                                animationDelay: `${i * 0.2}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Partículas mágicas pequeñas */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-mystic-gold rounded-full"
                        style={{
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            opacity: Math.random() * 0.7 + 0.3,
                            animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
