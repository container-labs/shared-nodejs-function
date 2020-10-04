
module.exports = function (api) {
  const presets = [
    [
      '@babel/preset-env',
      {
        "useBuiltIns": "usage",
        corejs: { version: 3, proposals: true }
      },
    ],
    '@babel/preset-flow',
  ];
  const plugins = [
    [
      '@babel/proposal-decorators',
      {
        'legacy': true
      }
    ],
    [
      '@babel/transform-destructuring',
      {
        'loose': true,
      },
    ],
    [
      '@babel/transform-spread',
      {
        'loose': true,
      },
    ],
    '@babel/transform-flow-strip-types',
    '@babel/transform-arrow-functions',
    '@babel/transform-computed-properties',
    // see if it works without
    // '@babel/transform-modules-commonjs',
    '@babel/transform-shorthand-properties',
    ['@babel/transform-classes', {
      'loose': true,
    }],
  ];

  api.cache(false);

  return {
    presets,
    plugins,
  };
};
