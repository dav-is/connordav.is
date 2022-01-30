module.exports = {
  async rewrites () {
    return {
      beforeFiles: [
        {
          source: '/_matrix',
          destination: 'https://origin.connordav.is/'
        },
        {
          source: '/_matrix/:path*',
          destination: 'https://origin.connordav.is/:path*'
        }
      ]
    }
  }
}
