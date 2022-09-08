module.exports = function (api) {
  api.cache(true);

  // Presets implementados com o intuito de transpilar o código para testar os componentes utilizando Jest.
  const presets = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { targets: { node: 'current' } }],
    ['@babel/preset-flow', { targets: { node: 'current' } }],
  ];

  return {
    presets,
  };
};
