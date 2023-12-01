import classNames from 'classnames';
import styles from './login.module.scss';
import login from '../../assets/LOGIN/Login.png';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <div className={styles['login-img']}>
                    <img src={login} alt="loginImage" width={250} />
                </div>
                <div>
                    <h1>Log In</h1>
                </div>
            </div>
            <div className={styles['secondary-main']}>
                <form className={styles.form}>
                    <label>Email</label>
                    <input type="text" className={styles['form-input']} />
                    <br />
                    <label>Password</label>
                    <input type="password" className={styles['form-input']} />
                    <br />
                </form>
            </div>
            <div className={styles['login-rawtext']}>forget password?</div>
            <div className={styles['login-btn']}>
                <div>
                    <button>Sign in with Google</button>
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </div>
        </div>
    );
};
