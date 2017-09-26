module.exports = {
  presets: [['es2015', { loose: true, modules: false }], 'stage-0', 'react'],
  plugins: ['transform-decorators-legacy'],
  env: {
    production: {
      plugins: [
        'transform-react-remove-prop-types',
        'transform-react-constant-elements',
        'transform-react-inline-elements',
        'transform-runtime',
        'transform-decorators-legacy'
      ]
    },
    test: {
      plugins: ['transform-es2015-modules-commonjs']
    }
  }
};
