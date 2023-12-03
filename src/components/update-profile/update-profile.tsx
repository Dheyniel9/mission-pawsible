import classNames from 'classnames';
import styles from './update-profile.module.scss';
import image from '../../assets/profileIcon/uploadimage.png';

export interface Update_profileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Update_profile = ({ className }: Update_profileProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['main-container']}>
                <div className={styles.left_content}>
                    <div className={styles['left-container']}>
                        <div>
                            <img src={image} alt="profileIcon" width={100} />
                        </div>
                        <div>
                            <button className={styles['left-btn']}>EDIT IMAGE</button>
                        </div>
                    </div>
                </div>
                <div className={styles.right_content}>
                    <div className={styles['right-header']}>
                        <h1 className={styles['header-text']}>UPDATE PROFILE</h1>
                    </div>
                    <div className={styles['form-container']}>
                        <div className={styles['form-content']}>
                            <div>
                                <input type="text" className={styles.form_input} />
                                <br />
                                <label htmlFor="text" className={styles['form-label']}>
                                    LAST NAME:
                                </label>
                            </div>
                            <div>
                                <input type="text" className={styles.form_input} />
                                <br />
                                <label htmlFor="text" className={styles['form-label']}>
                                    FIRST NAME:
                                </label>
                            </div>
                        </div>
                        <div className={styles['form-content']}>
                            <div className={styles.address_container}>
                                <input type="text" className={styles['address-input']} />
                                <br />
                                <label htmlFor="text" className={styles['form-label']}>
                                    ADDRESS:
                                </label>
                            </div>
                        </div>
                        <div className={styles['form-content']}>
                            <div>
                                <input type="text" className={styles.form_input} />
                                <br />
                                <label htmlFor="text" className={styles['form-label']}>
                                    EMAIL:
                                </label>
                            </div>
                            <div>
                                <input type="text" className={styles.form_input} />
                                <br />
                                <label htmlFor="text" className={styles['form-label']}>
                                    CONTACT NUMBER:
                                </label>
                            </div>
                        </div>
                        <div className={styles['form-content']}>
                            <div>
                                <input type="password" className={styles.form_input} />
                                <br />
                                <label htmlFor="text" className={styles['form-label']}>
                                    PASSWORD:
                                </label>
                            </div>
                            <div>
                                <input type="password" className={styles.form_input} />
                                <br />
                                <label htmlFor="text" className={styles['form-label']}>
                                    CONFIRM PASSWORD:
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
