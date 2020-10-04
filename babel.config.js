
module.exports = function (api) {
  const presets = [
    [
      '@babel/preset-env',
      {
        // "debug": true,
        "useBuiltIns": "usage",
        // "targets": {
        //   "ie": "11",
        //   "chrome": "latest"
        // }
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
      '@babel/proposal-class-properties',
      {
        'loose': false,
      },
    ],
    '@babel/proposal-export-namespace-from',
    '@babel/syntax-dynamic-import',
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
    '@babel/transform-literals',
    '@babel/transform-modules-commonjs',
    '@babel/transform-parameters',
    '@babel/transform-shorthand-properties',
    '@babel/transform-typeof-symbol',
    '@babel/transform-regenerator',
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
