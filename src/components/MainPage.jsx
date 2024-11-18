import { useState } from 'react';
import '../styles/MainPage.css';
import Preview from './Preview';
import Form from './Form';

function MainPage() {
  const [inputs, setInputs] = useState({
    personalData: [
      {
        firstName: '',
        lastName: '',
        targetJob: '',
        email: '',
        phoneNumber: '',
        aboutInfo: '',
      },
    ],
    eduInfo: [
      {
        proffesionTitle: '',
        schoolName: '',
        startDate: '',
        endDate: '',
        tillNow: true,
      },
    ],
    jobInfo: [
      {
        jobPosition: '',
        companyName: '',
        city: '',
        startDate: '',
        endDate: '',
        tillNow: false,
        jobDescription: '',
      },
    ],
  });
  console.log(inputs);
  function addInstance(section, instance) {
    setInputs((prevState) => {
      if (!section) throw new Error('No section provided');
      console.log('instance to be pushed: ', instance);
      return {
        ...prevState,
        [section]: [...prevState[section], instance],
      };
    });
  }

  function updateInput(field, value, section, sectionId = 0) {
    setInputs((prevState) => {
      if (section === 'personalData' && sectionId !== 0)
        throw new Error('Index for section wrongly specified');

      return {
        ...prevState,
        [section]: prevState[section].map((instance, instanceId) => {
          return instanceId === sectionId
            ? { ...instance, [field]: value }
            : instance;
        }),
      };
    });
  }
  return (
    <main className='main'>
      <div className='main__wrapper wrapper'>
        <Preview inputs={inputs} />

        <Form
          inputs={inputs}
          updateInput={updateInput}
          addInstance={addInstance}
        />
      </div>
    </main>
  );
}
export default MainPage;
