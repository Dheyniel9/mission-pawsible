import classNames from 'classnames';
import styles from './profilepage-account.module.scss';
import profileIcon from '../../assets/profileIcon/uploadimage.png';

export interface Profilepage_AccountProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profilepage_Account = ({ className }: Profilepage_AccountProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <div className={styles['main-content']}>
                    <div className={styles['Account-img']}>
                        <img src={profileIcon} alt="profileIcon" width={60} />
                    </div>
                    <div className={styles['Account-header']}>
                        <h4 className={styles['Account-text']}>Last Name, First Name</h4>
                    </div>
                </div>

                <div className={styles['middle-content']}>
                    <div className={styles['Account-details']}>
                        <div>
                            <span className={styles['Account-span']}>EMAIL:</span>
                        </div>
                        <div>
                            <span className={styles.Account_emailText}>andreachiu@yahoo.com</span>
                        </div>
                    </div>
                    <div className={styles['Account-details']}>
                        <div>
                            <span className={styles['Account-span']}>CONTACT:</span>
                        </div>
                        <div>
                            <span className={styles.Account_emailText}>+63 917 1234567</span>
                        </div>
                    </div>
                    <div className={styles.Account_Contact}>
                        <div>
                            <span className={styles['Account-span']}>ADDRESS:</span>
                        </div>
                        <div>
                            <span className={styles.Account_emailText}>
                                94 Kamuning Road Interweave Building,Brgy. Kamuning, Quezon City
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles['footer-content']}>
                    <button className={styles['Account-btn']}>EDIT PROFILE</button>
                    <button className={styles['Logout-btn']}>LOGOUT</button>
                </div>
            </div>
        </div>
    );
};
