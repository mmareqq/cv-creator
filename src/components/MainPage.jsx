import { useState } from 'react';
import '../styles/MainPage.css';
import Preview from './Preview';
import Form from './Form';

function MainPage() {
  const [inputs, setInputs] = useState(
    new Map([
      ['firstName', ''],
      ['lastName', ''],
      ['targetJob', ''],
      ['email', ''],
      ['phoneNumber', ''],
      ['aboutInfo', ''],
    ]),
  );
  console.log(inputs);

  function changeInput(key, value) {
    setInputs((prevInputs) => {
      const newInputs = new Map(prevInputs);
      newInputs.set(key, value);
      return newInputs;
    });
  }
  return (
    <main className='main'>
      <div className='main__wrapper wrapper'>
        <Preview inputs={inputs} />

        <Form inputs={inputs} handleInputChange={changeInput} />
      </div>
    </main>
  );
}
export default MainPage;
