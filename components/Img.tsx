'use client';

// Img — componente de imagen para builds estáticos.
// Usa <img> nativo con lazy loading (next/image no optimiza en runtime
// con output:'export'); Unsplash ya sirve imágenes optimizadas por URL.

import { useEffect, useRef } from 'react';

interface ImgProps {
  src: string;
  alt: string;
  ratio?: string; // aspect-ratio CSS, ej '16/9', '4/3', '1/1'
  className?: string;
  priority?: boolean; // eager + no lazy para la hero
  sizes?: string;
}

export default function Img({
  src,
  alt,
  ratio,
  className = '',
  priority = false,
}: ImgProps) {
  const ref = useRef<HTMLImageElement>(null);

  // Efecto fade-in al cargar para un acabado suave
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.complete) {
      el.style.opacity = '1';
    }
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`img-fluid ${className}`}
      style={
        ratio
          ? { aspectRatio: ratio, objectFit: 'cover' }
          : { objectFit: 'cover' }
      }
      onLoad={(e) => {
        (e.currentTarget as HTMLImageElement).style.opacity = '1';
      }}
      draggable={false}
    />
  );
}
