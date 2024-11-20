import '../styles/Button.css';
export default function Button({ handleClick, children, ...props }) {
  return (
    <>
      <button type='button' onClick={handleClick} {...props}>
        {children}
      </button>
    </>
  );
}
