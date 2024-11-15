import '../styles/Preview.css';
function Preview({ inputs }) {
  const inputsArr = Object.entries(inputs);
  return (
    <>
      <div>
        <h2>Preview</h2>
        <ul>
          {inputsArr.map(([key, value]) => (
            <li key={key}>
              {key}: {value || ''}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Preview;
