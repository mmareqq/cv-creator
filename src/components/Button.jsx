import '../styles/Button.css';
export default function Button({ children, changeState }) {
  function handleClick() {
    changeState('running');
  }
  return (
    <>
      <button onClick={handleClick} className='btn--primary'>
        {children}
      </button>
    </>
  );
}
