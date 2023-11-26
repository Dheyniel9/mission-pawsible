import classNames from 'classnames';
import styles from './contact.module.scss';
import { useState } from 'react';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    const [query, setQuery] = useState({
        email: '',
        subject: '',
        message: '',
    });

    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.root}>CONTACT US</h1>
            <p className={styles.p}>
                We value your feedback and are here to assist you. Whether you have questions,
                suggestions, or need assistance, our team is ready to help.
            </p>
            <form className={styles.form}>
                <label className={styles.label}>Email</label>
                <br />
                <input type="text" className={styles.input} />
                <br />
                <label className={styles.label}>Subject</label>
                <br />
                <input type="text" className={styles.input} />
                <br />
                <label className={styles.label}>Message</label>
                <br />
                <textarea className={styles.textarea} />
                <br />
                <br />
                <button className={styles.button}>SEND</button>
            </form>
        </div>
    );
};
