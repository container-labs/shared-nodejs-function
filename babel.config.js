
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
        // 'decoratorsBeforeExport': true,
        'legacy': true
      }
      // {
      //   'legacy': true,
      // },
    ],
    [
      '@babel/proposal-class-properties',
      {
        'loose': false,
      },
    ],
    '@babel/proposal-export-namespace-from',
    '@babel/syntax-dynamic-import',

    '@babel/proposal-json-strings',

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
    '@babel/transform-block-scoped-functions',
    '@babel/transform-block-scoping',
    '@babel/transform-computed-properties',
    '@babel/transform-function-name',
    '@babel/transform-literals',
    '@babel/transform-modules-commonjs',
    '@babel/transform-parameters',
    '@babel/transform-shorthand-properties',
    '@babel/transform-template-literals',
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
