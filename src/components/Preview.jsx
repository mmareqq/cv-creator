function Preview({ inputs }) {
  const name = inputs.get('firstName');
  return (
    <>
      <div>
        <h2>Preview</h2>
        <p>{name}</p>
      </div>
    </>
  );
}
export default Preview;
