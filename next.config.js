module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/', query: { selectedOption: 'projects' } },
      '/origin': { page: '/', query: { selectedOption: 'origin' } },
      '/open-source': { page: '/', query: { selectedOption: 'open-source' } },
      '/art': { page: '/', query: { selectedOption: 'art' } }
    }
  }
}
