import classNames from 'classnames';
import styles from './filter.module.scss';

export interface FilterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Filter = ({ className }: FilterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <div className={styles['filter-container']}>
                    <div className={styles['header-section']}>
                        <h5>FILTER</h5>
                    </div>
                    <div className={styles['middle-container']}>
                        <div className={styles['species-container']}>
                            <div>
                                <h6>Species</h6>
                            </div>
                            <div className={styles['first-content']}>
                                <input type="checkbox" />
                                <label htmlFor="text">Cat</label>

                                <input type="checkbox" />
                                <label htmlFor="text">Dog</label>
                            </div>
                        </div>
                        <div className={styles['gender-container']}>
                            <div>
                                <h6>Gender</h6>
                            </div>
                            <div className={styles['first-content']}>
                                <input type="checkbox" />
                                <label htmlFor="text">Male</label>

                                <input type="checkbox" />
                                <label htmlFor="text">Female</label>
                            </div>
                        </div>
                        <div className={styles['size-container']}>
                            <div>
                                <h6>Size</h6>
                            </div>
                            <div className={styles['size-section']}>
                                <input type="checkbox" />
                                <label htmlFor="text">Small</label>
                                <input type="checkbox" />
                                <label htmlFor="text">Medium</label>
                                <input type="checkbox" />
                                <label htmlFor="text">Large</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
