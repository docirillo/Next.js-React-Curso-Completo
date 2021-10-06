export default function Repeticao1() {
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
    const itens = [];

    for (let i = 0; i < listaAprovados.length; i++) {
      itens.push(<li key={i}>{listaAprovados[i]}</li>);
    }
    return itens;
  }
  return <ul>{renderizarLista()}</ul>;
}
