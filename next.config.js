const { redirect } = require('next/dist/server/api-utils')

module.exports = {
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/\\.well-known/matrix/:path*',
        headers: [{ key: 'access-control-allow-origin', value: '*' }],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload;',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/\\.well-known/matrix/client.json',
        destination: '/.well-known/matrix/client',
        permanent: true,
      },
      {
        source: '/\\.well-known/matrix/server.json',
        destination: '/.well-known/matrix/server',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/\\.well-known/matrix/client',
        destination: '/.well-known/matrix/client.json',
      },
      {
        source: '/\\.well-known/matrix/server',
        destination: '/.well-known/matrix/server.json',
      },
    ]
  },
}
