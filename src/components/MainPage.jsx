import { useState } from 'react';
import '../styles/MainPage.css';
import Preview from './Preview';
import Form from './Form';

function MainPage() {
  const [inputs, setInputs] = useState({
    personalData: [
      {
        id: 0,
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
        id: 0,
        proffesionTitle: '',
        schoolName: '',
        startDate: '',
        endDate: '',
        tillNow: false,
      },
    ],
    jobInfo: [
      {
        id: 0,
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

  function removeInstance(sectionName, id) {
    if (!sectionName || id === undefined) throw new Error('No section nor id provided');
    setInputs((prevInputs) => {
      const newSection = prevInputs[sectionName].filter((instance) => {
        return instance.id === id ? false : true;
      });

      return {
        ...prevInputs,
        [sectionName]: newSection,
      };
    });
  }

  function addInstance(section, instance) {
    if (!section) throw new Error('No section provided');
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [section]: [...prevInputs[section], instance],
      };
    });
  }

  function updateInput(field, value, category, catId = 0) {
    setInputs((prevInputs) => {
      if (category === 'personalData' && catId !== 0)
        throw new Error('Index for category wrongly specified');

      return {
        ...prevInputs,
        [category]: prevInputs[category].map((instance) => {
          return instance.id === catId ? { ...instance, [field]: value } : instance;
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
          removeInstance={removeInstance}
        />
      </div>
    </main>
  );
}
export default MainPage;
