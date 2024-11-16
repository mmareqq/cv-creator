import '../styles/Preview.css';
function Preview({ inputs }) {
  return (
    <>
      <div>
        <h2>Preview</h2>
        <ul>
          {Object.entries(inputs).map(([section, inputSection]) => (
            <li key={section}>
              <h3>{section}</h3>
              <ul>
                {inputSection.map((inputSegment, index) => (
                  <li key={index}>
                    <ul>
                      {Object.entries(inputSegment).map(([key, value]) => (
                        <li key={key}>
                          {key}: {String(value)}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Preview;
