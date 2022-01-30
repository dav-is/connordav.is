module.exports = {
  async rewrites () {
    return {
      beforeFiles: [
        {
          source: '/_matrix/?',
          destination: 'https://matrix.connordav.is/_matrix'
        },
        {
          source: '/_matrix/:path*',
          destination: 'https://matrix.connordav.is/_matrix/:path*'
        }
      ]
    }
  }
}
