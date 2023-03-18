/** @type {import('next').NextConfig} */

const dotenv = require('dotenv')

dotenv.config()

const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: 'standalone',
}

module.exports = nextConfig
