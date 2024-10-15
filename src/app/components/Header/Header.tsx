
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
         <h2>Hamm<span>AD</span></h2>
         <ul>
           <Link href={"/"}><li>Home</li></Link>
            <Link href={"/about"}><li>About</li></Link> 
            <Link href={"/services"}><li>Services</li></Link>
            <Link href={"/feedback"}><li>Feedback</li></Link>
            <Link href={"/contact"}><li>Contact</li></Link>
         </ul>
    </header>
  );
};

export default Header;


