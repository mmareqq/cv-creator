import '../styles/Header.css';
import { CVIco } from '../assets/props/Icons';

function Header() {
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div href='#' className='logo-con'>
            <CVIco width='2em' height='2em' />
            <span className='title'>CV Creator</span>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
