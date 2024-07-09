/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Ensure CSS is handled properly on the server
      if (isServer) {
        config.externals = ['react', ...config.externals]
        config.module.rules.unshift({
          test: /globals\.css$/,
          use: 'null-loader',
        })
      }
      return config
    },
  }
  
  module.exports = nextConfig
