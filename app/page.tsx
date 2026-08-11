// app/page.tsx
// Server Component que monta el SiteRouter. Toda la lógica de subdominios
// vive en el cliente porque el deploy es estático (output: export).
import SiteRouter from '@/components/SiteRouter';

export default function Page() {
  return <SiteRouter />;
}
