import { useRef, useEffect } from "react";

const RainingLogo = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const logoSrc = "/logo-white.svg";
        const logoImg = new Image();
        logoImg.src = logoSrc;

        const logos: {
            rotationSpeed: number;
            angle: number; x: number; y: number; speed: number; size: number
        }[] = [];

        const createLogo = () => ({
            x: Math.random() * canvas.width,
            y: -50,
            speed: Math.random() * 2 + 0.5,
            size: Math.random() * 40 + 10,
            angle: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 0.5,
        });

        const update = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.02) {
                logos.push(createLogo());
            }

            for (let i = 0; i < logos.length; i++) {
                const logo = logos[i];
                logo.y += logo.speed;
                logo.angle += logo.rotationSpeed;

                if (logo.y > canvas.height) {
                    logos.splice(i, 1);
                    i--;
                } else {
                    ctx.save(); // Save current state

                    // Move to logo position
                    ctx.translate(logo.x + logo.size / 2, logo.y + logo.size / 2);
                    ctx.rotate((logo.angle * Math.PI) / 180); // Convert degrees to radians

                    // Draw rotated image (centered)
                    ctx.drawImage(logoImg, -logo.size / 2, -logo.size / 2, logo.size, logo.size);

                    ctx.restore(); // Restore canvas state
                }
            }

            requestAnimationFrame(update);
        };

        logoImg.onload = update;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
            <canvas ref={canvasRef} className="h-full w-full absolute left-0 top-0" />
        </div>
    );
};

export default RainingLogo;