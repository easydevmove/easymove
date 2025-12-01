"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function BudgetCard3D() {
    const [rotationY, setRotationY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentRotation, setCurrentRotation] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    const lastTimeRef = useRef<number>(0);

    // Auto-rotation animation (ultra slow - 120 seconds per full rotation)
    useEffect(() => {
        if (isDragging) return;

        const animate = (timestamp: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            const delta = timestamp - lastTimeRef.current;

            // Rotate 0.003 degrees per millisecond = 3 degrees per second = 120 seconds per full rotation
            setRotationY(prev => (prev + delta * 0.003) % 360);
            setCurrentRotation(prev => (prev + delta * 0.003) % 360);

            lastTimeRef.current = timestamp;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDragging]);

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setCurrentRotation(rotationY);
        if (cardRef.current) {
            cardRef.current.style.cursor = "grabbing";
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        // 1 pixel = 0.5 degree rotation
        const newRotation = (currentRotation + deltaX * 0.5) % 360;
        setRotationY(newRotation);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setCurrentRotation(rotationY);
        lastTimeRef.current = 0; // Reset timer for smooth animation restart
        if (cardRef.current) {
            cardRef.current.style.cursor = "grab";
        }
    };

    // Touch drag handlers for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setCurrentRotation(rotationY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;

        const deltaX = e.touches[0].clientX - startX;
        const newRotation = (currentRotation + deltaX * 0.5) % 360;
        setRotationY(newRotation);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        setCurrentRotation(rotationY);
        lastTimeRef.current = 0;
    };

    return (
        <div
            ref={cardRef}
            className="relative w-full max-w-[24rem] h-96 md:w-[34rem] md:h-[34rem] perspective-[1000px] cursor-grab select-none touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="relative w-full h-full transition-none drop-shadow-2xl"
                style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${rotationY}deg)`,
                }}
            >
                {/* Front side */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <Image
                        src="/videos/pdf_foto.png"
                        alt="Orçamento EasyMove - Frente"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Back side - same image */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <Image
                        src="/videos/pdf_foto.png"
                        alt="Orçamento EasyMove - Verso"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Hint text */}
            <div className="absolute bottom-0 left-0 right-0 text-center text-xs sm:text-sm text-muted-foreground opacity-70 pointer-events-none pb-2">
                {isDragging ? "↔️ Arraste para girar" : "👆 Clique e arraste para girar"}
            </div>
        </div>
    );
}
