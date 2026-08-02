import { Magnetometer } from 'expo-sensors';
import { useEffect, useRef, useState } from 'react';

export default function useDeviceHeading() {
  const [heading, setHeading] = useState<number | null>(null);
  const [isAvailable, setIsAvailable] = useState(false);

  // Smooth heading with Exponential Moving Average
  const smoothedHeading = useRef(0);
  const ALPHA = 0.15; // Lower = smoother, higher = more responsive

  useEffect(() => {
    let subscription: { remove: () => void } | null = null;
    let isMounted = true;

    async function init() {
      const available = await Magnetometer.isAvailableAsync();
      if (!isMounted) return;
      setIsAvailable(available);
      if (!available) return;

      Magnetometer.setUpdateInterval(50); // 20Hz for smooth tracking

      subscription = Magnetometer.addListener((data) => {
        if (!isMounted) return;

        // Convert magnetometer (x,y) to heading in degrees
        let { x, y } = data;
        let angle = Math.atan2(y, x) * (180 / Math.PI);

        // Adjust for phone orientation (portrait)
        angle = angle - 90;

        // Normalize to 0-360
        angle = (angle + 360) % 360;

        // Smooth the heading (EMA filter)
        let diff = angle - smoothedHeading.current;
        // Handle wrap-around (e.g., 359° → 1°)
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        smoothedHeading.current += ALPHA * diff;
        smoothedHeading.current = (smoothedHeading.current + 360) % 360;

        setHeading(smoothedHeading.current);
      });
    }

    init();
    return () => {
      isMounted = false;
      subscription?.remove();
    };
  }, []);

  return { heading, isAvailable };
}
