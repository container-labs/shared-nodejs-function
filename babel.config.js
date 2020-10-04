
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
    // when is this in node
    '@babel/transform-arrow-functions',
    // when is this in node
    '@babel/transform-shorthand-properties',
    // if we do this, however this is packed is how it behaves
    // it doesn't respect dev/test downstream
    // if we set it downstream, we'll still want it transpiled
    // and I don't think we transpile node modules
    // TL;DR, include for now, check api transpiled code, remove if okay
    'transform-inline-environment-variables',
  ];

  api.cache(false);

  return {
    presets,
    plugins,
  };
};
