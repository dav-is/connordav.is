module.exports = {
  async headers () {
    return [
      { source: '/:path*', headers: [{ key: 'access-control-allow-origin', value: 'https://app.element.io' }] },
      { source: '/:path*', headers: [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload;' }] }
    ]
  }
}
