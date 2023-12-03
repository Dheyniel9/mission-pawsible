import classNames from 'classnames';
import styles from './update-report.module.scss';

export interface Update_reportProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Update_report = ({ className }: Update_reportProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles['main-container']}>
            <div className={styles.header}>
                <h1>UPDATE REPORT</h1>
            </div>

            <div className={styles['middle-container']}>
                <div className={styles['left-container']}>
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
                    <div>
                        <div className={styles['pet-type']}>
                            <label htmlFor="text" className={styles['label-text']}>
                                Pet Status
                            </label>
                            <br />
                        </div>
                        <div className={styles['radio-box']}>
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
                <div className={styles['right-container']}>
                    <div className={styles['first-left']}>
                        <label htmlFor="text" className={styles['label-text']}>
                            Microchipped
                        </label>
                        <br />
                        <select className={styles['right-downlist']}><option>YES</option><option>NO</option></select>
                    </div>
                    <div className={styles['second-right']}>
                        <div className={styles['pet-type']}>
                            <label htmlFor="text" className={styles['label-text']}>
                                Date Last Seen
                            </label>
                            <br />
                            <input type="text" className={styles['date-input']} />
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
                        <div className={styles['description-container']}>
                            <label htmlFor="text" className={styles['label-text']}>
                                Description
                            </label>
                            <br />
                            <textarea className={styles.description_textarea} />
                        </div>
                        <div className={styles['description-container']}>
                            <label htmlFor="text" className={styles['label-text']}>
                                Message
                            </label>
                            <br />
                            <textarea className={styles.description_textarea} />
                        </div>
                    </div></div>
            </div>
            <div className={styles['footer-container']}>
                <button className={styles['cancel-btn']}>Cancel</button>

                <button className={styles['save-btn']}>UPDATE</button>
            </div>
        </div></div>;
};
