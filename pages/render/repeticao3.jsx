export default function Repeticao3() {
  const listaAprovados = [
    'João',
    'Maria',
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Larissa',
  ];

  function renderizarLista() {
    return listaAprovados.map(function (nome, i) {
      return <li key={i}>{nome}</li>;
    });
  }
  return <ul>{renderizarLista()}</ul>;
}
