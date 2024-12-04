import { EmailIco, PhoneIco, LocationIco, UniversityIco, CalendarIco } from '../assets/props/Icons';
import '../styles/Preview.css';

function Preview({ inputs }) {
  const personalData = inputs.personalData[0];
  const clause = inputs.clause[0];
  const { eduInfo, jobInfo, skills } = inputs;

  return (
    <div className='preview__section'>
      <h2 className='mt-5 mb-7'>Preview</h2>
      {/* <ul>
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
      </ul> */}
      <div className='preview bg-yellow-50/50'>
        <header className='preview__header bg-cyan-950 text-white p-4 pb-10'>
          <h1 className='preview__title text-center my-8'>Marek Szlejter</h1>

          <div className='flex gap-y-2 gap-x-7 flex-wrap justify-center w-11/12 mx-auto'>
            <div className='flex items-center'>
              <EmailIco width='28' height='28' />
              <span>szlejter.marek007@gmail.com</span>
            </div>
            <div className='flex items-center'>
              <PhoneIco width='32' height='32' />
              <span>+48 165 394 395</span>
            </div>

            <div className='text-center flex items-center justify-center'>
              <LocationIco width='32' height='32' />
              <span>Poland, Warsaw</span>
            </div>
          </div>

          <div className='about my-10 w-11/12 mx-auto text-white/75'>{personalData.aboutInfo}</div>
        </header>
        <div className='preview__section__edu'>
          <div className='mx-auto w-11/12 my-10'>
            <h2 className='mb-7 border-l-2 border-solid border-0 pl-4'>Education</h2>
            <div className='schools grid gap-8 ml-8'>
              {eduInfo.map((element) => {
                return (
                  <div key='element' className='school grid gap-2'>
                    <div className='text-blue-950 border-solid border-0 border-current border-l-2 pl-4 font-bold text-xl flex items-center'>
                      <UniversityIco width='28' height='28' />
                      {console.log(element)}
                      <span>{element.schoolName}asdf</span>
                    </div>
                    <span className='mx-14 font-bold'>2021/08 - 2023/12</span>
                    <div className='mx-14'>Technik Informatyk</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Preview;
