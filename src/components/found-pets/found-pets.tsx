import classNames from 'classnames';
import styles from './found-pets.module.scss';
import image from '../../assets/reunited/SECTION TOP.png';
import productImg from '../../assets/productimg/image 2.png';

export interface Found_petsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Found_pets = ({ className }: Found_petsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.root, className)}>
                <div>
                    <div className={styles['header-container']}>
                        <div>
                            <img
                                src={image}
                                alt="imageTop"
                                width={500}
                                className={styles['header-img']}
                            />
                        </div>
                        <div className={styles['header-text']}>
                            <h1 className={styles['header-text']}>
                                Reunite A Found Pet <br />
                                <span className={styles['header-span']}>
                                    Helping Pets Find Their Way Home
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className={styles['middle-container']}>
                    <div>
                        <h3>TOTAL: 53</h3>
                    </div>
                    <div className={styles['middle-content']}>
                        <div className={styles['img-container']}>
                            <div>
                                <img
                                    src={productImg}
                                    alt="prdImg"
                                    width={120}
                                    className={styles['middle-img']}
                                />
                            </div>
                            <div className={styles['middle-text']}>
                                <h4 className={styles['petdetail-text']}>
                                    MO502- Poodle Tiny Yellow
                                </h4>
                            </div>
                            <div className={styles['petDetails-footer']}>
                                <span className={styles['petDetails-span']}>
                                    Reunited Since: Feb 20, 2020 <br /> from: Quezon City
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
