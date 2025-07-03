import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

declare global {
  interface Window {
    VANTA: any;
  }
}

const VantaBackground = ({ children }: { children?: React.ReactNode }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.FOG && vantaRef.current) {
      const effect = window.VANTA.FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x007BFF, // Ocean Blue
        midtoneColor: 0x00BFA6,   // Soft Teal
        lowlightColor: 0xFF6B6B,  // Sunset Coral
        baseColor: 0x000000,      // Deep background (optional)
        blurFactor: 0.9,
        speed: 2.5,
        zoom: 0.6,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: '100vw', height: '100vh', position: 'fixed', zIndex: -1 }}>
      {children}
    </div>
  );
};

export default VantaBackground;
