import classNames from 'classnames';
import styles from './reportpet.module.scss';

export interface ReportpetProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Reportpet = ({ className }: ReportpetProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['main-div']}>
                <div className={styles.header}>
                    <h1>REPORT PET</h1>
                </div>

                <div className={styles['main-root']}>
                    <div className={styles['main-left']}>
                        <div className={styles['first-left']}>
                            <label htmlFor="text">Pet Name </label>
                            <br />
                            <input type="text" className={styles['first-input']} />
                        </div>
                        <div className={styles['second-left']}>
                            <div className={styles['pet-type']}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Pet Type
                                </label>
                                <br />
                                <select className={styles.update_downlist}><option>DOG</option><option>CAT</option></select></div>
                            <div className={styles.breed}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Breed
                                </label>
                                <br />
                                <input type="text" className={styles['breed-input']} />
                            </div>
                        </div>
                        <div>
                            <div className={styles['pet-type']}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Upload an Image
                                </label>
                                <br />
                                <button className={styles['report-btn']}>Choose File</button>
                            </div>
                        </div>
                        <div className={styles['fourth-left']}>
                            <div className={styles['pet-type']}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Pet Status
                                </label>
                                <br />
                            </div>
                            <div className={styles['fourth-left-radio']}>
                                <div className={styles['lostpet-radio']}>
                                    <input type="radio" />
                                    <label htmlFor="text">Lost Pet</label>
                                </div>
                                <div className={styles['lostpet-radio']}>
                                    <input type="radio" />
                                    <label htmlFor="text">FOUND Pet</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles['left-color']}>
                            <label htmlFor="text" className={styles['label-text']}>
                                COLOR
                            </label>
                            <br />
                            <input type="text" className={styles['first-input']} />
                        </div>
                        <div className={styles['second-left']}>
                            <div className={styles['pet-type']}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Size
                                </label>
                                <br />
                                <select className={styles.update_downlist}><option>SMALL</option><option>MEDIUM</option><option>LARGE</option></select></div>
                            <div className={styles.breed}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Gender
                                </label>
                                <br />
                                <select className={styles.update_downlist}><option>FEMALE</option><option>MALE</option></select>
                            </div>
                        </div>
                    </div>
                    <div className={styles['main-right']}>
                        <div className={styles['first-left']}>
                            <label htmlFor="text" className={styles['label-text']}>
                                Microchipped
                            </label>
                            <br />
                            <select className={styles.update_downlist}><option>YES</option><option>NO</option></select>
                        </div>
                        <div className={styles['second-right']}>
                            <div className={styles['pet-type']}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Date Last Seen
                                </label>
                                <br />
                                <input type="text" className={styles['type-input']} />
                            </div>
                            <div className={styles.breed}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Location Last Seen
                                </label>
                                <br />
                                <input type="text" className={styles['breed-input']} />
                            </div>
                        </div>
                        <div className={styles['second-right']}>
                            <div className={styles['descrition-container']}>
                                <label htmlFor="text" className={styles['label-text']}>
                                    Description
                                </label>
                                <br />
                                <textarea className={styles['textarea-right']} />
                            </div>
                        </div>
                        <div className={styles['second-right']}>
                            <div className={styles['message-container']}>
                                <label htmlFor="text">Message</label>
                                <br />
                                <textarea className={styles['textarea-right']} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['report-button']}>
                    <button className={styles['cancel-btn']}>Cancel</button>

                    <button className={styles['save-btn']}>SAVE & POST</button>
                </div>
            </div>
        </div>
    );
};
