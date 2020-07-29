module.exports = {
  exportPathMap: async (defaultPathMap) => ({
    ...defaultPathMap,
    '/': { page: '/' },
    '/projects': { page: '/', query: { option: 'projects' } },
    '/origin': { page: '/', query: { option: 'origin' } },
    '/open-source': { page: '/', query: { option: 'open-source' } },
    '/art': { page: '/', query: { option: 'art' } }
  })
}
