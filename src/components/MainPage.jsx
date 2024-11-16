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
        tillNow: false,
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

  function updateInput(section, field, value) {
    setInputs((prevState) => {
      if (section === 'personalData' && sectionIndex !== 0)
        throw new Error('Index for section wrongly specified');
      return {
        ...prevState,
        [section]: prevState[section].map((item) => {
          item[field] !== undefined ? { ...item, [field]: value } : item;
        }),
      };
    });
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
