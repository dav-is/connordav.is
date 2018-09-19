module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/projects': { page: '/', query: { selectedOption: 'projects' } },
      '/one': { page: '/', query: { selectedOption: 'one' } },
      '/two': { page: '/', query: { selectedOption: 'two' } },
      '/three': { page: '/', query: { selectedOption: 'three' } }
    }
  }
}