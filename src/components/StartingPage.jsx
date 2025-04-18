import '../styles/StartingPage.css';
import Button from './Button';

export default function StartingPage({ changeState }) {
  return (
    <main>
      <div className='starting-page__wrapper'>
        <h1 className='starting-page__title'>Create Your CV!</h1>
        <Button handleClick={() => changeState('running')} className='btn--primary'>
          Start
        </Button>
      </div>
    </main>
  );
}
