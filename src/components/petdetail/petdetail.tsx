import classNames from 'classnames';
import styles from './petdetail.module.scss';

export interface PetdetailProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Petdetail = ({ className }: PetdetailProps) => {
    return <div className={classNames(styles.root, className)}>
        <div />
    </div>;
};
