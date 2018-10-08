module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/', query: { option: 'projects' } },
      '/projects/authenticity-platform': { page: '/projects/authenticity-platform' },
      '/origin': { page: '/', query: { option: 'origin' } },
      '/open-source': { page: '/', query: { option: 'open-source' } },
      '/art': { page: '/', query: { option: 'art' } }
    }
  }
}
