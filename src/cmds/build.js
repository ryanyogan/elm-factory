const defaults = require('../../src/defaults').build

module.exports = {
  name: 'build',
  command: 'build [options]',
  description: 'builds an elm-factory for production',
  options: {
    m: {
      alias: 'main',
      description: 'main entry file',
      default: defaults.main,
    },
    s: {
      alias: 'stylesheets',
      description: 'stylesheets entry file',
      default: defaults.stylesheets,
    },
    t: {
      alias: 'template',
      description: 'optional html template file',
      default: '',
    },
    o: {
      alias: 'output-path',
      description: 'output directory',
      default: defaults.outputPath,
    },
    p: {
      alias: 'public-path',
      description: 'absolute path for static assets',
      default: defaults.publicPath,
    },
  },
}
