import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBurger } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className='font-taeback h-full flex justify-between items-center px-[32px] py-[20px] border border-b-[#e9e9e9e9] sticky top-0 z-20 bg-opacity-80 bg-white'>
            <div className='container'>
                <div className={styles.navbar}>
                    <a href="" className='hover:text-[#A855F7] hover:transition duration-200 text-xl'>
                        <p>J I W O O C H A E</p>
                    </a>
                    <ul className={`${styles.navbar_menu} ${menuOpen ? styles.menuOpen : ''}`}>
                        <li><Link to="homePage" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="myInfo" smooth={true} duration={500}>About me</Link></li>
                        <li><Link to="myProject" smooth={true} duration={500}>Project</Link></li>
                    </ul>
                </div>
                <a
                    href='#'
                    className={styles.navbar_icon}
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FontAwesomeIcon
                        icon={isHovered ? faBurger : faBars}
                        className={styles.icon}
                    />
                </a>
            </div>
        </header>
    );
}

export default Header;
