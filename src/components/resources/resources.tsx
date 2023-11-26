import classNames from 'classnames';
import styles from './resources.module.scss';
import dog1 from '../../assets/Mission-image/dog1.png';
import dog2 from '../../assets/Mission-image/dog2.png';
import dog3 from '../../assets/Mission-image/dog3.png';

export interface ResourcesProps {
    className?: string;
}

export const Resources = ({ className }: ResourcesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.main}>
                <h1 className={styles.Header}>Resources</h1>
            </div>
            <div className={styles.hero}>
                <div className={classNames('img', styles.image)}>
                    <img src={dog1} alt="dog1" className={styles['main-img']} />
                </div>
                <div>
                    <h2>What is a Pomeranian? How to Identify Pomeranian Dogs</h2>
                    <h3>Jaime Lannister October 18, 2023</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
            <div className={styles.hero}>
                <div className={classNames('img', styles.image)}>
                    <img src={dog2} alt="dog1" className={styles['main-img']} />
                </div>
                <div>
                    <h2>What is a Pomeranian? How to Identify Pomeranian Dogs</h2>
                    <h3>Jaime Lannister October 18, 2023</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
            <div className={styles.hero}>
                <div className={classNames('img', styles.image)}>
                    <img src={dog3} alt="dog1" className={styles['main-img']} />
                </div>
                <div>
                    <h2>What is a Pomeranian? How to Identify Pomeranian Dogs</h2>
                    <h3>Jaime Lannister October 18, 2023</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
        </div>
    );
};
