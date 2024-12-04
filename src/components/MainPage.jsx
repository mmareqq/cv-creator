import { useState } from 'react';
import '../styles/MainPage.css';
import Preview from './Preview';
import Form from './Form';

function MainPage() {
  const example = {
    personalData: [
      {
        id: 0,
        firstName: 'Marek',
        lastName: 'Szlejter',
        email: 'szlejter.marek007@gmail.com',
        phoneNumber: '+48 592 423 243',
        address: 'Poland, Warsaw',
        aboutInfo:
          "I'm a programmer, like to build things and learn.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cupiditate?",
      },
    ],
    eduInfo: [
      {
        id: 0,
        fieldOfStudy: '',
        schoolName: '',
        startDate: '',
        endDate: '',
        tillNow: false,
      },
      {
        id: 1,
        fieldOfStudy: '',
        schoolName: '',
        startDate: '',
        endDate: '',
        tillNow: false,
      },
      {
        id: 2,
        fieldOfStudy: '',
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
    skills: [
      {
        id: 0,
        skillName: '',
      },
    ],
    clause: [
      {
        id: 0,
        includeClause: true,
        clauseContent:
          'Wyrażam zgodę na przetwarzanie moich danych osobowych przez (nazwa firmy) w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.',
      },
    ],
  };
  // const [inputs, setInputs] = useState({
  //   personalData: [
  //     {
  //       id: 0,
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       phoneNumber: '',
  //       address: '',
  //       aboutInfo: '',
  //     },
  //   ],
  //   eduInfo: [
  //     {
  //       id: 0,
  //       fieldOfStudy: '',
  //       schoolName: '',
  //       startDate: '',
  //       endDate: '',
  //       tillNow: false,
  //     },
  //   ],
  //   jobInfo: [
  //     {
  //       id: 0,
  //       jobPosition: '',
  //       companyName: '',
  //       city: '',
  //       startDate: '',
  //       endDate: '',
  //       tillNow: false,
  //       jobDescription: '',
  //     },
  //   ],
  //   skills: [
  //     {
  //       id: 0,
  //       skillName: '',
  //     },
  //   ],
  //   clause: [
  //     {
  //       id: 0,
  //       includeClause: true,
  //       clauseContent:
  //         'Wyrażam zgodę na przetwarzanie moich danych osobowych przez (nazwa firmy) w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.',
  //     },
  //   ],
  // });

  const [inputs, setInputs] = useState(example);

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
      <div className='main__wrapper'>
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
