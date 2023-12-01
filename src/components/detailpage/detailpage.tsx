import classNames from 'classnames';
import styles from './detailpage.module.scss';
import dog from '../../assets/Mission-image/dog1.png';
export interface DetailpageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Detailpage = ({ className }: DetailpageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['main-root']}>
                <div className={styles['detail-header']}>
                    <h1>What is a Pomeranian? How to Identify Pomeranian Dogs</h1>
                    <p>Jaime Lannister October 18, 2023</p>
                </div>
                <div className={styles['detail-img']}>
                    <img src={dog} alt="" />
                </div>
                <div className={styles['detail-text']}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className={styles['detail-text']}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
};
