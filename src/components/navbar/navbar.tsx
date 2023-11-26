import classNames from 'classnames';
import styles from './navbar.module.scss';
import logo from '../../assets/LOGO/Logo.png';
export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className="image">
                <img src={logo} alt="website logo" className={styles['nav-img']} />
            </div>
            <div className={styles.navbar}>
                <nav className={classNames('navlinks', styles.root)}>
                    <li>Home</li>
                    <li>Lost Pets</li>
                    <li>Found Pets</li>
                    <li>Reunited Pets</li>
                    <li>Resources</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </nav>
            </div>
        </div>
    );
};
