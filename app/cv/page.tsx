// app/cv/page.tsx
// Entrada física para que el export estático genere /cv/index.html.
// SiteRouter selecciona el CV solo en main.gohost.one/cv.
import SiteRouter from '@/components/SiteRouter';

export default function CVRoute() {
  return <SiteRouter />;
}
