import { useRef, useState } from 'react';

export default function TiltCard({ children, className }) {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Max rotation 12 degrees
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full ${isHovering ? 'transition-none' : 'transition-all duration-300 ease-out'} ${className || ''}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Use a wrapper that lifts up on Z-axis when tilted */}
            <div
                className="w-full h-full relative"
                style={{ transform: `translateZ(${isHovering ? '40px' : '0px'})`, transition: 'transform 0.3s ease-out' }}
            >
                {children}
            </div>
        </div>
    );
}
