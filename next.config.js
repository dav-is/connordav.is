module.exports = {
  exportPathMap: async (defaultPathMap) => ({
    ...defaultPathMap,
    '/projects': { page: '/index', query: { option: 'projects' } },
    '/origin': { page: '/index', query: { option: 'origin' } },
    '/open-source': { page: '/index', query: { option: 'open-source' } },
    '/art': { page: '/index', query: { option: 'art' } }
  })
}
