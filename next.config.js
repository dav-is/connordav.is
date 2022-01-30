module.exports = {
  async rewrites () {
    return {
      beforeFiles: [
        {
          source: '/_matrix',
          destination: 'https://matrix.connordav.is/'
        },
        {
          source: '/_matrix/:path*',
          destination: 'https://matrix.connordav.is/:path*'
        }
      ]
    }
  }
}
