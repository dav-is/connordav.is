module.exports = {
  async headers () {
    return [
      { source: '/\.well-known/matrix/:path*', headers: [{ key: 'access-control-allow-origin', value: '*' }] },
      { source: '/:path*', headers: [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload;' }] }
    ]
  }
}
