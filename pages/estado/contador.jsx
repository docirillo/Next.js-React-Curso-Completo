import { useState } from 'react';
import ContadorDisplay from '../../components/ContadorDisplay';

export default function Contador() {
  const [numero, setNumero] = useState(0);

  function inc() {
    setNumero(numero + 1);
  }

  const dec = () => setNumero(numero - 1);

  return (
    <div>
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <div>Valor: {numero}</div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
}
