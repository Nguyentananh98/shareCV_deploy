/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 'localhost'],
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
