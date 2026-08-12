/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir 'dist' para que Nixpacks (Coolify) encuentre el output estático.
  // Nixpacks espera dist/ por defecto en sitios estáticos; Next genera out/.
  distDir: 'dist',
  // Genera /cv/index.html para que nginx sirva main.gohost.one/cv directamente.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
