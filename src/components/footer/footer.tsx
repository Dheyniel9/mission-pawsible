import classNames from 'classnames';
import styles from './footer.module.scss';
import logo from '../../assets/LOGO/Logo.png';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['footer-main']}>
                <img src={logo} alt="website logo" className={styles['footer-img']} />
            </div>
            <div className={styles['second-main']}>
                <h5 className={styles['footer-text']}>CIIT College of Arts and Technology</h5>
                <div className={styles['social-meida']}>
                    <FaFacebook />
                    <FaInstagram />
                    <RiTwitterXFill />
                    <FaYoutube />
                </div>
            </div>
            <div>
                <h4 className={styles['h4-text-footer']}>
                    © 2023 Mission Pawsible - All Rights Reserved
                </h4>
            </div>
        </div>
    );
};
