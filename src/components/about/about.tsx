import classNames from 'classnames';
import styles from './about.module.scss';
import chua from '../../assets/about/chihuahua_img.png';
import poodle from '../../assets/about/poodle_img.png';
import cat from '../../assets/about/cat_img.png';
export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['main-header']}>
                <h1 className={styles.Header}>ABOUT US</h1>
                <p className={styles.description}>
                    At Lost and Found Dog Network, we're driven by a simple yet powerful mission: to
                    reunite lost pets with their loving families. The unbreakable bond between pets
                    and their owners is at the heart of everything we do. We understand the worry
                    and heartache that come with a pet's disappearance, and we're here to make those
                    heartwarming reunions possible.
                </p>
                <p className={styles.description}>
                    Our journey began with a shared passion for pets and a vision to create a safer,
                    more efficient platform for lost pets. We wanted to connect pet owners, finders,
                    and lovers while offering valuable resources and a caring community. It's our
                    pleasure to witness the sheer joy and relief on the faces of reunited pet
                    owners. Your stories inspire us, and your support keeps us dedicated to our
                    mission. Together, we're making a difference, one wagging tail at a time
                </p>
                <p className={styles.description}>
                    So, whether you're a pet owner, a finder, or an animal enthusiast, we welcome
                    you to be part of our journey. Share your stories, join our community, and help
                    us in our mission to ensure that no lost pet remains lost for long. Lost and
                    Found Dog Network is where hope and love intersect, and every reunion is a
                    testament to the power of unity. Thank you for being a part of our network,
                    where we celebrate the extraordinary bond between humans and their four-legged
                    companions.
                </p>
            </div>
            <div className={styles['main-img']}>
                <img src={chua} alt="dog" className={styles['about-image']} />
                <img src={poodle} alt="dog" className={styles.image2} />
                <img src={cat} alt="dog" className={styles.image3} />
            </div>
        </div>
    );
};
