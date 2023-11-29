import classNames from 'classnames';
import styles from './register.module.scss';
import register from '../../assets/REGISTER/register.png';

export interface RegisterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Register = ({ className }: RegisterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['register-main']}>
                <img src={register} alt="register pic" width={200} />
                <div>
                    <h2 className={styles['h2-text']}>Be a part of our growing family today!</h2>
                </div>
            </div>
            <div className={styles['main-form']}>
                <div className={styles.form}>
                    <div className={styles['second-main']}>
                        <label htmlFor="firstName" className={styles['label-text']}>
                            First Name
                        </label>
                        <br />
                        <input type="text" className={styles['form-input']} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className={styles['label-text']}>
                            Last Name
                        </label>
                        <br />
                        <input type="text" className={styles['form-input']} />
                    </div>
                </div>
                <div className={styles.form}>
                    <div>
                        <label htmlFor="Email" className={styles['label-text']}>
                            Email
                        </label>
                        <br />
                        <input type="text" className={styles['form-input']} />
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className={styles['label-text']}>
                            Contact Number
                        </label>
                        <br />
                        <input type="text" className={styles['form-input']} />
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles['address-form']}>
                        <label htmlFor="address" className={styles['label-text']}>
                            Address
                        </label>
                        <br />
                        <input type="text" className={styles['address-input']} />
                    </div>
                </div>
                <div className={styles.form}>
                    <div>
                        <label htmlFor="password" className={styles['label-text']}>
                            Password
                        </label>
                        <br />
                        <input type="password" className={styles['form-input']} />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className={styles['label-text']}>
                            Confirm Password
                        </label>
                        <br />
                        <input type="password" className={styles['form-input']} />
                    </div>
                </div>
            </div>
        </div>
    );
};
