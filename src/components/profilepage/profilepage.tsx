import classNames from 'classnames';
import styles from './profilepage.module.scss';
import profileIcon from '../../assets/profileIcon/uploadimage.png';

export interface ProfilepageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profilepage = ({ className }: ProfilepageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['main-div']}>
                <div className={styles['left-main']}>
                    <div>
                        <img src={profileIcon} alt="profileIcon" width={100} />
                    </div>
                    <div className={styles['profile-btn']}>
                        <button className={styles['left-btn']}>Edit Profile</button>
                    </div>
                </div>
                <div className={styles['main-profile']}>
                    <div>
                        <div className={styles['header-form']}>
                            <h1>Update Profile</h1>
                        </div>

                        <div className={styles['profile-form']}>
                            <div>
                                <input type="text" className={styles['form-input']} />
                                <br />
                                <label htmlFor="lastName">Last Name:</label>
                            </div>
                            <div>
                                <input type="text" className={styles['form-input']} />
                                <br />
                                <label htmlFor="lastName">First Name:</label>
                                <br />
                            </div>
                        </div>
                        <div className={styles['address-form']}>
                            <input type="text" className={styles['address-input']} />
                            <br />
                            <label htmlFor="address">Address:</label>
                        </div>
                        <div className={styles['profile-form']}>
                            <div>
                                <input type="text" className={styles['form-input']} />
                                <br />
                                <label htmlFor="Email">Email:</label>
                            </div>
                            <div>
                                <input type="text" className={styles['form-input']} />
                                <br />
                                <label htmlFor="Contact Number">Contact Number:</label>
                                <br />
                            </div>
                        </div>
                        <div className={styles['checkbox-form']}>
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>CHANGE PASSWORD</p>
                        </div>
                        <div className={styles['profile-form']}>
                            <div>
                                <input type="password" className={styles['form-input']} />
                                <br />
                                <label htmlFor="password">Password:</label>
                            </div>
                            <div>
                                <input type="password" className={styles['form-input']} />
                                <br />
                                <label htmlFor="confirmPw">Confirm Password:</label>
                                <br />
                            </div>
                        </div>
                        <div className={styles['update-btn']}>
                            <div className={styles['save-profile']}>
                                <button className={styles['save-btn']}>SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
