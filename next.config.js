/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    REACT_APP_BACKEND_URL:"http://localhost:1337/api"
  }
}

module.exports = nextConfig
