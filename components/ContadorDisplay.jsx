export default function ContadorDisplay(props) {
  return (
    <div
      style={{
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '25px',
        backgroundColor: '#222',
        color: '#fff',
      }}
    >
      {props.numero}
    </div>
  );
}
