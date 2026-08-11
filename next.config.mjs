/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir 'dist' para que Nixpacks (Coolify) encuentre el output estático.
  // Nixpacks espera dist/ por defecto en sitios estáticos; Next genera out/.
  distDir: 'dist',
  reactStrictMode: true,
};

export default nextConfig;
