import { useState } from 'react';
import '../styles/MainPage.css';
import Preview from './Preview';
import Form from './Form';

function MainPage() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    targetJob: '',
    email: '',
    phoneNumber: '',
    aboutInfo: '',
  });

  function updateInput(key, value) {
    setInputs((prevInputs) => ({ ...prevInputs, [key]: value }));
  }
  return (
    <main className='main'>
      <div className='main__wrapper wrapper'>
        <Preview inputs={inputs} />

        <Form inputs={inputs} updateInput={updateInput} />
      </div>
    </main>
  );
}
export default MainPage;
