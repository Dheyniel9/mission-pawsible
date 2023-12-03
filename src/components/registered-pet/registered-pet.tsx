import classNames from 'classnames';
import styles from './registered-pet.module.scss';
import dog from '../../assets/Mission-image/dog1.png';
export interface Registered_petProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Registered_pet = ({ className }: Registered_petProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <div className={styles['main-container']}>
                    <div className={styles['main-content']}>
                        <div className={styles['register-header']}>
                            <h4>REGISTERED LOST PET</h4>

                            <button className={styles['add-btn']}>ADD +</button>
                        </div>
                    </div>
                    <div className={styles['middle-content']}>
                        <div className={styles['register-details']}>
                            <div className={styles['Container-img']}>
                                <img
                                    src={dog}
                                    alt="petimage"
                                    className={styles['registered-img']}
                                />
                            </div>
                            <div>
                                <h3 className={styles['middle-header']}>MO5-Poodle Tiny Yellow</h3>
                                <span className={styles['Registered-spanText']}>
                                    GENDER: Female Last Seen: Nov 12,2019
                                </span>
                            </div>
                            <div className={styles['middle-btn']}>
                                <button className={styles.Update_btn}>UPDATE</button>
                                <button className={styles['Listing-btn']}>CLOSE LISTING</button>
                            </div>
                        </div>
                        <div className={styles['register-details']}>
                            <div className={styles['Container-img']}>
                                <img
                                    src={dog}
                                    alt="petimage"
                                    className={styles['registered-img']}
                                />
                            </div>
                            <div>
                                <h3 className={styles['middle-header']}>MO5-Poodle Tiny Yellow</h3>
                                <span className={styles['Registered-spanText']}>
                                    GENDER: Female Last Seen: Nov 12,2019
                                </span>
                            </div>
                            <div className={styles['middle-btn']}>
                                <button className={styles.Update_btn}>UPDATE</button>
                                <button className={styles['Listing-btn']}>CLOSE LISTING</button>
                            </div>
                        </div>
                        <div className={styles['register-details']}>
                            <div className={styles['Container-img']}>
                                <img
                                    src={dog}
                                    alt="petimage"
                                    className={styles['registered-img']}
                                />
                            </div>
                            <div>
                                <h3 className={styles['middle-header']}>MO5-Poodle Tiny Yellow</h3>
                                <span className={styles['Registered-spanText']}>
                                    GENDER: Female Last Seen: Nov 12,2019
                                </span>
                            </div>
                            <div className={styles['middle-btn']}>
                                <button className={styles.Update_btn}>UPDATE</button>
                                <button className={styles['Listing-btn']}>CLOSE LISTING</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles['bottom-content']}>
                        <button className={styles['show-btn']}>SHOW MORE</button>
                    </div>
                </div>
                <div className={styles['footer-container']}>
                    <div className={styles['footer-content']}>
                        <div className={styles['register-header']}>
                            <h4>REGISTERED FOUND PET</h4>

                            <button className={styles['add-btn']}>ADD +</button>
                        </div>
                    </div>
                    <div className={styles['footer-text']}>
                        <h3 className={styles.middle_footer_text}>NO ENTRY</h3>
                    </div></div>
            </div>
        </div>
    );
};
