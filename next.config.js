/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'localhost','e9fc-2402-800-637d-71-f53e-72a2-a028-591e.ngrok-free.app'],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        config.resolve.extensionAlias = {
            '.js': ['.js', '.ts', '.tsx'],
          };
        return config;
    },
}

module.exports = nextConfig
