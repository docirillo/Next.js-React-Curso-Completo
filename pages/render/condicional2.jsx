import If from '../../components/If';
export default function condicional2() {
  const numero = 6;
  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1>O numero {numero} é par</h1>
      </If>
      <If teste={numero % 2 === 1}>
        <h1>O numero {numero} é ímpar</h1>
      </If>
    </div>
  );
}
