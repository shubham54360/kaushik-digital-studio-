import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end inertia feel
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      // 150 offset centers the 300px wide radial gradient under the pointer
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-10 w-[300px] h-[300px] rounded-full blur-[100px] bg-[radial-gradient(circle,rgba(0,240,255,0.12)_0%,rgba(157,78,221,0.06)_50%,rgba(0,0,0,0)_100%)]"
      style={{
        left: springX,
        top: springY,
      }}
    />
  );
}
