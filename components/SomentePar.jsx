export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;
  return <div>{numeroPar ? <span>{props.numero}</span> : null}</div>;
}

//Modo 1

/* if (props.numero % 2 === 0) {
  return <h1>{props.numero}</h1>;
} else {
  return null;
} */

//Modo 2
/* const numeroPar = props.numero % 2 === 0;
return numeroPar ? <span> {props.numero} </span> : null; */
