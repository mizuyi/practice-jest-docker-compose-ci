module.exports = {
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './test-result',
        filename: 'result.html'
      }
    ]
  ]
};
