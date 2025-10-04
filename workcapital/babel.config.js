module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true, // Habilita o Server-Side Rendering
        displayName: true, // Ajuda na depuração, mostrando o nome do componente
      }
    ]
  ]
};