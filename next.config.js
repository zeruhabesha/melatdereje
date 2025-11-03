/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode (recommended for development)
  reactStrictMode: true,
  
  // Experimental features
  experimental: {
    turbo: {
      rules: {
        // Add any module rules here if needed
      }
    },
    serverComponentsExternalPackages: ['@tremor/react']
  }
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
