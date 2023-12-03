import classNames from 'classnames';
import styles from './petdetail.module.scss';
import dog from '../../assets/Mission-image/dog1.png';
import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';

export interface PetdetailProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Petdetail = ({ className }: PetdetailProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <div className={styles['main-container']}>
                    <div className={styles['left-content']}>
                        <div>
                            <img src={dog} alt="detail dog" width={380} />
                        </div>
                        <div className={styles['social-icon']}>
                            <IoShareSocialOutline style={{ height: 25, width: 25 }} />
                            <FaFacebook style={{ height: 25, width: 25 }} />
                            <RiTwitterXFill style={{ height: 25, width: 25 }} />
                            <FaInstagram style={{ height: 25, width: 25 }} />
                        </div>
                    </div>
                    <div className={styles['right-content']}>
                        <div className={styles['right-header']}>
                            <h2>Shiba Inu Sepia</h2>
                            <button className={styles['chat-btn']}>Chat with the person</button>
                        </div>

                        <div className={styles['right-details']}>
                            <div>
                                <h4>Gender</h4>
                            </div>
                            <div>
                                <h4>: Female</h4>
                            </div>
                        </div>
                        <div className={styles['right-details']}>
                            <div>
                                <h4>Type</h4>
                            </div>
                            <div>
                                <h4>: Dog</h4>
                            </div>
                        </div>
                        <div className={styles['right-details']}>
                            <div>
                                <h4>Size</h4>
                            </div>
                            <div>
                                <h4>: Small</h4>
                            </div>
                        </div>
                        <div className={styles['right-details']}>
                            <div>
                                <h4>Color</h4>
                            </div>
                            <div>
                                <h4>: Female</h4>
                            </div>
                        </div>
                        <div className={styles['right-details']}>
                            <div>
                                <h4>Microchipped</h4>
                            </div>
                            <div>
                                <h4>: Yes</h4>
                            </div>
                        </div>
                        <div className={styles['right-details']}>
                            <div>
                                <h4>Description</h4>
                            </div>
                            <div>
                                <h4>: Has red collar</h4>
                            </div>
                        </div>
                        <div className={styles['right-details']}>
                            <div>
                                <h4>Message</h4>
                            </div>
                            <div>
                                <h4>: Help us to find</h4>
                            </div>
                        </div>
                        <div className={styles['right-details']}>
                            <div>
                                <h4>Date Last Seen</h4>
                            </div>
                            <div>
                                <h4>: January 1, 2020</h4>
                            </div>
                        </div>
                        <div className={styles['right-details']}>
                            <div>
                                <h4>Location Last Seen</h4>
                            </div>
                            <div>
                                <h4>: Kamuning Road, Quezon City</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['footer-middle']}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['map-img']}
                    />
                </div>
            </div>
        </div>
    );
};
