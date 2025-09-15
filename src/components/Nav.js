import { Link } from 'react-router-dom';
import catImg from '../assets/catpng.png';

function Nav() {

    return (
        <>
            <nav className='navbar'>
                <div className='nav-links'>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/'><img src={catImg} alt='home-kitty' className='nav-png' /></Link>
                    <Link to='/about'>About</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav