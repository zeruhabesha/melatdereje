/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server components external packages
  serverExternalPackages: ['@tremor/react'],
  
  // Enable Turbopack with proper configuration
  experimental: {
    turbo: {
      rules: {
        // Add any module rules here if needed
      }
    }
  },
  
  // Enable React strict mode (recommended for development)
  reactStrictMode: true,
};

// Webpack configuration (fallback)
if (process.env.USE_WEBPACK === 'true') {
  nextConfig.webpack = (config, { isServer }) => {
    // Add rule for CSS files
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    });
    return config;
  };
}

module.exports = nextConfig;
