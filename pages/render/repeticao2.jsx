export default function Repeticao2() {
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
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>);
  }
  return <ul>{renderizarLista()}</ul>;
}
